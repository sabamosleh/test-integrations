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
      
</head>

<body>

<h2>Test Notification</h2>

<p>a simple web page to test notifications</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='https://www.google.com/images/srpr/logo4w.png'">Turn on the light</button>

<img id="myImage" src="https://www.google.com/images/srpr/logo4w.png" style="width:100px">

<button onclick="document.getElementById('myImage').src='https://www.google.com/images/srpr/logo4w.png'">Turn off the light</button>

<script src="https://static.pushe.co/pusheweb.js"></script>
<script>
    Pushe.init("5ej158r7z9r8278e");
    Pushe.subscribe();
</script>

</body>
</html>
