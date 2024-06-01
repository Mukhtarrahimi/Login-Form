const title = document.getElementById("title");
const nameField = document.getElementById("nameField");
const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");

signinBtn.onclick = () => {
  title.innerHTML = "Sign In";
  nameField.style.maxHeight = "0px";
  signinBtn.classList.remove("disable");
  signupBtn.classList.add("disable");
};


signupBtn.onclick = () => {
    title.innerHTML = "Sign Up";
    nameField.style.maxHeight = "60px";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}