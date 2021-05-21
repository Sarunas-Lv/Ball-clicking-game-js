// button variables
const goPlay=document.getElementById("startGame");
const goShop=document.getElementById("goShop")
const goBack=document.getElementById("goBack");
const spinCookie=document.getElementById("spinCookie");
const addTen=document.getElementById("addTen");
const addFifty=document.getElementById("addFifty");
const changeBall=document.getElementById("changeBall");
const pipi=document.getElementById("pipi");
const marks=document.getElementById("marks");
let seconds = 00; 
let tens = 00; 
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");

// page variables
const startPage=document.getElementById("startPage");
const gamePage=document.getElementById("gamePage");
const shopPage=document.getElementById("shopPage");
// cookie variables
const photo=document.getElementById("photo");
// elemts variables
const score=document.getElementById("score");
const textScore=document.querySelector(".textScore");
// events
goPlay.addEventListener("click", openGame);
goPlay.addEventListener("click",startTime);
goShop.addEventListener("click", openShop);
goBack.addEventListener("click", openBack);
photo.addEventListener("mouseover", resize);
photo.addEventListener("mouseout", resizeBack);
photo.addEventListener('click', scorePoints);
spinCookie.addEventListener('click', startSpinning);
document.addEventListener("keydown", stopSpinning);
addTen.addEventListener('click', buyTenPoints);
addFifty.addEventListener('click',buyFiftyPoints);
changeBall.addEventListener('click', winTheGame);
// functions 

function openGame(){
    startPage.style.display="none";
    gamePage.style.display="flex";
    textScore.style.display="block";
};
function openShop(){
    gamePage.style.display="none";
    shopPage.style.display="flex";
};
function openBack(){
    shopPage.style.display="none";
    gamePage.style.display="flex";
};

function resize(){
    photo.style.transform="scale(1.15)"
}

function resizeBack(){
    photo.style.transform="scale(1)"
}

// cookie spinner

function startSpinning(){
    // check if enough points
    if (counter >= 20){
        // jei tasku pakanka atimti
        // counter= counter -20;
        counter-=20;
        // paleisti sausaini suktis
        photo.classList.add("rotate")
        // tada atnaujinti taskus
        updateScore();
        points += 1; 
    }else{
        alert("CLICK MORE BALLS YOU DONKEY!")
    }
}

function stopSpinning(){
    photo.classList.remove("rotate");
}

// counter- atskaitos taskas
let counter=0;
//  tasku skaicius uz viena click
let points=1;

// update score

function updateScore(){
    score.textContent=counter;
}

// score points
function scorePoints(){
    counter += points;
    updateScore();
}
// buy ten points on click

function buyTenPoints() {
    const rotate=document.querySelector(".rotate")
    if (counter >= 200) {
      counter -= 200;
      updateScore();
      points += 10;
      rotate.style.animationDuration="2.5s";
      addTen.setAttribute("disabled", true);
    } else {
      alert("CLICK MORE BALLS YOU DIMWIT!");
    }
  }
  console.log(buyTenPoints);
// buy fifty points on click

function buyFiftyPoints() {
    const rotate=document.querySelector(".rotate")
    if (counter >= 400) {
      counter -= 400;
      updateScore();
      points += 50;
      rotate.style.animationDuration="0.75s";
      addFifty.setAttribute("disabled", true);
    } else {
      alert("CLICK MORE BALLS YOU PANINI HEAD!");
    }
  }
// change ball

function winTheGame(){
    const rotate=document.querySelector(".rotate")
    if(counter >=3000){
        counter -=3000;
        updateScore();
        photo.src="img/g-ball.png";
        rotate.style.animationDuration="10s";
        counter = "YOU BOSS!!!";
        updateScore();
        points= '';
        alert(`YOU DID IT YOU BOSS!`);
        pipi.style.fontWeight="900";
        marks.textContent="!!!";
        changeBall.setAttribute("disabled", true);
        clearInterval(Interval);
    }else{
        alert("STOP MONKEYING AROUND AND CLICK BALLS!!!");
    }
}
// timer function
function startTime() {
    Interval = setInterval(startTimer, 10);
}
function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
}
