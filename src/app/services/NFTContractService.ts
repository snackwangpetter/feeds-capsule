import { Injectable } from '@angular/core';
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

import Web3 from 'web3';
import { Web3ModalModule, Web3ModalComponent, Web3ModalService } from '@mindsorg/web3modal-angular';
import Torus from '@toruslabs/torus-embed';
// import Portis from '@portis/web3';
// import { metama} from '@metamask/mobile-provider';

import { metamaskprovider } from '@metamask/mobile-provider'

import detectEthereumProvider from '@metamask/detect-provider'
// import detectEthereumProvider from '@metamask/mobile-provider'

@Injectable()
export class NFTContractService {
    private rpcUrl: "https://api-testnet.elastos.io/eth";
    private stickerAddr = "";
    private web3: Web3;
    private stickerContract;
    private walletConnectProvider: WalletConnectProvider;
    private walletConnectWeb3: Web3;
    private connector;
    constructor(private web3ModalService: Web3ModalService) {
    }

    async init(){
      // const provider = null;
      // try{
      //   const provider = await detectEthereumProvider()
      // }catch(err){
      //   console.log(err);
      // }
      
      // console.log(provider);
      // if (provider) {
      
      //   console.log('Ethereum successfully detected!')
      
      //   // From now on, this should always be true:
      //   // provider === window.ethereum
      
      //   // Access the decentralized web!
      
      //   // Legacy providers may only have ethereum.sendAsync
      //   // const chainId = await provider.request({
      //   //   method: 'eth_chainId'
      //   // })
      // } else {
      
      //   // if the provider is not detected, detectEthereumProvider resolves to null
      //   console.log('Please install MetaMask!');
      // }


      // this.web3ModalService.setConfiguration({
      //   disableInjectedProvider: false,
      //   cacheProvider: false,
      //   providerOptions: {
          
      //     walletconnect: {
      //       package: WalletConnectProvider,
      //       options: {
      //         infuraId: '0dd3ab5ca24946938c6d411a1637cc59',
      //       },
      //     },
      //     torus: {
      //       package: Torus,
      //     },
      //     // walletlink: {
      //     //   package: WalletLink,
      //     //   options: {
      //     //     infuraUrl: 'https://mainnet.infura.io/v3/PROJECT_ID',
      //     //     appName: "My Awesome DApp",
      //     //     appLogoUrl: "https://example.com/logo.png",
      //     //     darkMode: false
      //     //   },
      //     // },
      //     // portis: {
      //     //   package: Portis,
      //     //   options: {
      //     //     id: 'portis',
      //     //   },
      //     // },
      //   },
        
      //   network: '',
      // });

  
      // await this.web3ModalService.open();

        // // this.web3 = new Web3(new Web3.providers.HttpProvider(this.rpcUrl));
        // // this.stickerContract = new this.web3.eth.Contract(contract.stickerABI, this.stickerAddr);
        // await this.setupWalletConnectProvider();

        // //  Get Chain Id
        // const chainId = await this.walletConnectWeb3.eth.getChainId();
        // console.log("Chain ID: ", chainId);

        // if (chainId != 20 && chainId != 21) {
        //   console.error("ERROR: Connected to wrong ethereum network "+chainId+". Not an elastos network. Check that the wallet app is using an Elastos network.");
        //   return;
        // }

        this.setupWalletConnectProvider();
        // this.testStandaloneClient();
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
        // 20: "https://testnet.elastos.io/eth",
        21: "https://api-testnet.elastos.io/eth",
      },
      // bridge: "https://walletconnect.elastos.net/v1"
      // bridge: "http://192.168.31.114:5001"
      bridge: "https://bridge.walletconnect.org/",

      infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
      qrcodeModalOptions: {
        mobileLinks: [
          "rainbow",
          "metamask",
          "argent",
          "trust",
          "imtoken",
          "pillar",
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

    this.walletConnectWeb3 = new Web3(this.walletConnectProvider as any); // HACK
  }

  // private async setupWalletConnectProvider() {
  //   //  Create WalletConnect Provider
  //   this.walletConnectProvider = new WalletConnectProvider({
  //     rpc: {
  //       // 20: "https://testnet.elastos.io/eth",
  //       21: "https://api-testnet.elastos.io/eth",
  //     },
  //     bridge: "https://bridge.walletconnect.org/hello"
  //     // bridge: "https://bridge.walletconnect.org/"
  //     //bridge: "http://192.168.31.114:5001"
  //     //bridge: "http://192.168.1.6:5001"
  //   });

  //   console.log("Connected?", this.walletConnectProvider.connected);

  //   // Subscribe to accounts change
  //   this.walletConnectProvider.on("accountsChanged", (accounts: string[]) => {
  //     console.log("77777777777777777");
  //     console.log(accounts);
  //   });

  //   // Subscribe to chainId change
  //   this.walletConnectProvider.on("chainChanged", (chainId: number) => {
  //     console.log("8888888888");
  //     console.log(chainId);
  //   });

  //   // Subscribe to session disconnection
  //   this.walletConnectProvider.on("disconnect", (code: number, reason: string) => {
  //     console.log("9999999999");
  //     console.log(code, reason);
  //   });

  //   // Subscribe to session disconnection
  //   this.walletConnectProvider.on("error", (code: number, reason: string) => {
  //     console.log("000000000");
  //     console.error(code, reason);
  //   });

  //   //  Enable session (triggers QR Code modal)
  //   console.log("Connecting to wallet connect");
  //   console.log("11111111111");
  //   this.walletConnectProvider.enable().then((result)=>{
  //     console.log("----------");
  //     console.log(result);
  //   }).catch((error)=>{
  //     console.log("+++++++++++");
  //     console.log(error);
  //   })
  //   let enabled = await this.walletConnectProvider.enable();
  //   // console.log("22222222222222");
  //   console.log("CONNECTED to wallet connect", enabled, this.walletConnectProvider);

  //   this.walletConnectWeb3 = new Web3(this.walletConnectProvider as any); // HACK

  //   console.log("33333333333");
  //   console.log(this.walletConnectWeb3);
  // }

  public async testWalletConnectMint() {
    const accounts = await this.walletConnectWeb3.eth.getAccounts();
    console.log(4444444444);

    console.log(accounts);
    let contractAbi = require("../../assets/erc721.abi.json");
    // let contractAbi = contracttest.stickerABI;
    let contractAddress = "0x5b462bac2d07223711aA0e911c846e5e0E787654"; // Elastos Testnet
    let contract = new this.walletConnectWeb3.eth.Contract(contractAbi, contractAddress);
    console.log(contract);

    let gasPrice = await this.walletConnectWeb3.eth.getGasPrice();
    console.log("Gas price:", gasPrice);

    console.log("Sending transaction with account address:", accounts[0]);
    let transactionParams = {
        from: accounts[0],
        gasPrice: gasPrice,
        gas: 5000000,
        value: 0
    };

    let address = accounts[0];
    let tokenId = Math.floor(Math.random()*10000000000);
    let tokenUri = "https://my.token.uri.com";
    console.log("Calling smart contract through wallet connect", address, tokenId, tokenUri);
    contract.methods.mint(address, tokenId, tokenUri).send(transactionParams)
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
          console.error("error", error);
        });
  }


  public async disconnect(){
    // this.web3ModalService.clearCachedProvider();
    // this.web3ModalService.close();
    if (this.walletConnectProvider) {
      console.log("Disconnecting from wallet connect");
      //await this.walletConnectProvider.disconnect();
      await (await this.walletConnectProvider.getWalletConnector()).killSession();
      console.log("Disconnected from wallet connect");
      this.walletConnectProvider = null;
    }
    else {
      console.log("Not connected to wallet connect");
    }
  }


  public testStandaloneClient(){

    // Create a connector
    this.connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org", // Required
      qrcodeModal: QRCodeModal,
    });
    
    // Check if connection is already established
    if (!this.connector.connected) {
      // create new session
      this.connector.createSession();
    }
    
    // Subscribe to connection events
    this.connector.on("connect", (error, payload) => {
      if (error) {
        throw error;
      }
    
      // Get provided accounts and chainId
      const { accounts, chainId } = payload.params[0];
    });
    
    this.connector.on("session_update", (error, payload) => {
      if (error) {
        throw error;
      }
    
      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0];
    });
    
    this.connector.on("disconnect", (error, payload) => {
      if (error) {
        throw error;
      }
    
      // Delete connector
    });
  }


  sendtransaction(){
    // Draft transaction
    const tx = {
      from: "0xbc28Ea04101F03aA7a94C1379bc3AB32E65e62d3", // Required
      to: "0x89D24A7b4cCB1b6fAA2625Fe562bDd9A23260359", // Required (for non contract deployments)
      data: "0x", // Required
      gasPrice: "0x02540be400", // Optional
      gas: "0x9c40", // Optional
      value: "0x00", // Optional
      nonce: "0x0114", // Optional
    };

    // Send transaction
    this.connector
      .sendTransaction(tx)
      .then((result) => {
        // Returns transaction id (hash)
        console.log(result);
      })
      .catch((error) => {
        // Error returned when rejected
        console.error(error);
      });
  }
}
