var firebaseConfig = {
    apiKey: "AIzaSyDY3hx9S8sUUYiOwNbKioGJ-fyN6wECQOI",
    authDomain: "kwitter-627e6.firebaseapp.com",
    projectId: "kwitter-627e6",
    storageBucket: "kwitter-627e6.appspot.com",
    messagingSenderId: "858072310922",
    appId: "1:858072310922:web:d8199ee479b7c32063f973",
    measurementId: "G-1GBBLBB9BT",
    databaseURL:"https://kwitter-627e6-default-rtdb.firebaseio.com/"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
function addUser(){
username=document.getElementById("username").value
firebase.database().ref("/").child(username).update({
purpose:"addingUser"
})
}