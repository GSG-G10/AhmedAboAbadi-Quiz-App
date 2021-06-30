// const myst = document.getElementsByClassName('buttonInTheFirstPage')

const NextQuestion = document.querySelector(".button-in-the-theerd-page")
const questionsCounter = document.querySelector(".Counter-of-questions")
let mark = 0
let questionList ={
    1 :{
        question : "How many students code academy ?",
        answers :[ '10' , '16' , '20' , '24'],
        rightAnswerNo : 1,
    },

    2 :{
        question : "How many students 2 ?",
        answers :[ '10' , '16' , '20' , '24'],
        rightAnswerNo : 2,
    },

    3 :{
        question : "How many students 3 ?",
        answers :[ '10' , '16' , '20' , '24'],
        rightAnswerNo : 2,
    },

    4 :{
        question : "How many students 4 ?",
        answers :[ '10' , '16' , '20' , '24'],
        rightAnswerNo : 4,
    },

    5 :{
        question : "How many students 5 ?",
        answers: [ '10' , '16' , '20' , '24'],
        rightAnswerNo : 1,
    },

    6 :{
        question : "How many students 6 ?",
        answers :[ '10' , '16' , '20' , '24'],
        rightAnswerNo : 4,
    },

    7 :{
        question : "How many students 7 ?",
        answers :[ '10' , '16' , '20' , '24'],
        rightAnswerNo : 2,
    },

    8 :{
        question : "How many students 8 ?",
        answers :[ '10' , '16' , '20' , '24'],
        rightAnswerNo : 3,
    },

    9 :{
        question : "How many students 9 ?",
        answers: [ '10' , '16' , '20' , '24'],
        rightAnswerNo : 4,
    },

    10 :{
        question : "How many students 10 ?",
        answers :[ '10' , '16' , '20' , '24'],
        rightAnswerNo : 2,
    },

    11 :{
        question : "How many students 10 ?",
        answers :[ '10' , '16' , '20' , '24'],
        rightAnswerNo : 2,
    },
}

let operationCount = 1 ;
function moveOnTheNextQuestion (){
    operationCount ++ ;
    const removeTheDiv = document.querySelector(".questions").innerHTML = questionList[operationCount ].question 
    if (operationCount == 11){
        pageScore()
    }else{
        checkAnswer(operationCount)
    }
    questionsCounter.innerHTML = operationCount +"/10"
};

function pageScore (number){
    let NewPageHaveTheScore = document.querySelector(".mainDiv")
    NewPageHaveTheScore.remove();
    creatResalt();
};

function creatResalt (){
    let result = `<div class="heder-of-page"></div> 
    <h2 class="headr1">your score : ${mark} </h2>`
    let new_body = document.getElementById("body").innerHTML = result
};

let getSelectedValue = document.querySelector( 'input[name="answer"]:checked');

function checkAnswer(number) {
    var getSelectedValue = document.querySelector( 'input[name="answer"]:checked'); 
    let index_of_answers = questionList[number]["answers"].indexOf(getSelectedValue.value)

    if (index_of_answers+1 == questionList[number]["rightAnswerNo"]){
        mark +=1 
    }
}

// questionList.question

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
