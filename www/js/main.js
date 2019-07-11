//*** Detecting platform (start)
var platform = '';
if (window.location.href.indexOf('platform=web') > 0){
	platform = 'web';
} else if (/(android)/i.test(navigator.userAgent)) {
	platform = 'android';
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
	platform = 'ios';
}
//*** Detecting platform (end)

//******************************* Admob ads settings (start)
var admobid = {};
if (platform == 'android') {
  admobid = {
    banner: 'ca-app-pub-2837280352619539/7488607703',
    interstitial: 'ca-app-pub-2837280352619539/7259299573',
	reward: 'ca-app-pub-2837280352619539/2281113094'
  };
} else if (platform == 'ios') {
  admobid = {
    banner: 'ca-app-pub-2837280352619539/6854126381',
    interstitial: 'ca-app-pub-2837280352619539/1706398022',
	reward: 'ca-app-pub-2837280352619539/7087072433'
  };
}
//******************************* Admob ads settings (end)



//**** Setting server URL (start)
var appContentUrl = 'http://www.kaarbar.com/hokmonline/server/app_content/game.php';
//**** Setting server URL (end)


//***************** Handling app start commands (start)
var initUrl = '';
function handleOpenURL(url) {
	initUrl = url;
}
//***************** Handling app start commands (end)



//******* Initializing the app (start)
function LoadAndInitializeTheApp(){
		ajaxObject = $.ajax({
			type: 'POST',
			url: appContentUrl + '?rnd=' + Date.now(),
			cache: false,
			data: {},
			success: function(data){
				$('#pageContainer').append('Ajax success<br>');
				$('#pageContainer').append('Data length: '+ data.length +'<br>');
				$('#pageContainer').html('');
				$('#pageContainer').append(data);
			},
			error : function(){
				setTimeout(function(){
					LoadingAndInitializingTheApp();
				}, 1000);
			},
			complete: function(){
			}
		});
	
}

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        LoadAndInitializeTheApp();
    }
    
};
app.initialize();
//******* Initializing the app (end)
