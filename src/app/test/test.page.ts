import { Component, OnInit } from '@angular/core';
import { NFTContractService } from 'src/app/services/NFTContractService';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(private nftContractService: NFTContractService) {
    // var web3 = new Web3(new Web3.providers.HttpProvider("https://api-testnet.elastos.io/eth"));
    // // const web3 = new Web3('ws://localhost:8546');
    // const stickerAddr = "";
    // const stickerContract = new web3.eth.Contract(contract.stickerABI, stickerAddr);

    // console.log(web3);
    // web3.eth.getAccounts().then(console.log);

    // const supply = "123";
    // const uri = "https://github.com/elastos-trinity/feeds-nft-contract#readme";
    // const royalty = "30000";
    // const mintData = stickerContract.methods.mint(tokenId, supply, uri, royalty).encodeABI();
    // const mintTx = {
    //   from: accCreator.address,
    //   to: stickerAddr,
    //   value: 0,
    //   data: mintData,
    //   gasPrice,
    // };
    // const { status: mintStatus } = await sendTxWaitForReceipt(mintTx, accCreator);
  }

  // getAccount(){
  //   const getAccount = async (privateKey) => {
  //     try {
  //       if (!web3) {
  //         console.error("Web3 not initialized");
  //         return;
  //       }
  //       if (!privateKey.startsWith("0x")) {
  //         privateKey = `0x${privateKey}`;
  //       }
  //       const acc = web3.eth.accounts.privateKeyToAccount(privateKey);
  //       return acc;
  //     } catch (err) {
  //       console.error(String(err));
  //       return;
  //     }
  //   }
  // }

  ngOnInit() {
  }

  connect(){
    this.nftContractService.connect();
  }

  mint(){
    this.nftContractService.testWalletConnectMint();
  }

  disconnect(){
    this.nftContractService.disconnect();
  }


}
