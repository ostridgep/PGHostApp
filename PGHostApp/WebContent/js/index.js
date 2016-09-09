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
function checkPassedParams(){


		    window.plugins.launchmyapp.getLastIntent(function(url) {
		    	alert("url:"+url)
		      if (url.indexOf('myjobshost://' > -1)) {
		    	  xx=url.split("?")
		    	  xxx=xx.split("=")
		    	  if(xxx[0]=="latlong")
		    	  	{
		    		  alert(xxx[1])
		    		  document.getElementById("ll").value=xxx[1]
		    	  	}
		    		 
		    		 
		    	  else{
		    		  alert("received url: " + xxx[0]+"---"+xxx[1]); 
		    	  	}
		    	  
		    	  
		       
		      } else {
		    	  alert("ignore intent: " + url);
		      }
		    }, function(error) {
		    	alert("no intent received");
		    });
		   


}
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
        checkPassedParams();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
      
    }
};
function checkInstalled(){
	navigator.startApp.check("com.phonegap.pgchildapp", function(message) { /* success */
	    alert("Child Installed")
	}, 
	function(error) { /* error */
		 alert("Child Not Installed")
	});
}
function startApp(){
	localStorage.setItem("Parameter", "Paul Ostridge");
	navigator.startApp.start("com.phonegap.pgchildapp", function(message) {  /* success */
	    alert("App Started: "+message); // => OK
	}, 
	function(error) { /* error */
		alert("App failed to Start: "+error);
	});
}
function startApp1(){
	ref=cordova.InAppBrowser.open('myjobschild://?MYJOBS=xx','_blank')
	ref.addEventListener('loadstart',function(event) { alert("loadstart"+event.url); });
	ref.addEventListener('loadstop',function(event) { alert("loadstop"+event.url); });
	ref.addEventListener('exit',function(event) { alert("exit"+event.url); });
}
function startApp2(){
	location.href='myjobschild://?MYJOBS=xx'
}
function startAppParams2(){
	navigator.startApp.start([
		                  		'com.phonegap.pgchildapp', // applucation
		                  		'com.phonegap.pgchildapp.MainActivity', // activity
		                  		'Param1', // key
		                  		'key1:val1,key2:val2,key3:val3,key4:val4'
		                  		
		                  	], function(message) { /* success */
	    alert("App params2  Started: "+message); // => OK
	}, 
	function(error) { /* error */
		alert("App params2 failed to Start: "+error);
	});
}
function startAppParams3(){
	navigator.startApp.start([
	                  		'com.phonegap.pgchildapp', // applucation
	                  		, // activity
	                  		'Param1', // key
	                  		'Value1' // value
	                  	], function(message) { /* success */
		   alert("App params3  Started: "+message); // => OK
	}, 
	function(error) { /* error */
		alert("App params3 failed to Start: "+error);
	});
}
function startAppParams4(){
	navigator.startApp.start([
	                  		'com.phonegap.pgchildapp', // applucation
	                  		'com.phonegap.pgchildapp.MainActivity', // activity
	                  		'Param1', // key
	                  		'Value1' // value
	                  	], function(message) { /* success */
		   alert("App params4  Started: "+message); // => OK
	}, 
	function(error) { /* error */
		alert("App params4 failed to Start: "+error);
	});
}
function startAppParams3x(){
	navigator.startApp.start([["com.phonegap.pgchildapp"],[{"key1":"value1"},{"key2":"value2"}]], function(message) {  /* success */
	    alert("App params3  Started: "+message); // => OK
	}, 
	function(error) { /* error */
		alert("App params3 failed to Start: "+error);
	});
}
function startAppParams4x(){
	navigator.startApp.start([["com.phonegap.pgchildapp"],[{"key1":"John", "key2":"Doe"}]], function(message) {  /* success */
	    alert("App params4  Started: "+message); // => OK
	}, 
	function(error) { /* error */
		alert("App params4 failed to Start: "+error);
	});
}
