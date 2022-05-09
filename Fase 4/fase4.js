function resposta(){
    var resposta = prompt("Digite sua resposta")
    if(resposta=="cronos"||"Cronos"||"Chronos"||"chronos"){
        window.location.replace("../Fim/fim.html");
    }else{
        window.alert("Resposta errada, tente novamente")
    }
}