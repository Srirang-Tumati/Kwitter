// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD1jVOCdWNwC9fb4hbU_QlFR3XRg27D3xc",
      authDomain: "kwitter-c62b0.firebaseapp.com",
      databaseURL: "https://kwitter-c62b0-default-rtdb.firebaseio.com",
      projectId: "kwitter-c62b0",
      storageBucket: "kwitter-c62b0.appspot.com",
      messagingSenderId: "303840740742",
      appId: "1:303840740742:web:7de79f2fd4277457459807"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
                  document.getElementById("output") += row;

                  //End code
            });
      });
}
getData();

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}