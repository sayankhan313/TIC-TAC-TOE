
let boxes=document.querySelectorAll('.box');
let restBttn=document.querySelector('#reset');
let messagecontainer=document.querySelector('.messagecontainer');
let message=document.querySelector('#message');
let newGame=document.querySelector('#newGame');

let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],

    
];

  
boxes.forEach((box)=>{
    box.addEventListener('click',function(e){
        if (turnO){
            box.innerHTML='O';
            box.style.color='blue'
            box.style.backgroundColor='Orange'
        
        
            turnO=false;

        }else{
            box.innerHTML='X';
             box.style.color='red'
            box.style.backgroundColor='blue'
           
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    }
   
)

}
);
const checkWinner =function(){
    for (let patterns of winPatterns){
   let pos1=boxes[patterns[0]].innerHTML;
   let  pos2=boxes[patterns[1]].innerHTML;
    let pos3=boxes[patterns[2]].innerHTML;
    if(pos1!=''&& pos2!=''&& pos3!=''){
    if(pos1==pos2 && pos2==pos3){
        showWinner(pos1);
        return;

     
    }
    }
    }checkDraw();
    
}
const checkDraw=function(){
    let filledboxes=0;
    boxes.forEach((box)=>{
       if( box.innerHTML!=''){;
        filledboxes++
       }
    })
    if(filledboxes==9){
        showDraw();
    }
    
}
let showDraw=function(){
message.innerHTML='game is draw '
messagecontainer.classList.remove('hide');
disabledboxes();

}

let showWinner=function(winner){
message.innerHTML=`the winner is ${winner}`;
messagecontainer.classList.remove('hide');
disabledboxes();
}

const disabledboxes=function(){
for( let box of boxes){
    box.disabled=true;
}
}

const resetGame= function(){
    turnO=true;
enabledboxes();
messagecontainer.classList.add('hide');

}
const enabledboxes=function(){
    for( let box of boxes){
        box.disabled=false;
        box.innerHTML='';
       box.style.color='';
       box.style.backgroundColor='';
   
    }
        
    
    }
   
    
restBttn.addEventListener('click',resetGame);
newGame.addEventListener('click',resetGame);
