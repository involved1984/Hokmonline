/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        showAds();
    },
    // Update DOM on a Received Event
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


function showAds(){
    admob.banner.config({
     id: 'ca-app-pub-2837280352619539~1949518178',
    })

    // Create banner
    admob.banner.prepare()

    // Show the banner
    admob.banner.show()
}
