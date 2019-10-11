//
//
//
const signupForm=document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e)=>{
	e.preventDefault();
	//
	const email=signupForm['signup-email'].value;
	const passward=signupForm['signup-password'].value;

	auth.createUserWithEmailAndPassword(email, passward).then(cred=>{
    signupForm.reset();
    document.location.href = "contact.html";
	});

});
