//**** Setting server URL (start)
var appContentUrl = 'http://www.kaarbar.com/hokmonline/server/app_content/game.php';
if (window.location.href.indexOf('localhost') > 0){
	appContentUrl = '../server/app_content/game.php';
}
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
