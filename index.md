<!DOCTYPE html>
<html>
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
