let theDom = MultiChoice();
const nextBtnElem = document.querySelector('.next');    

const answerElem1 = document.querySelector(".carnivores")
const answerElem2 = document.querySelector(".herbivores")
const answerElem3 = document.querySelector(".omnivores")
const answerElem4 = document.querySelector(".scavenger")



nextBtnElem.addEventListener("click", ()=>{
 const radioButtonElem = document.querySelector('input[name="radioBut"]:checked').value;
 let answer = "Carnivores"; 
 
if(radioButtonElem === "Carnivores"){
    answerElem1.classList.add("correct");
    answerElem2.classList.remove("incorrect")
    answerElem3.classList.remove("incorrect")
    answerElem4.classList.remove("incorrect")
    return alert("congratulations")
}

if(radioButtonElem === "Herbivores"){
  
    answerElem2.classList.add("incorrect");
    answerElem1.classList.remove("correct")
    answerElem3.classList.remove("incorrect")
    answerElem4.classList.remove("incorrect")
  return answerElem1.classList.add("correct");
}

if(radioButtonElem === "Omnivores"){
  
    answerElem3.classList.add("incorrect");
    answerElem1.classList.remove("correct")
    answerElem2.classList.remove("incorrect")
    answerElem4.classList.remove("incorrect")
    return answerElem1.classList.add("correct");
}

if(radioButtonElem === "Scavenger"){
  
    answerElem4.classList.add("incorrect");
    answerElem1.classList.remove("correct")
    answerElem3.classList.remove("incorrect")
    answerElem2.classList.remove("incorrect")
    return answerElem1.classList.add("correct");
}

})