import { Injectable } from '@angular/core';
import WalletConnectProvider from "@walletconnect/web3-provider";
// import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import Web3 from 'web3';

import { Web3ModalModule, Web3ModalComponent, Web3ModalService } from '@mindsorg/web3modal-angular';

@Injectable()
export class NFTContractService {
    private rpcUrl: "https://api-testnet.elastos.io/eth";
    private stickerAddr = "";
    private accountAddress = "";
    private web3: Web3;
    private stickerContract;
    private walletConnectProvider: WalletConnectProvider;
    private walletConnectWeb3: Web3;
    private connector;
    constructor() {
    }

    async connect(){
        this.setupWalletConnectProvider();
    }

    async mint(){
        const fromAddress = "";
        const toAddress = "";
        const gasPrice = "";
        const tokenId = "";
        const supply = "123";
        const uri = "https://github.com/elastos-trinity/feeds-nft-contract#readme";
        const royalty = "30000";
        const mintData = this.stickerContract.methods.mint(tokenId, supply, uri, royalty).encodeABI();
        const mintTx = {
            from: fromAddress,
            to: toAddress,
            value: 0,
            data: mintData,
            gasPrice,
        };

        // const { status: mintStatus } = await this.sendTxWaitForReceipt(mintTx, accCreator);
    }

    async sendTxWaitForReceipt(tx, acc){
        try {
            if (!this.web3) {
              console.error("Web3 not initialized");
            }
            if (!tx.gasPrice) {
              tx.gasPrice = await this.web3.eth.getGasPrice();
            }
            if (!tx.gas) {
              tx.gas = Math.round(await this.web3.eth.estimateGas(tx) * 1.2);
            }
            const signedTx = await acc.signTransaction(tx);
            const receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            return receipt;
          } catch (err) {
            console.error(String(err));
            return;
          }
  }
  private async setupWalletConnectProvider() {
    //  Create WalletConnect Provider
    this.walletConnectProvider = new WalletConnectProvider({
      rpc: {
        21: "https://api-testnet.elastos.io/eth",
      },
      // infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
      infuraId: "0dd3ab5ca24946938c6d411a1637cc59",
      
      qrcodeModalOptions: {
        mobileLinks: [
          "metamask",
        ],
      },
    });

    console.log("Connected?", this.walletConnectProvider.connected);

    // Subscribe to accounts change
    this.walletConnectProvider.on("accountsChanged", (accounts: string[]) => {
      console.log(accounts);
    });

    // Subscribe to chainId change
    this.walletConnectProvider.on("chainChanged", (chainId: number) => {
      console.log(chainId);
    });

    // Subscribe to session disconnection
    this.walletConnectProvider.on("disconnect", (code: number, reason: string) => {
      console.log(code, reason);
    });

    // Subscribe to session disconnection
    this.walletConnectProvider.on("error", (code: number, reason: string) => {
      console.error(code, reason);
    });

    //  Enable session (triggers QR Code modal)
    console.log("Connecting to wallet connect");
    let enabled = await this.walletConnectProvider.enable();
    console.log("CONNECTED to wallet connect", enabled, this.walletConnectProvider);

    

    
    this.accountAddress = await this.getAccountAddress();

    console.log("account address is "+this.accountAddress);
    this.walletConnectWeb3 = new Web3(this.walletConnectProvider as any); // HACK
  }

  private async getAccountAddress(){
    console.log(4444444444);
    const accounts = await this.walletConnectWeb3.eth.getAccounts();
    console.log(accounts);
    return accounts[0];
  }

  public async testWalletConnectMint() {
    let contractAbi = require("../../assets/erc721.abi.json");
    // let contractAbi = contracttest.stickerABI;
    let contractAddress = "0x5b462bac2d07223711aA0e911c846e5e0E787654"; // Elastos Testnet
    let contract = new this.walletConnectWeb3.eth.Contract(contractAbi, contractAddress);
    console.log(contract);

    let gasPrice = await this.walletConnectWeb3.eth.getGasPrice();
    console.log("Gas price:", gasPrice);

    console.log("Sending transaction with account address:", this.accountAddress);
    let transactionParams = {
        from: this.accountAddress,
        gasPrice: gasPrice,
        gas: 5000000,
        value: 0
    };

    let tokenId = Math.floor(Math.random()*10000000000);
    let tokenUri = "https://my.token.uri.com";
    console.log("Calling smart contract through wallet connect", this.accountAddress, tokenId, tokenUri);
    contract.methods.mint(this.accountAddress, tokenId, tokenUri).send(transactionParams)
        .on('transactionHash', (hash) => {
          console.log("transactionHash", hash);
        })
        .on('receipt', (receipt) => {
          console.log("receipt", receipt);
        })
        .on('confirmation', (confirmationNumber, receipt) => {
          console.log("confirmation", confirmationNumber, receipt);
        })
        .on('error', (error, receipt) => {
          console.error("mint error===");
          console.error("error", error);
        });
  }


  public async disconnect(){
    if (this.walletConnectProvider) {
      console.log("Disconnecting from wallet connect");
      //await this.walletConnectProvider.disconnect();
      await (await this.walletConnectProvider.getWalletConnector()).killSession();
      console.log("Disconnected from wallet connect");
      this.walletConnectProvider = null;
      this.accountAddress = "";
    }
    else {
      console.log("Not connected to wallet connect");
    }
  }
}
