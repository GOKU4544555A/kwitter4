var firebaseConfig = {
      apiKey: "AIzaSyDY3hx9S8sUUYiOwNbKioGJ-fyN6wECQOI",
      authDomain: "kwitter-627e6.firebaseapp.com",
      projectId: "kwitter-627e6",
      storageBucket: "kwitter-627e6.appspot.com",
      messagingSenderId: "858072310922",
      appId: "1:858072310922:web:d8199ee479b7c32063f973",
      measurementId: "G-1GBBLBB9BT",
      databaseURL: "https://kwitter-627e6-default-rtdb.firebaseio.com/"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
username = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "welcome" + username + "!"

function addRoom() {
      roomName = document.getElementById("room_name").value
      firebase.database().ref("/").child(roomName).update({
            purpose: "addingRoomName"
      })
      localStorage.setItem("room_Name", roomName)
      window.location = "kwitterpage.html"

}
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("roomName-" + Room_names) 
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML+=row
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name){
console.log(name)
localStorage.setItem("room_name",name)
window.location="kwitterpage.html"
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}