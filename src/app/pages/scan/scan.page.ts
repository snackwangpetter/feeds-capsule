import { Component, NgZone, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

// import QrScanner from 'qr-scanner';
import { TranslateService } from '@ngx-translate/core';
import { TitleBarComponent } from 'src/app/components/titlebar/titlebar.component';
import { TitleBarIconSlot, TitleBarIcon, TitleBarMenuItem } from 'src/app/components/titlebar/titlebar.types';
import { isObject } from 'lodash-es';
import { LogUtils } from 'src/app/services/LogUtils';

// The worker JS file from qr-scanner must be copied manually from
// the qr-scanner node_modules sources and copied to our assets/folder
// QrScanner.WORKER_PATH = "./assets/scanner/qr-scanner-worker.min.js"

export type ScanPageRouteParams = {
    fromIntent: boolean
}

@Component({
    selector: 'app-scan',
    templateUrl: './scan.page.html',
    styleUrls: ['./scan.page.scss'],
})
export class ScanPage {
    // @ViewChild(TitleBarComponent, { static: true }) titleBar: TitleBarComponent;

    // torchLightOn: boolean;
    // isCameraShown: boolean = false;
    // contentWasScanned: boolean = false;
    // scannedText: string = "";
    // scanSub: Subscription = null;
    // fromIntentRequest: boolean = false;
    // loader: any = null;
    // alert: any = null;

    // private titleBarIconClickedListener: (icon: TitleBarIcon | TitleBarMenuItem) => void;

    // constructor(
    //     public route: ActivatedRoute,
    //     public router: Router,
    //     private qrScanner: QRScanner,
    //     private ngZone: NgZone,
    //     private zone: NgZone,
    //     private alertController: AlertController,
    //     private loadingController: LoadingController,
    //     private translate: TranslateService,
    //     private logUtils: LogUtils
    // ) {
    //     const navigation = this.router.getCurrentNavigation();
    //     if (isObject(navigation.extras.state)) {
    //         this.fromIntentRequest = navigation.extras.state.fromIntent;
    //     }
    // }

    // ionViewWillEnter() {
    //     this.titleBar.setTitle(this.translate.instant('app-scanner'));
    //     this.showGalleryTitlebarKey(true);
    //     this.titleBar.addOnItemClickedListener(this.titleBarIconClickedListener = (clickedItem)=>{
    //         if (clickedItem.key == "gallery") {
    //             this.scanFromLibrary();
    //         }
    //     });
    // }

    // ionViewDidEnter() {
    //     this.logUtils.logd("Starting scanning process");
    //     this.startScanningProcess();
    // }

    // /**
    //  * Leaving the page, do some cleanup.
    //  */
    // async ionViewWillLeave() {
    //     this.titleBar.removeOnItemClickedListener(this.titleBarIconClickedListener);
    //     this.zone.run(async () => {
    //         this.logUtils.logd("Scan view is leaving")
    //         this.stopScanning();
    //         await this.hideCamera();
    //         document.body.classList.remove("transparentBody");
    //     });
    // }

    // /**
    //  * Toggle flash light on or off
    //  */
    // toggleLight() {
    //     this.torchLightOn = !this.torchLightOn;

    //     if (!this.torchLightOn)
    //         this.qrScanner.disableLight();
    //     else
    //         this.qrScanner.enableLight();
    // }

    // showCamera() {
    //     // Make sure to make ion-app and ion-content transparent to see the camera preview
    //     document.body.classList.add("transparentBody");
    //     this.qrScanner.show();
    //     this.isCameraShown = true; // Will display controls
    // }

    // async hideCamera() {
    //     window.document.querySelector('ion-app').classList.remove('transparentBody')
    //     await this.qrScanner.hide();
    //     await this.qrScanner.destroy();

    //     this.zone.run(() => {
    //       this.isCameraShown = false;
    //     });
    // }

    // startScanningProcess() {
    //     this.qrScanner.prepare().then((status: QRScannerStatus) => {

    //         this.logUtils.logd("Scanner prepared")
    //         if (status.authorized) {
    //             // Camera permission was granted. Start scanning
    //             this.logUtils.logd("Scanner authorized")

    //             // Show camera preview
    //             this.logUtils.logd("Showing camera preview")
    //             this.showCamera()

    //             // Start scanning and listening to scan results
    //             this.scanSub = this.qrScanner.scan().subscribe(async (text: string) => {
    //                 this.logUtils.logd("Scanned data: "+text)
    //                 this.scannedText = text;

    //                 this.ngZone.run(() => {
    //                     this.contentWasScanned = true
    //                 });

    //                 await this.hideCamera()
    //                 this.stopScanning()

    //                 // Either emit a new intent if the scanner app was opened manually, or
    //                 // send a intent resposne if this app was opened by a "scanqrcode" intent request.
    //                 if (!this.fromIntentRequest)
    //                     this.runScannedContent(this.scannedText)
    //             });
    //             // Wait for user to scan something, then the observable callback will be called
    //         } else if (status.denied) {
    //             // Camera permission was permanently denied
    //             this.logUtils.logd("Access to QRScanner plugin was permanently denied")
    //         } else {
    //             // Permission was denied, but not permanently. You can ask for permission again at a later time.
    //             this.logUtils.logd("Access to QRScanner plugin is currently denied")
    //         }
    //     }).catch((e: any) => this.logUtils.loge('Unexpected error: '+JSON.stringify(e)));
    // }

    // stopScanning() {
    //     if (this.scanSub) {
    //         this.scanSub.unsubscribe();
    //         this.scanSub = null;
    //     }
    // }

    // showGalleryTitlebarKey(show: boolean) {
    //   if (show) {
    //     this.titleBar.setIcon(TitleBarIconSlot.OUTER_RIGHT, {
    //         key: "gallery",
    //         //TODO scanner
    //         // iconPath: !this.theme.darkMode ? "assets/scanner/imgs/gallery.svg" : "assets/scanner/imgs/darkmode/gallery.svg"
    //         iconPath: "assets/scanner/imgs/gallery.svg"
    //     });
    //   } else {
    //     this.titleBar.setIcon(TitleBarIconSlot.OUTER_RIGHT, null);
    //   }
    // }

    // /**
    //  * Initiates a QR code scanning from a picture chosen from the library by the user.
    //  */
    // async scanFromLibrary() {
    //     if (this.alert) {
    //       this.alertController.dismiss();
    //       this.alert = null;
    //     }

    //     this.logUtils.logd("Stopping camera, getting ready to pick a picture from the gallery.");
    //     this.showLoading();
    //     await this.hideCamera();
    //     this.stopScanning();
    //     this.showGalleryTitlebarKey(false);

    //     setTimeout(async () => {
    //         this.logUtils.logd("Scanner", "Opening gallery to pick a picture");
    //         // Ask user to pick a picture from the library
    //         navigator.camera.getPicture((data)=>{
    //             this.logUtils.logd("Scanner", "Got gallery data");
    //             if (data) {
    //                 this.zone.run(() => {
    //                     try {
    //                         const image = new Image();
    //                         image.onload = async() => {
    //                             this.logUtils.logd("Loaded image size: " + image.width+" "+ image.height);
    //                             let code: string;
    //                             try {
    //                                 // why?
    //                                 // We create worker manually.
    //                                 // if use 'QrScanner.scanImage(image)', it will create BarcodeDetector engine in some devices, and it can't get the qr code.
    //                                 let worker: Worker = new Worker(QrScanner.WORKER_PATH)
    //                                 code = await QrScanner.scanImage(image, null, worker);
    //                             }
    //                             catch (err) {
    //                                 //debugger;
    //                                 this.logUtils.loge("Scanner error: " + JSON.stringify(err));
    //                                 code = null;
    //                             }
    //                             this.logUtils.logd("Read qr code: " + JSON.stringify(code));

    //                             if (code != null) {
    //                                 this.hideLoading();
    //                                 this.showGalleryTitlebarKey(true);
    //                                 // A QR code could be found in the picture
    //                                 this.scannedText = code as string;
    //                                 if (!this.fromIntentRequest)
    //                                     this.runScannedContent(this.scannedText)
    //                             } else {
    //                                 this.alertNoScannedContent('sorry', 'no-qr-err');
    //                             }
    //                         }

    //                         image.src = "data:image/png;base64,"+data; // base64 string

    //                         // Free the memory
    //                         navigator.camera.cleanup(()=>{}, (err)=>{});
    //                     }
    //                     catch (e) {
    //                         this.alertNoScannedContent('sorry', 'scan-err');
    //                         this.logUtils.loge("Error while loading the picture as PNG: "+ JSON.stringify(e));
    //                     }
    //                 });
    //             }
    //         }
    //         , (err)=>{
    //             // 'No Image Selected': User canceled.
    //             if (err === 'No Image Selected') {
    //                 this.hideLoading();
    //                 this.showGalleryTitlebarKey(true);
    //                 this.zone.run(() => {
    //                     this.startScanningProcess();
    //                 });
    //             } else {
    //                 this.logUtils.loge("Scanner error " + JSON.stringify(err));
    //                 this.alertNoScannedContent('sorry', 'gallery-err');
    //             }
    //         }, {
    //             targetWidth: 1200, // Reduce picture size to avoid memory problems - keep it large enough for QR code readabilitiy
    //             targetHeight: 1200,
    //             destinationType: 0, // Return as base64 data string
    //             sourceType: 0, // Pick from photo library
    //             encodingType: 1 // Return as PNG base64 data
    //         });
    //     }, 100);
    // }

    // /**
    //  * Executes the scanned content. If the content is recognized as a URL, we send a URL intent.
    //  * Otherwise, we send a "handlescannedcontent" intent so that user can pick an app to use this content
    //  * (ex: scanned content is a ELA address, so user may choose to open the wallet app to send ELA to this address)
    //  */
    // async runScannedContent(scannedContent: string) {
    //     // pop scanner from navigation history, so the nav will not navigate to scanner.

    //     this.logUtils.logd("Scan result is "+scannedContent);
    //     //TODO scanner
    //     // this.globalNav.exitCurrentContext(false);

    //     // // Special case - DID FORMAT CHECK - DIDs are considered as URLs by the URL class
    //     // if (this.contentIsElastosDID(scannedContent)) {
    //     //     this.sendIntentAsRaw(scannedContent)
    //     // }
    //     // else {
    //     //     try {
    //     //         new URL(scannedContent);
    //     //         this.sendIntentAsUrl(scannedContent);
    //     //     } catch (_) {
    //     //         // Content can't be parsed as a URL: fallback solution is to use it as raw content
    //     //         this.sendIntentAsRaw(scannedContent);
    //     //     }
    //     // }
    // }


    // async alertNoScannedContent(title: string, msg: string, btnText: string = 'ok') {
    //     this.hideLoading();
    //     this.showGalleryTitlebarKey(true);

    //     this.alert = await this.alertController.create({
    //       mode: 'ios',
    //       header: this.translate.instant(title),
    //       message: this.translate.instant(msg),
    //       backdropDismiss: false,
    //       buttons: [
    //        {
    //           text: this.translate.instant(btnText),
    //           handler: () => {
    //             this.startScanningProcess();
    //           }
    //         }
    //       ]
    //     });
    //     this.alert.onWillDismiss().then(() => {
    //       this.alert = null;
    //     });
    //     this.alert.present()
    // }

    // async exitApp() {
    //     this.logUtils.logd("Exiting app");

    //     this.stopScanning();
    //     await this.hideCamera();
    // }

    // public async showLoading() {
    //   this.loader = await this.loadingController.create({
    //     mode: 'ios',
    //     //TODO scanner
    //     // cssClass: !this.theme.darkMode ? 'custom-loader-wrapper' : 'dark-custom-loader-wrapper',
    //     cssClass: 'custom-loader-wrapper',
    //     spinner: null,
    //     //TODO scanner
    //     // message: !this.theme.darkMode ? '<div class="custom-loader"><div class="lds-dual-ring"><div></div><div></div><div></div><div></div><div></div></div><ion-label>' + this.translate.instant('please-wait') +' </ion-label></div>' : '<div class="dark-custom-loader"><div class="dark-lds-dual-ring"><div></div><div></div><div></div><div></div><div></div><div></div></div><ion-label>' + this.translate.instant('please-wait') + '</ion-label></div>',
    //     message:'<div class="custom-loader"><div class="lds-dual-ring"><div></div><div></div><div></div><div></div><div></div></div><ion-label>' + this.translate.instant('please-wait') +' </ion-label></div>'
    //   });
    //   this.loader.onWillDismiss().then(() => {
    //     this.loader = null;
    //   })
    //   return await this.loader.present();
    // };

    // public hideLoading(): void {
    //   if(this.loader) {
    //     this.loader.dismiss();
    //   }
    // };
}
