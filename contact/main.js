// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAQlDFV1BCky6Q0-6kLBo_iUsNUxfdru0Q",
    authDomain: "contact-f32f2.firebaseapp.com",
    databaseURL: "https://contact-f32f2.firebaseio.com",
    projectId: "contact-f32f2",
    storageBucket: "",
    messagingSenderId: "432550597697",
    appId: "1:432550597697:web:4f1c8cec7ccaab85a0a2c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



// Reference messages collection
var messagesRef = firebase.database().ref('msg');
var logoutbtn=document.getElementById("login");
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
logoutbtn.addEventListener("click",signout);
// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = document.getElementById('name').value; //getInputVal('name');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');
  var table=document.getElementById('table');
  // Save message
  saveMessage(name,email,subject,message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  if(!alert("done")){
  window.location.reload();
}

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page

  

  
}
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid);
    if (user.uid == "2N8WpITLhBbuIIbsc8GEZ3lBpIK2") {
            table.style.display="block"; 
    } else {
       table.style.display="none";
    }
  } 
  }
);
// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,email,subject,message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
	email: email,
	subject: subject,
    message:message
  });
}
function signout()
  {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("user is signed out");
  }).catch(function(error) {
    // An error happened.
  });
}