<!DOCTYPE html>
<html>

 <head>
        
 <script>

 </script>
</head> 

<body>

<h2>Test in-app-messaging-47-one signal is on board</h2>

<p>a simple web page to test in-app-message </p>

<p>What do i know?</p>

<button onclick="document.getElementById('myImage').src='https://www.google.com/images/srpr/logo4w.png'">Turn on the light</button>

<img id="myImage" src="https://www.google.com/images/srpr/logo4w.png" style="width:100px">

<button onclick="document.getElementById('myImage').src='https://www.google.com/images/srpr/logo4w.png'">Turn off the light</button>



<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script>

<script> 
var OneSignal = OneSignal || [];
</script>
	
<script>

OneSignal.push(["init", {
  appId: "aed47042-40cf-4f9a-9d75-b11579f02f17",
  // Your other init settings
}]);

OneSignal.push(function() {
  OneSignal.on('permissionPromptDisplay', function () {
    console.log("The prompt displayed");
  });
});

OneSignal.push(function() {
  OneSignal.registerForPushNotifications();
});



OneSignal.push(["getNotificationPermission", function(permission) {
    console.log("Site Notification Permission:", permission);
    // (Output) Site Notification Permission: default
}]);

OneSignal.push(function() {
  /* These examples are all valid */
  OneSignal.getUserId(function(userId) {
    console.log("OneSignal User ID:", userId);
    // (Output) OneSignal User ID: 270a35cd-4dda-4b3f-b04e-41d7463a2316    
  });
  });



</script>	
   <!-- Pushe.init("5ej158r7z9r8278e");
    Pushe.subscribe();
-->

</body>
</html>
