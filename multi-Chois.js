function MultiChoice(){

let correcAnswer = "";

function correctAnswer(){
    correcAnswer = "Carnivores"
    return  correcAnswer;
}

// function firstIncorrectAnswer(fstIncorrectAnswer){
//     fstIncorrectAnswer = "Herbivores"
// return  false;
// }

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
    // firstIncorrectAnswer,
    // secondIncorrectAnswer,
    // thirdIncorrectAnswer
    }
}