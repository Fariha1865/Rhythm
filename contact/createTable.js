 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAQlDFV1BCky6Q0-6kLBo_iUsNUxfdru0Q",
    authDomain: "contact-f32f2.firebaseapp.com",
    databaseURL: "https://contact-f32f2.firebaseio.com",
    projectId: "contact-f32f2",
    storageBucket: "",
    messagingSenderId: "432550597697",
    appId: "1:432550597697:web:6a39d8d8cf9bf0e9a0a2c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid);
    if (user.uid == "2N8WpITLhBbuIIbsc8GEZ3lBpIK2") {
      createTable();
    } else {
      document.location.href = "contact.html";
    }
  } else {
    document.location.href = "contact.html";
  }
});

var refUser = "admin";
var userRef = firebase.database().ref(refUser);


function createTable() {
  var table = document.getElementById('table_body');

  var ref = "msg";
  var emailsRef = firebase.database().ref(ref);

  emailsRef.on('value', data => {
    var alldata = data.val();
    var keys = Object.keys(alldata);

    for (var i = 0; i < keys.length; i++) {
      var index = keys[i];
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
	  var cell4 = row.insertCell(3);
      cell1.innerHTML = alldata[index].name;
      cell2.innerHTML = alldata[index].email;
	   cell3.innerHTML = alldata[index].subject;
      cell4.innerHTML = alldata[index].message;
    }
  }, errEmailsData);
}

function errEmailsData(err) {
  console.log("Error!! id: ");
  console.log(err);
}