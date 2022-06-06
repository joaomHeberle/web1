window.onload = function(){
document.getElementById("distAtk").addEventListener("blur",distPontos);
document.getElementById("distDef").addEventListener("blur",distPontos);
document.getElementById("distSpd").addEventListener("blur",distPontos);
document.getElementById("distAtk").addEventListener("keypress",tecla);
document.getElementById("distDef").addEventListener("keypress",tecla);
document.getElementById("distSpd").addEventListener("keypress",tecla);
document.getElementById("dist").addEventListener("mouseover",mostraDica);
document.getElementById("dist").addEventListener("mouseout",escondeDica);
document.getElementById("dist").addEventListener("click",chamaAction);
var recAtk;
var recDef;
var recSpd;
}
function mostraDica(){
	document.getElementById("dica").style.display="block";

}
function escondeDica(){
	document.getElementById("dica").style.display="none";
}

 function tecla(){
    evt = window.event;
    var tecla = evt.keyCode;

    if(tecla > 47 && tecla < 58)
    { 
    
    }else{
        alert('digite numeros para os pontos!!!');
      evt.preventDefault();
    }
  }
function entraJogo(valor1,valor2,valor3){

  var soma=valor1,valor2,valor3;
  if(soma>0||soma<0){
    return true;
  }else{
    return false;
  }

}
 function distPontos(){

var recAtk=parseInt(document.getElementById("distAtk").value);
var recDef=parseInt(document.getElementById("distDef").value);
var recSpd=parseInt(document.getElementById("distSpd").value);
var pont = recSpd+recAtk+recDef;
  if(entraJogo(recAtk,recDef,recSpd)){
    if(pont>12){
	     alert("voce distribui mais de 12 pontos, retire algum(s) ponto(s)!!!");
       window.location.replace("../view/pontos.html");
    }else{
      console.log(recAtk,recDef,recSpd);

  }
  }
}
function chamaAction(){
  distPontos();
      document.getElementById("acao").action="jogo.html";
      
}