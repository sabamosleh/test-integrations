<!DOCTYPE html>
<html>

 <head>
        <link rel="manifest" href="/manifest.json">
      <!-- Najva Push Notification -->
        <script type="text/javascript">
            (function(){
                var now = new Date();
                var version = now.getFullYear().toString() + "0" + now.getMonth() + "0" + now.getDate() +
                    "0" + now.getHours();
                var head = document.getElementsByTagName("head")[0];
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "https://app.najva.com/static/css/local-messaging.css" + "?v=" + version;
                head.appendChild(link);
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
                script.src = "https://app.najva.com/static/js/scripts/github39-website-20977-dac58fb2-7701-41fd-9d0d-85bb70475c52.js" + "?v=" + version;
                head.appendChild(script);
                })()
        </script>
        <!-- END NAJVA PUSH NOTIFICATION -->
      
 <script>
   window.najvaUserSubscribed = function(najva_user_token){
   // you have user specific najva_user_token, add your logic here
   // console.log("token1:",najvaUserSubscribed);
      console.log("token3:",najva_user_token);


    }
 </script>
</head> 

<body>

<h2>Test in-app-messaging-28</h2>

<p>a simple web page to test in-app-message </p>

<p>What do i know?</p>

<button onclick="document.getElementById('myImage').src='https://www.google.com/images/srpr/logo4w.png'">Turn on the light</button>

<img id="myImage" src="https://www.google.com/images/srpr/logo4w.png" style="width:100px">

<button onclick="document.getElementById('myImage').src='https://www.google.com/images/srpr/logo4w.png'">Turn off the light</button>

<!--<script src="https://static.pushe.co/pusheweb.js"></script>-->
<!--<script src="https://batch.com/batchsdk-worker-loader.js"></script>-->

<script>
   // console.log("token2:",window.najvaUserSubscribed());

	 // if ('serviceWorker' in navigator) {
        // window.addEventListener('load', () => {
        //   navigator.serviceWorker.register('/batchsdk-worker-loader.js');
        // });
      // }
      // batchSDK("ui.show", "alert", true);

  //     if ('serviceWorker' in navigator) {
  // window.addEventListener('load', function() {
  //   navigator.serviceWorker.register('/batchsdk-worker-loader.js').then(function(registration) {
      // Registration was successful
    //   console.log('ServiceWorker registration successful with scope: ', registration.scope);
    // }, function(err) {
      // registration failed :(
  //     console.log('ServiceWorker registration failed: ', err);
  //   });
  // });
// }




</script>

<!-- <script type="text/javascript">
      /* Load remote Batch SDK JavaScript code */
(function(b,a,t,c,h,e,r){h='batchSDK';b[h]=b[h]||function() {
    (b[h].q=b[h].q||[]).push(arguments)};e=a.createElement(t),r=a.getElementsByTagName(t)[0];
    e.async=1;e.src=c;r.parentNode.insertBefore(e,r);})(window,document,'script','https://via.batch.com/v2/bootstrap.min.js');

/* Initiate Batch SDK opt-in UI configuration (native prompt) */
var batchSDKUIConfig = {
    native: {}
};

/* Use a specific configuration for the Firefox web browser (custom prompt) */
if (navigator.userAgent.indexOf("Firefox") !== -1) {
    batchSDKUIConfig = {
        alert: {
            icon: 'https://secure.url.to.your.icon.jpg'
        }
    }
}

/* Finalize the Batch SDK setup */
batchSDK('setup', {
    apiKey: '93F319901DB0475A854CBCD40205992F',
    subdomain: 'github2',
    authKey: '2.kLKt2qfhapVDgzz5aOAUCcEcJmUZDg8wYW1Q9vQEWtk=',
    dev: true, // remove this for prod
    vapidPublicKey: 'BCPiIEpZRj6ujamkOzoMZl8O0Epmt3ZGrQBXNUN+anNyUfQ8aiAbpieGAw2e+sxYER7KjJxUhxOtT/ep161lV+8=',
    ui: batchSDKUIConfig,
    // defaultIcon: 'https://path.to/my/logo-192/png', // for Chrome desktop
    // smallIcon: 'https://path.to/my/icon-96.png', // for Chrome Android
});
</script>
 -->

   <!-- Pushe.init("5ej158r7z9r8278e");
    Pushe.subscribe();
-->

</body>
</html>
