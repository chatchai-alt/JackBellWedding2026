document.addEventListener("DOMContentLoaded", function(){

// ========================
// Countdown Wedding
// ========================

const weddingDate = new Date("April 18, 2026 09:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();
const distance = weddingDate - now;

const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

},1000);


// ========================
// Rose Falling Effect
// ========================

function createRose(){

const rose = document.createElement("div");
rose.classList.add("rose");

rose.style.left = Math.random()*100 + "vw";
rose.style.animationDuration = (6 + Math.random()*4) + "s";
rose.style.opacity = Math.random();

const container = document.querySelector(".rose-container");

if(!container) return;

container.appendChild(rose);

setTimeout(()=>{
rose.remove();
},10000);

}

setInterval(createRose,600);

});
