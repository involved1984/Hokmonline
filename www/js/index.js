//*********** Admob (start)
var admobid = {}
if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
  admobid = {
    banner: 'ca-app-pub-2837280352619539/7488607703',
    interstitial: 'ca-app-pub-2837280352619539/7259299573',
  }
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
  admobid = {
    banner: '',
    interstitial: '',
  }
}

function showBannerAd(){
  admob.banner.config({
      id: admobid.banner,
      isTesting: false,
      autoShow: true
  })
  admob.banner.prepare();
  admob.banner.show();
}

function showInterstitialAd(){
  document.getElementById('resultHTML').innerHTML = 'Showing big ad... ';
  admob.interstitial.config({
    id: admobid.interstitial,
    isTesting: false
  })
  admob.interstitial.prepare()
  admob.interstitial.show()
}
//*********** Admob (end)



//***************** Handling app start commands (start)
function handleOpenURL(url) {
  setTimeout(function() {
    alert("received url outside: " + url);
  }, 0);
}
//***************** Handling app start commands (end)


//******* Share functionality (start)
function shareUrl(urlToShare){
    window.plugins.socialsharing.shareWithOptions(
        {
            url:urlToShare
        }, 
        function(){}, 
        function(){}
    );
}
//******* Share functionality (end)


//************************ Facebook login (start)
function fbLogin(){
    document.getElementById('resultHTML').innerHTML = 'FB login started';
    facebookConnectPlugin.login(['email'], fbLoginSuccess, fbLoginFail);
}
function fbLoginSuccess(e){
    document.getElementById('resultHTML').innerHTML = JSON.stringify(e);
}
function fbLoginFail(e){
    document.getElementById('resultHTML').innerHTML = 'FB login failed: ' + JSON.stringify(e);
}
//************************ Facebook login (end)


var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        showBannerAd();
    }
    
};
