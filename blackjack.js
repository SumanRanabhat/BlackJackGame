let cards=[];
let sum=0
let isAlive=true
let hasBlackJack=false

function startGame()
{
    
    document.getElementById("card-el").innerHTML+=getCard()
    document.getElementById("sum-el").innerHTML+=getSum()
    document.getElementById("message-el").innerHTML=getInfo()
    document.getElementById("startGame").onclick = ""

   
    
    
}
function newCard()
{


    while ((isAlive==true) && (hasBlackJack==false))
    {
        
        cards.push(randomCard());
        document.getElementById("card-el").innerHTML="Cards: "+cards
        document.getElementById("sum-el").innerHTML="sum:  " + getSum()
        document.getElementById("message-el").innerHTML=getInfo()

    }
}




function getCard()
{
    let firstCard=randomCard()
    let secondCard=randomCard()
    cards=[firstCard,secondCard];
    return cards;
}
function getSum()
{
    sum=0;
    for (let i = 0; i < cards.length; i++)
    {

        sum+=cards[i]
    }
    return sum

}
function getInfo()
{
    if(sum<21)
    {
        return "do you want to draw a new card"
    }
    else if(sum==21)
    {
        hasBlackJack=true
        isAlive=false
        return "wouou you have got a blackjack"
      
    }
    else
    {
        isAlive=false
        return "you are out of the game "
        

    }
}

function randomCard()
{
    return Math.floor(Math.random()*13)+1
}
function replayGame()
{
    while(isAlive==false)
    {
        
        setDefault()
        takeNap()
       
        
        
    }
}
function setDefault()
{

    isAlive=true
    hasBlackJack=false
    document.getElementById("message-el").innerHTML = "welcome to another Game"
    document.getElementById("card-el").innerHTML="Cards: "
    document.getElementById("sum-el").innerHTML="sum: "

}
function takeNap()
{
    
    const myTimeout = setTimeout(myGreeting, 5000);
    function myGreeting()
    {
        startGame()

    }
}

















    

 






