function log(s) {
  localStorage.setItem("login", s);
  console.log(localStorage.getItem("login"));
}
function checkLogin() {
  let currentUser = JSON.parse(localStorage.getItem("login"));
  console.log(currentUser);
  if (currentUser == "1") {
    document.querySelector(".auth-links").style.display = "none";
    document.getElementById("user").style.display = "flex";
  } else {
    document.getElementById("user").style.display = "none";
    document.querySelector(".auth-links").style.display = "block";
  }
}
window.onload = checkLogin();
