function resposta(){
    var resposta = prompt("Digite sua resposta")
    if(resposta=="Auguste Comte"||"Comte"||"comte"||"auguste comte"||"augusto comte"||"Augusto Comte"||"Auguste comte"||"Augusto comte"){
        window.location.replace("../Fase 3/fase3.html");
    }else{
        window.alert("Resposta errada, tente novamente")
    }
}