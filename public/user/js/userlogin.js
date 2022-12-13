// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
//   container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
//   container.classList.remove("right-panel-active");
// });


// function validation() {
//   let flag = 0
//   let username = document.getElementById('name').value.trim()
//   let password = document.getElementById('pass').value.trim()



//   if (username == '') {
//     document.getElementById('usernameError').innerHTML = "Username Required"
//     flag = 1
//   } else if (username.length < 3) {
//     document.getElementById('usernameError').innerHTML = "Enter atleast 3 character"
//     flag = 1
//   } else {
//     document.getElementById('usernameError').innerHTML = ""
//   }

//   if (password < 2) {
//     document.getElementById('passwordError').innerHTML = "Password Required"
//     flag = 1
//   } else {
//     document.getElementById('passwordError').innerHTML = ""
//   }

//   if (flag === 1) {
//     return false
//   }
//   return true
// }

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});