// Initializar fondo header
VANTA.NET({
  el: "#headertop",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x727272,
  backgroundColor: 0x0
})
const yellowButton = document.getElementById("colorOne");
const blueBotton = document.getElementById("colorTwo");
const pinkButton = document.getElementById("colorThree");
const resetButton = document.getElementById("colorFour");
yellowButton.addEventListener("click", function(){
document.body.style.backgroundColor = "blueviolet";
});
blueBotton.addEventListener("click", function(){
document.body.style.backgroundColor = "OrangeRed";
});
pinkButton.addEventListener("click", function(){
document.body.style.backgroundColor = "MidnightBlue";
});
resetButton.addEventListener("click", function(){
document.body.style.backgroundColor = "black";
});





// Inicializar contador/reloj
let timer = document.getElementById("timer");
setInterval(function(){ 
  let today = new Date();
  let time = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes() + ":" + (today.getSeconds()<10?'0':'') + today.getSeconds();
  timer.innerHTML = time
}, 500);