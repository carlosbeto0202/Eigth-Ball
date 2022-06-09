function onClickButton() {
    activeP();
    setTimeout(timerDisableP,4000);
    setText();
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

function setText (){
    const texto_pego = document.getElementById("inputText").value;
    if (texto_pego != 0 || texto_pego != null){
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
}