<!DOCTYPE html>
<html>

 <head>
        
 <script>

 </script>
</head> 

<body>

<h2>Test in-app-messaging-42</h2>

<p>a simple web page to test in-app-message </p>

<p>What do i know?</p>

<button onclick="document.getElementById('myImage').src='https://www.google.com/images/srpr/logo4w.png'">Turn on the light</button>

<img id="myImage" src="https://www.google.com/images/srpr/logo4w.png" style="width:100px">

<button onclick="document.getElementById('myImage').src='https://www.google.com/images/srpr/logo4w.png'">Turn off the light</button>



<script src="https://static.pushe.co/pusheweb.js"></script>
<script>
    Pushe.init("5dn6oxznp76pnxje");
Pushe.subscribe({"showDialog":true,"icon":"https://static.pushe.co/d/webpush/default-icon.png","title":"notif?","content":"می‌خواهید از آخرین اخبار و پیشنهادات آگاه شوید؟","position":"top-center","direction":"rtl","acceptText":"قبول می کنم","rejectText":"تمایلی ندارم","promptTheme":"pushe-prompt-theme2","mobilePosition":"top","dialogRetryRate":0});
Pushe.getDeviceId()
    .then(function(deviceId) {
        console.log(`Users's unique deviceId is: ${deviceId}`);
    });
</script>

	
   <!-- Pushe.init("5ej158r7z9r8278e");
    Pushe.subscribe();
-->

</body>
</html>
