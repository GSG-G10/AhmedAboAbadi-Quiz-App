// const mybtn = document.getElementsByClassName('buttonInTheFirstPage')

const NextQuestion = document.querySelector(".button-in-the-theerd-page")

// console.log("Hello .....")
let operationCount = 0 ;
function moveOnTheNextQuestion (){
    const removeTheDiv = document.querySelector(".questions").innerHTML = "Q.2 : How many asdasdasdasf ? "
    operationCount ++ ;
    if (operationCount == 10){
        pageScore()
    }
    console.log(operationCount)
};

function pageScore (){
    let NewPageHaveTheScore = document.querySelector(".mainDiv")
    NewPageHaveTheScore.remove();
};

let getSelectedValue = document.querySelector( 'input[name="answer"]:checked');

// let numberOfQuestion = document.querySelector(".Counter-of-questions")


// NextQuestion.onclick = function (){
//     operationCount ++ ;
//     console.log(operationCount)

// };
// numberOfQuestion.innerHTML = ${operationCount}/10







// const divImWantToRemove = document.children[0].children[1];

// divImWantToRemove.removeChild( document.getElementsByClassName("center-qu"))


// let myobj = document.getElementById("all_content");
//         myobj.remove();

