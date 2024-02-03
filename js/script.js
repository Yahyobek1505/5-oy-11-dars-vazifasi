import { validation } from "./function.js";
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validation(username, password, email, repassword)) {
    const user = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    fetch("https://auth-rg69.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Failed! Username is already in use!") {      
         alert(data.message)
         username.focus();
         repassword.value = '';
        }
        if (data.message == "Failed! Email is already in use!") {
          alert(data.message)
          email.focus();
          repassword.value = '';
        }
        if (data.message == "User registered successfully!") {   
          form.reset();
          let urlManzil = window.location.href.substring(0,window.location.href.search("index"))
          window.location.assign(`${urlManzil}./pages/login.html`)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
