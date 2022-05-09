function resposta(){
    var resposta = prompt("Digite sua resposta")
    if(resposta=="semiarido"||"Semiárido"||"Semiarido"||"semiárido"){
        window.location.replace("../Fase 4/fase4.html");
    }else{
        window.alert("Resposta errada, tente novamente")
    }
}