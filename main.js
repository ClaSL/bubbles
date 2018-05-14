"use strict";

const divs = document.querySelectorAll("#app div");

let stuff = Array.from(divs);
//fancier version: let stuff[...divs]


divs.forEach(function(div){
    //div.style.transfom = `translate(50vw, 50vh)`;
div.addEventListener("mouseenter",function(){
    div.style.transform =`translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
    div.style.backgroundColor = `hsl(${Math.random()*360}, ${Math.random()*100}%, 50%)`;
});
});