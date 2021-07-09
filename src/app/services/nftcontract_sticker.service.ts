import { Injectable } from '@angular/core';
import { WalletConnectControllerService } from 'src/app/services/walletconnect_controller.service';
import Web3 from 'web3';

@Injectable()
export class NFTContractStickerService {
    private stickerAddr:string = "0x6F2477C1439676337b02D51C3b0c327942751C9d";
    private stickerAbi = require("../../assets/contracts/stickerABI.json");
    private web3: Web3;
    private stickerContract: any;

    constructor(private walletConnectControllerService: WalletConnectControllerService) {
      this.init();
    }

    init(){
      this.web3 = this.walletConnectControllerService.getWeb3();
      if (!this.web3)
        return ;
      this.stickerContract = new this.web3.eth.Contract(this.stickerAbi,this.stickerAddr);
    }

    setApprovalForAll(address: string, approved: boolean){
      return new Promise(async (resolve, reject) => {
        const data = this.stickerContract.methods.setApprovalForAll(address, approved).encodeABI();
        let transactionParams = await this.createTxParams(data);
        console.log("Calling smart contract through wallet connect", data, transactionParams);
        this.stickerContract.methods.setApprovalForAll(address, approved).send(transactionParams)
            .on('transactionHash', (hash) => {
              console.log("transactionHash", hash);
            })
            .on('receipt', (receipt) => {
              resolve(receipt);
              console.log("receipt", receipt);
            })
            .on('confirmation', (confirmationNumber, receipt) => {
              console.log("confirmation", confirmationNumber, receipt);
            })
            .on('error', (error, receipt) => {
              resolve(receipt);
              console.error("mint error===");
              console.error("error", error);
            });
      })
    }

    async tokenInfo(tokenId){
      if (!this.stickerContract)
        return [];
      return await this.stickerContract.methods.tokenInfo(tokenId).call();
    }

    async mint(tokenId, supply, uri, royalty): Promise<any>{
      return new Promise(async (resolve, reject) => {

        console.log("1111111111111",tokenId,supply,uri,royalty);

        const mintdata = this.stickerContract.methods.mint(tokenId,supply,uri,royalty).encodeABI();
        const txData = {
          from: this.walletConnectControllerService.getAccountAddress(),
          to: this.stickerAddr,
          value: 0,
          data: mintdata
        };
        console.log("22222222222222",txData);
        let transactionParams = await this.createTxParams(txData);
    
        console.log("Calling smart contract through wallet connect", txData, transactionParams);
        this.checkTokenState(tokenId);
        console.log("before");
        this.stickerContract.methods.mint(tokenId, supply, uri, royalty).send(transactionParams)
            .on('transactionHash', (hash) => {
              console.log("transactionHash", hash);
            })
            .on('receipt', (receipt) => {
              resolve(receipt);
              console.log("receipt", receipt);
            })
            .on('confirmation', (confirmationNumber, receipt) => {
              console.log("confirmation", confirmationNumber, receipt);
            })
            .on('error', (error, receipt) => {
              resolve(receipt);
              console.error("error", error, receipt);
            });

        this.checkTokenState(tokenId);
      });
    }
    
    async tokenIdOfOwnerByIndex(address, index){
      return await this.stickerContract.methods.tokenIdOfOwnerByIndex(address,index).call();
    }

    async tokenCountOfOwner(address){
      return await this.stickerContract.methods.tokenCountOfOwner(address).call();
    }

    async createTxParams(data){
      let accountAddress = this.walletConnectControllerService.getAccountAddress();
      let gas = 80000;
      try{
        let gas = await this.web3.eth.estimateGas(data,(error,gas)=>{
          console.log("===gas error===",error);;
          console.log("===gas gas===",gas);;
        })
      }catch(error){
        console.log("error", error);
      }
      
      console.log("===gas ===",gas);
      let gasPrice = await this.web3.eth.getGasPrice();
      return {
        from: accountAddress,
        // to: stickerAddr,
        gasPrice: gasPrice,
        gas: Math.round(gas*3),
        value: 0
      };
    }


    // public async testWalletConnectMint() {
    //   let contractAbi = require("../../assets/contracts/erc721.abi.json");
    //   // let contractAbi = contracttest.stickerABI;
    //   let contractAddress = "0x5b462bac2d07223711aA0e911c846e5e0E787654"; // Elastos Testnet
    //   let accountAddress = this.walletConnectControllerService.getAccountAddress();
    //   let walletConnectWeb3 = this.walletConnectControllerService.getWeb3();
    //   let contract = new walletConnectWeb3.eth.Contract(contractAbi, contractAddress);
    //   console.log(contract);
  
    //   let gasPrice = await walletConnectWeb3.eth.getGasPrice();
    //   console.log("Gas price:", gasPrice);
  
    //   console.log("Sending transaction with account address:", accountAddress);
    //   let transactionParams = {
    //       from: accountAddress,
    //       gasPrice: gasPrice,
    //       gas: 5000000,
    //       value: 0
    //   };
  
    //   let tokenId = Math.floor(Math.random()*10000000000);
    //   let tokenUri = "https://my.token.uri.com";
    //   console.log("Calling smart contract through wallet connect", accountAddress, tokenId, tokenUri);
    //   contract.methods.mint(accountAddress, tokenId, tokenUri).send(transactionParams)
    //       .on('transactionHash', (hash) => {
    //         console.log("transactionHash==>", hash);
    //       })
    //       .on('receipt', (receipt) => {
    //         console.log("receipt==>", receipt);
    //       })
    //       .on('confirmation', (confirmationNumber, receipt) => {
    //         console.log("confirmation==>", confirmationNumber, receipt);
    //       })
    //       .on('error', (error, receipt) => {
    //         console.error("mint error===>",error,receipt);
    //       })

    //     this.checkTokenState(tokenId);
    // }

    checkTokenState(tokenId){
      const checkTokenInterval = setInterval(async () => {
        let info = await this.tokenInfo(tokenId);
        console.log("Token info is", info);
        // if (info){
        //   clearInterval(checkTokenInterval);
        // }
      }, 5000);
    }

    
}
