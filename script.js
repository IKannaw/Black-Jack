let summary=document.getElementById("summary");
let cardEr=document.getElementById("card-erm");
let sumEr=document.getElementById("sum-erm");

let firstCard=random();
let secondCard=random();
let cards=[firstCard,secondCard];
let sum=firstCard + secondCard;
let hasBlackJack=false;
let isAvaliable=true;

function random(){
    let randomNumber=Math.floor(Math.random()*13)+1;
    if (randomNumber>10){
        return 10
    }else if(randomNumber===1){
            return 11
    }else{
        return randomNumber
    }
}

function satinpr(){ 
    cardEr.textContent="Cards:"
    for (let i=0;i<cards.length;i++){
       cardEr.textContent +=cards[i]+" ";
    }
    sumEr.textContent ="Sum: "+sum;
    if(sum <= 20){
    message="Do you want to draw a new card";
    }else if(sum===21){
       message="You have a Black Jack";
       hasBlackJack=true;
    }else{
        message="Sorry, you are out of the game";
        isAvaliable=false;
        window.onload();
    }
    summary.textContent=message;
}

function adding(){
   if(hasBlackJack===false && isAvaliable===true){
    let card=random();
    cards.push(card);
    sum +=card ;
    satinpr()
   }
}

