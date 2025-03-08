

function toggleLogin(){
    let loginBtn = document.querySelector("#login");
    let signupBtn = document.querySelector("#signup");
    
    signupBtn.innerHTML = signupBtn.innerHTML === "SignUp" ? "login" : "SignUp";
    loginBtn.innerHTML = loginBtn.innerHTML.toLowerCase() === "login" ? "SignUp" : "login"
}