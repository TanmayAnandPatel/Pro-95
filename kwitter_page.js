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

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
