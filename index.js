
//first dice//

randomNumber1=Math.floor(Math.random()*6)+1;//1-6

var randomDiceImage="dice" + randomNumber1 + ".png"; // dice1png-dice6-png

var randomImageSource="images/" + randomDiceImage;// images dice1 png-images dice 6png

var image1= document.querySelectorAll("img") [0];

image1.setAttribute("src", randomImageSource);

//second dice

var randomNumber2= Math.floor( Math.random()*6)+1; //second image random numbers from 1 to 5

var randomDiceImage2= "dice" + randomNumber2 + +".png"; //

var randomImageSource2= "images/dice" + randomNumber2+ ".png";

var image2=document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player one or player 2 wins or draw h1 change!//

if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="Player 1 wins";
} else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!"; }
    else if(randomNumber1=randomNumber2){
        document.querySelector("h1").innerHTML="draw!";}
