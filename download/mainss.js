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
var messagesRef = firebase.database().ref('playlist');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = document.getElementById('name').value; //getInputVal('name');
  var message = getInputVal('message');

  // Save message
  saveMessage(name,message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page

  setTimeout(function(){
    document.location.href="portfolio home.html";
  },3050);

  
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    message:message
  });
}