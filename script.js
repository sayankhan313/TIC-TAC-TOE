// // let boxes = document.querySelectorAll('.box');
// // let reset=document.querySelector('#reset');
// // let turnO = true;
// // let newGame=document.querySelector('#newGame');
// // let message=document.querySelector('#message');
// // let mssgContainer=document.querySelector('.messagecontainer')

// // const winPatterns=[
// //     [0,1,2],
// //     [0,3,6],
// //     [0,4,8],
// //     [1,4,7],
// //     [2,4,6],
// //     [2,5,8],
// //     [3,4,5],
// //     [6,7,8],

    
// // ];
// // let moveCount=0;
// // // let winnerFound=false;
// // let showWinner=function(winner){
// //     winnerFound=true;
// // message.innerHTML=`congratulation the winner is ${winner}`
// // mssgContainer.classList.remove('hide');
// // disabledboxes();  

// // }
// // const disabledboxes=function(){
// // for(box of boxes){
// //     box.disabled=true;
// // }
// // }
// // const showDraw = function () { 
// //     message.innerHTML = `🤝 It's a Draw!`;
// //     mssgContainer.classList.remove('hide');
// // };

// // const enabledboxes=function(){
// //     for(box of boxes){
// //         box.disabled=false;
// //          box.innerText=''
// //     }
// // moveCount=0;
// // //    winnerFound=false;
// //     }
    

// // boxes.forEach((box)=>{
// //     box.addEventListener('click',function(e){
// //         if (turnO){
// //             box.innerHTML='O';
// //             turnO= false
    
// //         }else{
// //             box.innerHTML='X';
// //             turnO= true
    
// //         }
// //        box.setAttribute('disabled','')
// //        moveCount++;
// // checkWinner();
// //     })
    
// // })
// // const checkWinner=function(){
   
// // for ( let patterns of winPatterns){
    
// //  let pos1= boxes[patterns[0]].innerText;
// //       let pos2=  boxes[patterns[1]].innerText;
// //        let pos3= boxes[patterns[2]].innerText ; 
// // if (pos1!=''||pos2!=''||pos3!=''){
// // if(pos1==pos2&&pos2==pos3){
// //     console.log('winner',pos1)
// //     showWinner(pos1);
// //     return;
      
// // }
// // }
// // }
// // if (moveCount === 9 ) {
// //     showDraw();
// // }

// // }
// // const resetGame=function(){
// // turnO=true;
// // enabledboxes();
// // mssgContainer.classList.add('hide');

// // }
// // reset.addEventListener('click',resetGame);


// let boxes = document.querySelectorAll('.box');
// let reset=document.querySelector('#reset');
// let turnO = true;
// let newGame=document.querySelector('#newGame');
// let message=document.querySelector('#message');
// let mssgContainer=document.querySelector('.messagecontainer')

// const winPatterns=[
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,4,6],
//     [2,5,8],
//     [3,4,5],
//     [6,7,8],

    
// ];

// let showWinner=function(winner){
// message.innerHTML=`congratulation the winner is ${winner}`
// mssgContainer.classList.remove('hide');
// disabledboxes();  

// }
// let showDraw=function(){
//     message.innerHTML=`the game is draw`
//     mssgContainer.classList.remove('hide');
   
// };
// const disabledboxes=function(){
// for(box of boxes){
//     box.disabled=true
// }
// }
// const enabledboxes=function(){
//     for(box of boxes){
//         box.disabled=false;
//          box.innerText=''
//     }

   
//     }
    

// boxes.forEach((box)=>{
//     box.addEventListener('click',function(e){
         
//         if (turnO){
//             box.innerHTML='O';
//             turnO= false
    
//         }else{
//             box.innerHTML='X';
//             turnO= true
    
//         }
//        box.setAttribute('disabled','')
// checkWinner();
//     })
    
// })
// const checkWinner=function(){
// for ( let patterns of winPatterns){
    
//  let pos1= boxes[patterns[0]].innerText;
//       let pos2=  boxes[patterns[1]].innerText;
//        let pos3= boxes[patterns[2]].innerText ; 
// if (pos1!=''||pos2!=''||pos3!=''){
// if(pos1==pos2&&pos2==pos3){
//     console.log('winner',pos1)
//     showWinner(pos1);
//     // return;
      

// }
// }
// }checkDraw();
// };
// const resetGame=function(){
// turnO=true;
// enabledboxes();
// mssgContainer.classList.add('hide');


// }
// let checkDraw=function(){
//     let filledboxes=0;
//     boxes.forEach(box=>{
//         if (box.innerText!=''){
//             filledboxes++;

//         }
    
//     });
//     if(filledboxes==9 ){
//         showDraw();
//     }
// }
// reset.addEventListener('click',resetGame);
// newGame.addEventListener('click',resetGame)








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