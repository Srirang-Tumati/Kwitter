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
//YOUR FIREBASE LINKS

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg, 
            like:0
      });

      document.getElementById("msg").value="";
}


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4> "
                        name + "<img class='user_tick' src='tick.png'></h4>";
                        message_with_tag = "<h4> class= 'message_h4'>" + messsage + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick ='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:   " + like + "</span></button><hr>";


                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();


function updateLike(message_id) {
      console.log("clicked pn like button - " + message_id);
      button_id = message_id;
      likes = doucment.getElementById(button_id).value
      updatedlikes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}
