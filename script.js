
var displayQuestion = document.querySelector("h1");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var finalResult = document.querySelector("#userFinalResult")
var timerDisplay = document.querySelector("#timer")
var highScoreMenu = document.querySelector("#highscore")
var feedBack = document.querySelector("#feedback")
var i = 0;
var totalScore =0;
var timeCount = 50;

// String contains all my questions and answers
var questionBank = [
    {question : "Which of the following vegetables is not one of the ingredients of V-8 juice?",
    choices : ["beet","carrot","spinach","cabbage"],
    answer: "cabbage"}
    ,
    {question : "What country produces the most potatoes?",
    choices : ["China","United States","Ireland","Russia"],
    answer: "China"}
    ,
    {question : "What soft-drink company introduced the brand Slice?",
    choices : ["Coke","Pepsi","Dr.Pepper","Seven-up"],
    answer: "Coke"}
    ,
    {question : "Which grade of olive oil is considered the best?",
    choices : ["extra-virgin","virgin","pure","extra-pure"],
    answer: "extra-virgin"}
    ,
    {question : "The original Bellini was a mixture of sparkling Italian white wine and what type of fruit juice?",
    choices : ["orange","peach","apple","grape"],
    answer: "peach"}
    ,
    {question : "In the United States, about how much beer does the average person drink each year?",
    choices : ["24-tons","24-pints","24-quarts","24-gallons"],
    answer: "24-gallons"}
    ,
    {question : "Europeans first learned of chocolate from whom?",
    choices : ["China","Africans","Aztecs","Egyptian"],
    answer: "Aztecs"}
    ,
    {question : "Of all commercial cooking oils, which of these is highest in polyunsaturates  and lowest in saturated fat?",
    choices : ["coconut","corn","olive","safflower"],
    answer: "safflower"}
    ,
    {question : "Which of the following ingredients are not used in a Bloody Mary according to Playboy Bar Guide?",
    choices : ["ketchup","sugar","Tabasco sauce","Russia"],
    answer: "sugar"}
    ,
    {question : "Which is not included in a Low Country Boil?",
    choices : ["crab","shrimp","carrot","potato"],
    answer: "carrot"}
]


//Set a timer to count down from 50 seconds, once the timer reach 0 second, clear the interval, and forward user to result page
function timeClock(){
    var clock = setInterval(function(){
        timeCount--;
        console.log(timeCount)
        timerDisplay.textContent = timeCount;
        if(timeCount <= 0){
            clearInterval(clock);
            toResult()
        }

    },1000)
}
//execute timer function
timeClock()


//when the user click on the first answer
function DisplayQuestionAndAnswer(){
        event.preventDefault();
        //if user's answer is right, give them 1 point, alert that they are right, send score to local Storage, and move to next question
        if( event.target.innerHTML === questionBank[i].answer){
            totalScore++;
            localStorage.setItem("Totalscore",totalScore)
            console.log("match")
            feedBack.textContent = "Right"
            setTimeout(function(){
                feedBack.textContent = ""
            },1000)
            nextItem()
        }
        //if user's answer is wrong, minus them 1 point, alert that they are wrong, send score to local Storage, and move to next question
        else{
            totalScore--;
            timeCount = timeCount - 5;
            localStorage.setItem("Totalscore",totalScore)
            console.log("unmatch")
            //
            setTimeout(function(){
                feedBack.textContent = ""
            },1000)
            feedBack.textContent = "Wrong"
            nextItem()
        }
}

//Move on the next question
function nextItem(){
    //once it reaches the last question, move to result page automatically
    if( i === 9){
        toResult()
    }
    displayQuestion.innerText = questionBank[i+1].question;
    choice1.innerText = questionBank[i+1].choices[0];
    choice2.innerText = questionBank[i+1].choices[1];
    choice3.innerText = questionBank[i+1].choices[2];
    choice4.innerText = questionBank[i+1].choices[3];
    i++;
    
}

//Forward to Result after user answer all questions
function toResult(){
    location.replace("result.html");
}

choice1.addEventListener("click", DisplayQuestionAndAnswer)
choice2.addEventListener("click", DisplayQuestionAndAnswer)
choice3.addEventListener("click", DisplayQuestionAndAnswer)
choice4.addEventListener("click", DisplayQuestionAndAnswer)





//On you click on the highscore menu at the top left, it will forward to High Score page
highScoreMenu.addEventListener("click",displayHighScore)
function displayHighScore(){
    location.replace("highscore.html")
}
