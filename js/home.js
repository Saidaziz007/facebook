let isLogin = localStorage.getItem("token");

function CheckIsLogin() {
  if (!isLogin) {
    window.location.replace("/pages/login.html");
  }
}

CheckIsLogin();
