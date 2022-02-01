// Değişkenler
var btn = document.getElementById("btn");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var email = document.getElementById("email").value;

this.localStorage.setItem("kullanici_adi", username);
this.localStorage.setItem("sifre", password);
this.localStorage.setItem("email", email);

btn.addEventListener("click", () => {
    alert("Hesabınız Oluşturuldu!")
});