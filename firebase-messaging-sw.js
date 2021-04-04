
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");



<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
    apiKey: "AIzaSyCyOapqXjFcM0pLtJirh82OB9YW5oILiak",
    authDomain: "second-test-notif.firebaseapp.com",
    projectId: "second-test-notif",
    storageBucket: "second-test-notif.appspot.com",
    messagingSenderId: "22779366790",
    appId: "1:22779366790:web:001c57042c10b4ec07b007"
  };

  const messaging = firebase.messaging();
  messaging.usePublicVapidKey('BNRi_2SkrzOyFt5FB_YK9iRW-Urtw5AdVNBwECBLqI0LOy3IQkyG3pTNKUG37HwAMgwpYwZZ_ZOdhclZiTYonvo');
  messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  console.log('recieved paload.')
  // ...
});

  
firebase.initializeApp(firebaseConfig);

if (firebase.messaging.isSupported()) {
  firebase.messaging();
}

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

 
</script>

