var firebaseConfig = {
  apiKey: "AIzaSyB-Ycua7Ophpbg_euA3Oot2XF4IZ80Z4lA",
  authDomain: "lets-chat-web-app-11388.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-11388-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-11388",
  storageBucket: "lets-chat-web-app-11388.appspot.com",
  messagingSenderId: "699376780110",
  appId: "1:699376780110:web:257074e91515abe3e5d41f",
  measurementId: "G-4CBDQJ7YPB"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
          
          firebase.database().ref("/").child(room_name).update({
                purpose:"Addind room name"
          });
  
          localStorage.setItem("Room_name",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     room_name = childKey;
    //Start code
    row = "<div class='room_name' id="+room_name+" onclick='redirecttoroomname(this.id)'>"+room_name+"</div><hr>";
    document.getElementById("output").innerHTML+=row;


    //End code
    });});}
getData();
function redirecttoroomname(name) {
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html"
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("Room_name");
  window.location="index.html";
}