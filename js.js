let txtuser = document.querySelector(".txtuser");
let txtpass = document.querySelector(".txtpass");
let submit = document.querySelector(".submit");

if (window.localStorage){
  console.log("Supported");

  localStorage.setItem("user","daily");
  localStorage.setItem("pass","123");

  let user = localStorage.getItem("user");
  let pass = localStorage.getItem("pass");
  let message = document.querySelector(".message");

  submit.addEventListener("click", ()=>{
if(user == txtuser.value && pass== txtpass.value){
  message.innerHTML="Login Successful";
} else{
  message.innerHTML="Login unsuccessful, username or password is invaid.";
}
  })
} else {
  console.log("Not supported")
}