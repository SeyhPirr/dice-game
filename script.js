'use strict';

const diceImg= document.querySelector('.dice');
const rollDice= document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');
const newGame=document.querySelector('.btn--new');
let randomDice;
let player1Score=0;
let player2Score=0;
let player1TempScore=0;
let player2TempScore=0;
let player=0;
let sayac=0;
let sayac1=0;
let totalScore1=0;
let totalScore2=0;
const dice1=function()
{
    document.querySelector(`#current--${player}`).textContent=player1TempScore;
    randomDice= Math.floor(Math.random()*6)+1;
    diceImg.src=`dice-${randomDice}.png`;
    
    if(sayac%2== 0) player=0;
    else player=1;
    
    if(randomDice!= 1)
    {
    player1TempScore+=randomDice;
    document.querySelector(`#current--${player}`).textContent=player1TempScore;
    }
    else
    {sayac++
     player1TempScore=0;
     document.querySelector(`#current--${player}`).textContent=player1TempScore;
    }
      
}
const hold=function()
{
    
    if(player== 0)
    {
        totalScore1+= Number(player1TempScore);
        document.querySelector(`#score--0`).textContent=totalScore1;
    }
    else
    {
        totalScore2+= Number(player1TempScore);
        document.querySelector(`#score--1`).textContent=totalScore2;
    }
    document.querySelector(`#current--${player}`).textContent=0;
    sayac++;
    player1TempScore=0;
    if (totalScore1>= 100){prompt('Player1 Kazandi.');}
    else if(totalScore2>= 100){prompt('Player2 Kazandi.');}
   

}
const replay=function()
{
    totalScore1=0;
    document.querySelector(`#score--0`).textContent=totalScore1;
    totalScore2=0;
    document.querySelector(`#score--1`).textContent=totalScore2;
    sayac=0;

}



rollDice.addEventListener('click',dice1);
btnHold.addEventListener('click',hold);
newGame.addEventListener('click',replay);
