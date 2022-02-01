// Değişkenler;
var btn = document.getElementById("btn");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var email = document.getElementById("email").value;
const user = {
    kullanici_adi: username,
    sifre: password,
    email: email,
};
const fs = require("fs");
var json = JSON.stringify(user);

// LoginFunc Fonksiyonu;
function LoginFunc(e) {
  event.preventDefault();
  
  //  Degişkenler
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = docuemnt.getElementById("email").value;
  var user = localStorage.getItem("kullanici_adi");
  var data = JSON.parse(user);
  for (i = 0; i < user.length; i++) {
     
  }
  
  if (username === data.username && password === data.password) {
    alert("Hesabınıza Giriş Yapıldı!");
  };
  
};

btn.addEventListener("click", () => {
    if (email !== pattern) {
      alert("Lütfen Bir Geçerli Bir Email Giriniz.")
    };
});