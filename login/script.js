function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    window.location.href = "../go_game.html";
  } else {
    alert("اسم المستخدم أو كلمة المرور خاطئة");
  }
}