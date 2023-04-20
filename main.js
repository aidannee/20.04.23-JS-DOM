// body
document.body.style.backgroundColor = "whitesmoke";
document.body.style.fontFamily = "arial";
document.body.style.textAlign = "center";

// header
// let headz = document.getElementsByTagName("header");
// headz.style.backgroundColor = "red";

// main

let mainz = document.getElementsByTagName("main");
for (let i = 0; i < mainz.length; i++) {
  mainz[i].style.padding = "50px";
}
// ? paragrapnh 1 manipulation
let par1 = document.getElementById("para001");
par1.style.fontFamily = "Impact";
par1.style.fontSize = "30px";
par1.style.color = "purple";
