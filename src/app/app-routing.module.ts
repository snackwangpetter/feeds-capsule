import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './pages/feeds/feeds.module#FeedsPageModule' },
  { path: 'tabs', loadChildren: './pages/feeds/feeds.module#FeedsPageModule' },
  { path: 'splashscreen', loadChildren: './pages/splashscreen/splashscreen.module#SplashscreenPageModule' },

  { path: 'menu/servers/server-info', loadChildren: './pages/servers/server-info/server-info.module#ServerInfoPageModule'},

  { path: 'signin', loadChildren: './pages/signin/signin.module#SigninPageModule' },

  { path: 'createnewfeed', loadChildren: './pages/feeds/createnewfeed/createnewfeed.module#CreatenewfeedPageModule' },
  { path: 'createnewpost', loadChildren: './pages/feeds/createnewpost/createnewpost.module#CreatenewpostPageModule' },
  { path: 'profileimage', loadChildren: './pages/feeds/profileimage/profileimage.module#ProfileimagePageModule' },

  { path: 'bindservice/scanqrcode', loadChildren: './pages/feeds/bindservice/scanqrcode/scanqrcode.module#ScanqrcodePageModule'},
  { path: 'bindservice/importdid/:nodeId', loadChildren: './pages/feeds/bindservice/importdid/importdid.module#ImportdidPageModule' },
  { path: 'bindservice/publishdid/:nodeId/:did/:payload', loadChildren: './pages/feeds/bindservice/publishdid/publishdid.module#PublishdidPageModule' },
  { path: 'bindservice/issuecredential/:nodeId/:did', loadChildren: './pages/feeds/bindservice/issuecredential/issuecredential.module#IssuecredentialPageModule' },
  { path: 'bindservice/finish/:nodeId', loadChildren: './pages/feeds/bindservice/finish/finish.module#FinishPageModule' },
  { path: 'bindservice/startbinding/:nodeId/:nonce/:address/:did/:feedsUrl', loadChildren: './pages/feeds/bindservice/startbinding/startbinding.module#StartbindingPageModule' },

  { path: 'channels/:nodeId/:channelId', loadChildren: './pages/feeds/home/channels/channels.module#ChannelsPageModule' },
  { path: 'postdetail/:nodeId/:channelId/:postId', loadChildren: './pages/feeds/home/postdetail/postdetail.module#PostdetailPageModule' },

  { path: 'menu/profiledetail', loadChildren: './pages/feeds/menu/profiledetail/profiledetail.module#ProfiledetailPageModule' },
  { path: 'menu/about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'menu/develop', loadChildren: './pages/feeds/menu/develop/develop.module#DevelopPageModule' },
  { path: 'menu/donation', loadChildren: './pages/feeds/menu/donation/donation.module#DonationPageModule' },

  { path: 'disclaimer', loadChildren: './pages/disclaimer/disclaimer.module#DisclaimerPageModule' },

  { path: 'editserverinfo', loadChildren: './pages/editserverinfo/editserverinfo.module#EditserverinfoPageModule' },
  { path: 'eidtchannel', loadChildren: './pages/eidtchannel/eidtchannel.module#EidtchannelPageModule' },
  { path: 'editpost', loadChildren: './pages/editpost/editpost.module#EditPostPageModule' },
  { path: 'editcomment', loadChildren: './pages/editcomment/editcomment.module#EditCommentPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'editimage', loadChildren: './pages/editimage/editimage.module#EditimagePageModule' },
  { path: 'discoverfeedinfo', loadChildren: './pages/discoverfeedinfo/discoverfeedinfo.module#DiscoverfeedinfoPageModule' },
  { path: 'feedinfo', loadChildren: './pages/feedinfo/feedinfo.module#FeedinfoPageModule' },
  { path: 'commentlist', loadChildren: './pages/commentlist/commentlist.module#CommentlistPageModule' },
  { path: 'feedspreferences', loadChildren: './pages/feedspreferences/feedspreferences.module#FeedspreferencesPageModule' },
  { path: 'language', loadChildren: './pages/settings/language/language.module#LanguagePageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
