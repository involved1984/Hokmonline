var admobid = {}
if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
  admobid = {
    banner: 'ca-app-pub-2837280352619539~1949518178',
    interstitial: '',
  }
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
  admobid = {
    banner: '',
    interstitial: '',
  }
}












var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        admob.banner.config({
            id: admobid.banner,
            isTesting: true,
            autoShow: true
        })
        admob.banner.prepare();
        admob.banner.show()
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    
};


function handleOpenURL(url) {
  setTimeout(function() {
    alert("received url outside: " + url);
  }, 0);
}


function shareUrl(urlToShare){
    window.plugins.socialsharing.shareWithOptions(
        {
            url:urlToShare
        }, 
        function(){}, 
        function(){}
    );
}




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



