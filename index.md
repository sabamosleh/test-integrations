<!DOCTYPE html>
<html>

<head>
	<link rel="manifest" href="manifest.json" />
</head>

<body>

<h2>Test firebase notif 19</h2>

<p>a simple web page to test in-app-message </p>

<p>What do i know?</p>

<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js"></script>


<script>



  messaging.getToken({ vapidKey: 'BNRi_2SkrzOyFt5FB_YK9iRW-Urtw5AdVNBwECBLqI0LOy3IQkyG3pTNKUG37HwAMgwpYwZZ_ZOdhclZiTYonvo' }).then((currentToken) => {
  if (currentToken) {
    
    console.log('currentToken is:',currentToken);
  } else {

    console.log('No registration token available. Request permission to generate one.');

  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);

});



</script>

</body>
</html>
