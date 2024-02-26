import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyACSb98gvqrgp_2Uro2pu__HslZk-fuEyY",
    authDomain: "minu1215-jenkins-vue.firebaseapp.com",
    projectId: "minu1215-jenkins-vue",
    storageBucket: "minu1215-jenkins-vue.appspot.com",
    messagingSenderId: "269944854861",
    appId: "1:269944854861:web:be9e80bce59b8568edbf04",
    measurementId: "G-2877641HBJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

