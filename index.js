var random1= Math.round((Math.random()*5)+1);
var random2= Math.round((Math.random()*5)+1);

var randomdice1="dice"+random1+".png";
var randomdice2="dice"+random2+".png";

const imageselct=document.querySelectorAll("img");
imageselct[0].setAttribute("src",randomdice1);
imageselct[1].setAttribute("src",randomdice2);


const head=document.querySelector("h1");

if(random1>random2){
    head.innerHTML="player 1 wins";
}
else if(random2>random1){
    head.innerHTML="player 2 wins";
}
else{
    head.innerHTML="tie";
}
