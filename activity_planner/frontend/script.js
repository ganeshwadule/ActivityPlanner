function toggleLogin() {
  let loginBtn = document.querySelector("#login");
  let signupBtn = document.querySelector("#signup");

  signupBtn.innerHTML = signupBtn.innerHTML === "SignUp" ? "login" : "SignUp";
  loginBtn.innerHTML =
    loginBtn.innerHTML.toLowerCase() === "login" ? "SignUp" : "login";
}

async function SignUp() {
  const emailData = document.querySelector("#email").value;
  const passwordData = document.querySelector("#password").value;

  const response = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailData,
      password: passwordData,
    }),
  });

  const data = await response.json();
  if(data.status == 409){
    document.querySelector(".message").innerHTML = data.message;
  }
  else{
    window.location.href="activityPlanner.html"
  }
 
}



