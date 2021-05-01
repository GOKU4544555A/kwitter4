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
username=localStorage.getItem("user_name")
roomname=localStorage.getItem("room_name")
function send(){
msg=document.getElementById("msg").value 
firebase.database().ref(roomname).push({
name:username,
message:msg,
like:0
})
document.getElementById("msg").value=""

}
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val()
                if (childKey!="purpose") {
                firebaseMessageid=childKey
                messageData=childData
                console.log(firebaseMessageid)
                console.log(messageData)
                name=messageData['name']
                messaage=messageData['message']
               like=messageData['like']
               name_widthtag="<h4>"+name+"<img class='user_tick'src='tick.png'></h4>"
            message_widthtag="<h4 class'message_h4'>"+message+"</h4>"
            likebutton="<button class='btn-btn danger'id="+firebaseMessageid+"value="+like+"onclick='update_like(this.id)'>"
                span_widthtag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>"
            row=name_widthtag+message_widthtag+likebutton+span_widthtag
            document.getElementById("output").innerHTML+=row
    //End code
            }

          });
    });
}
 getData()
 function update_like(message_id){
    console.log(message_id)
    button_id=message_id
    likes=document.getElementById(button_id).value
    updatedlikes=Number(likes)+1
    console.log(updatedlikes)
    firebase.database().ref(roomname).child(message_id).update({
        like:updatedlikes
    })
 }
 function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }