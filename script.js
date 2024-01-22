let boxes = document.querySelectorAll(".box");
let msg_container = document.querySelector(".msg-container");
let message = document.querySelector("#message");
let new_game = document.querySelector("#new-game");
let reset = document.querySelector("#reset"); 

let winners = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let turn0 = true;

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("button has been clicked")
        if(turn0 === true){
            turn0 = false;
            box.innerText = "O";
        }
        else{
            turn0 = true;
            box.innerText = "X";
        }
        box.disabled = true;
        checkWinner();
    });
});

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msg_container.classList.add("hide");
};

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg_container.classList.remove("hide");
    message.innerText=`Congrats the winner is ${winner}`;
    disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winners){
        let value1 = boxes[pattern[0]].innerText;
        let value2 = boxes[pattern[1]].innerText;
        let value3 = boxes[pattern[2]].innerText;
        if(value1 != "" && value2 != "" && value3 != ""){
            if(value1 === value2 && value2 === value3){
                showWinner(value1);
            }
        }
    }
}

reset.addEventListener("click",resetGame);
new_game.addEventListener("click",resetGame);