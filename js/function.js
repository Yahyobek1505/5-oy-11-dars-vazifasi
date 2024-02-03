
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validation(username, password, email, repassword) {
  if (!username.value) {
    alert('Username is empty!')
    username.focus();
    return false;
  }
  if (username.value.trim().length < 3) {
    alert('Username is very short!')
    username.focus();
    return false;
  }
  
  if (!email.value) {
    alert('email is empty!')
    email.focus();
    return false;
  }
  if (!validateEmail(email.value)) {
    alert('email is empty!')
    email.focus();
    return false;
  }
  
  if (!password.value) {
    alert('Password is empty!')
    password.focus();
    return false;
  }
  if (password.value.trim().length < 3) {
    alert('Password is very short!')
    password.focus();
    return false;
  }
  if (!repassword.value) {
    alert('Repassword is empty!')
    repassword.focus();
    return false;
  }
  if (password.value !=repassword.value ) {
    alert('Password is inconsistent! (mos emas)')
    password.focus();
    return false;
  }
  return true;
}

export {validation};




