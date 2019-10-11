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





document.getElementById("table").style.display = 'none';

var con=document.getElementById('con');
var hide=document.getElementById('hide');
var table=document.getElementById('table');



function showTable(){
	
     
	document.getElementById("table").style.display = 'block';
	document.getElementById("hide").style.display = 'block';
	document.getElementById("con").style.display = 'none';
	createTable();
}
function resetForm() {
    document.getElementById("table").style.display = 'none';
	document.getElementById("con").style.display = 'block';
	document.getElementById("hide").style.display = 'none';
	
}

function createTable() {
  var table = document.getElementById('table_body');

  var ref = firebase.database().ref("playlist");
 

    ref.on('value', data => {
    var alldata = data.val();
    var keys = Object.keys(alldata);

    for (var i = 0; i < keys.length; i++) {
      var index = keys[i];
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      
      cell1.innerHTML = alldata[index].name;
      cell2.innerHTML = alldata[index].message;
    }
  }, errorfunc);
  
}

function errorfunc(err)
{
	console.log("Error !! id: ");
	console.log(err);
}
createTable();