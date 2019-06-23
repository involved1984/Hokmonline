var appContentUrl = 'http://www.kaarbar.com/hokmonline/app_content/game.php';
if (window.location.href.indexOf('localhost') > 0){
	appContentUrl = '../server/app_content/game.php';
}


function LoadAndInitializeTheApp(){
	
		ajaxObject = $.ajax({
			type: 'POST',
			url: appContentUrl,
			cache: false,
			data: {},
			success: function(data){
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
setTimeout(function(){
	LoadAndInitializeTheApp();
}, 300);