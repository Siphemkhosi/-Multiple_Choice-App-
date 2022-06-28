function MultiChoice(){

let que1correcAnswer = "";
let que2correcAnswer = "";

function correctAnswer(){
    que1correcAnswer = "Carnivores"
    return  que1correcAnswer;
}

function que2correctAnswer(){
    que2correcAnswer  = "Lion"
return  que2correcAnswer ;
}

// function secondIncorrectAnswer(scndIncorrectAnswer){
//     scndIncorrectAnswer  = "Omnivores"
// return false;
// }


// function thirdIncorrectAnswer(thrdIncorrectAnswer){
//     thrdIncorrectAnswer = "Scavenger"
// return false;
// }

    return{
    correctAnswer,
    que2correctAnswer,
    // secondIncorrectAnswer,
    // thirdIncorrectAnswer
    }
}