let theDom = MultiChoice();
const nextBtnElem = document.querySelector('.next');    

const answerElem1 = document.querySelector(".carnivores")
const answerElem2 = document.querySelector(".herbivores")
const answerElem3 = document.querySelector(".omnivores")
const answerElem4 = document.querySelector(".scavenger")

const answerElem5 = document.querySelector(".buffalo")
const answerElem6 = document.querySelector(".lion")
const answerElem7 = document.querySelector(".rhino")
const answerElem8 = document.querySelector(".honeybedgder")


nextBtnElem.addEventListener("click", ()=>{

 const radioButtonElem = document.querySelector('input[name="radioBut"]:checked').value;
 
//  let answer = "Carnivores"; 
 
if(radioButtonElem === "Carnivores"){
    answerElem1.classList.add("correct");
    answerElem2.classList.remove("incorrect")
    answerElem3.classList.remove("incorrect")
    answerElem4.classList.remove("incorrect")
  alert("congratulations")
}

if(radioButtonElem === "Herbivores"){
  
    answerElem2.classList.add("incorrect");
    answerElem1.classList.remove("correct")
    answerElem3.classList.remove("incorrect")
    answerElem4.classList.remove("incorrect")
  answerElem1.classList.add("correct");
}

if(radioButtonElem === "Omnivores"){
  
    answerElem3.classList.add("incorrect");
    answerElem1.classList.remove("correct")
    answerElem2.classList.remove("incorrect")
    answerElem4.classList.remove("incorrect")
     answerElem1.classList.add("correct");
}

if(radioButtonElem === "Scavenger"){
  
    answerElem4.classList.add("incorrect");
    answerElem1.classList.remove("correct")
    answerElem3.classList.remove("incorrect")
    answerElem2.classList.remove("incorrect")
    answerElem1.classList.add("correct");
}



const radioButtonElem2 = document.querySelector('input[name="radioBut2"]:checked').value;

if(radioButtonElem2 === "Buffalo"){
  
    answerElem5.classList.add("incorrect");
    answerElem6.classList.remove("correct")
    answerElem7.classList.remove("incorrect")
    answerElem8.classList.remove("incorrect")
    answerElem6.classList.add("correct");
}

if(radioButtonElem2 === "Lion"){
    answerElem6.classList.add("correct");
    answerElem5.classList.remove("incorrect")
    answerElem7.classList.remove("incorrect")
    answerElem8.classList.remove("incorrect")
    alert("congratulations")
}

if(radioButtonElem2 === "Rhino"){
  
    answerElem7.classList.add("incorrect");
    answerElem6.classList.remove("correct")
    answerElem8.classList.remove("incorrect")
    answerElem5.classList.remove("incorrect")
    answerElem6.classList.add("correct");
}

if(radioButtonElem2 === "Honeybedgder"){
  
    answerElem8.classList.add("incorrect");
    answerElem6.classList.remove("correct")
    answerElem7.classList.remove("incorrect")
    answerElem5.classList.remove("incorrect")
    answerElem6.classList.add("correct");
}

})