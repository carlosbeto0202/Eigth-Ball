/* Meu Primeiro JavaScrip Web */

/* function onClickButton() {
    activeP();
    setTimeout(timerDisableP,4000);
    getText();
    cleanInput();
}


function activeP(){
    questionUser.classList.add("mostrar");
    answerUser.classList.add("mostrar") 
}

function timerDisableP(){
    questionUser.classList.remove("mostrar");
    answerUser.classList.remove("mostrar")
}

function getText (){
    const texto_pego = document.getElementById("inputText").value;
    if (texto_pego != ''){
        document.getElementById("questionUser").innerHTML = texto_pego;
        randomNunber();
    }
    else{
        document.getElementById("questionUser").innerHTML = "Digite algo";
    }  
}

function randomNunber(){
    const aleatorio = [1,2,3,4,5]
    const numero = Math.floor(Math.random() * aleatorio.length);

    if (numero == 1){
        document.getElementById("answerUser").innerHTML = "Sim"
    } else if( numero == 2){
        document.getElementById("answerUser").innerHTML = "Não"
    }else if( numero == 3){
        document.getElementById("answerUser").innerHTML = "Indicios apontam que sim"
    }else if( numero == 4){
        document.getElementById("answerUser").innerHTML = "Indicios apontam que não"
    }else {
        document.getElementById("answerUser").innerHTML = "Concentre-se e faça a pergunta novamente"
    }
} 

function cleanInput() {
    document.getElementById("inputText").value = null;
} */
const elementAnswer = document.querySelector("#answerUser");
const elementQuestion = document.querySelector("#inputText");
const elementButton = document.querySelector("#buttonQuestion")

const answer = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
];

function timer(){
    setTimeout(function(){
        
        elementAnswer.style.opacity = 0;
        elementButton.removeAttribute("disabled")
        
    },1000);
    elementAnswer.style.opacity = 1;
}

function opacity(){
    
}

function onClickButton() {

    if (elementQuestion.value == '' ){
        elementAnswer.innerHTML= "Digite algo";
        timer();
        return
    }

    elementButton.setAttribute("disabled",true)

    const messageRandom = Math.floor(Math.random() * answer.length);
    const question = "<p id=questionUser>" +elementQuestion.value + "</p>";
    elementAnswer.innerHTML = question + answer[messageRandom]; 
    elementQuestion.value = '';
    timer();

}