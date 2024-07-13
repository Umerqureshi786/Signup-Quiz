// alert("Umar")
// console.log(alert);

const allUsers={name:"Ali", email:"abc@gmail.com", userPassword: 'abc'};

const signup = document.getElementById('signupBtn');

signup.addEventListener('click', (e) => {
  e.preventDefault();
  allUsers.name = document.getElementById("name").value;
  allUsers.email = document.getElementById("email").value;
  allUsers.userPassword = document.getElementById("password").value;

  localStorage.setItem('users': users);
}
