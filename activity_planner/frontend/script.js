const { error } = require("console");

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
  if(response.status === 201){
    window.location.href="activityPlanner.html"
  }
  else{
    document.querySelector(".message").innerHTML = data.message;
  }
 
}
// first check if user exist? retutn message
// check for password ? return message
// activity planner page with their activities and all stuff

async function Login() {
  const emailData = document.querySelector("#email").value;
  const passwordData = document.querySelector("#password").value;

  try{
      const response = await fetch("http://localhost:3000/api/user/login",{
        method:"POST",
        headers:{
         "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:emailData,
          password:passwordData
        })
      });

      const data = await response.json();
      if(response.status === 201){
        window.location.href = "activityPlanner.html"
      }
      else{

        document.querySelector(".message").innerHTML = data.message;
      }

  }
  catch(error){
    console.log(error)
  }

}



