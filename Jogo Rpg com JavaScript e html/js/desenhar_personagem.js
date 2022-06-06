var soma=100;
var canvas;
var ctx;
var dx = 10;
var dxi = 10;
var dy = 10;
var dyi=10;
var x = 10;
var xi=800;
var y = 10;
var yi=300;
var WIDTH = 1000;
var HEIGHT = 500;
var tile1 = new Image();
var tile2= new Image();
var posicao = 4
var posicaoi = 4;
var NUM_POSICOES = 16;
var NUM_POSICOESi=12;
var primeiro=0;
var primeiroi=0;          
var tile = new Image();
var qtdPotion= 3;
function andaInimigo(){
	var anda=0;
	
	var min = Math.ceil(37);
	var max = Math.floor(40);
	var passos;
	passos = Math.floor(Math.random() * ((max - min + 1)) + min);
	switch (passos) {
        case 39: //direita
        if (primeiroi==0) {
        	posicaoi=0;
        	primeiroi=1;
        }  
        if (xi + dxi < WIDTH-50){
        	xi += dxi;
        	
        	posicaoi++;
        	if(posicaoi >2 || posicaoi<0)
        		posicaoi = 0;
        }
        break; 
        case 38 : //cima
        if (primeiroi==0) {
        	posicaoi=9;
        	primeiroi=1;
        }   
        if (yi - dyi > 0){
        	yi -= dyi;

        	posicaoi++;
        	if(posicaoi > 11 || posicaoi<9)
        		posicaoi = 9;
        }
        break;
        case 40:  //baixo
        if (primeiroi==0) {
        	posicaoi=3;
        	primeiroi=1;
        }  
        if (yi + dyi < HEIGHT-90){
        	yi += dyi;
        	
        	posicaoi++;
        	
        	if(posicaoi >5 || posicaoi<3)
        		posicaoi = 3;        
        }break;
       case 37:  //esquerda
       if (primeiroi==0) {
       	posicaoi=6;
       	primeiroi=1;
       }  
       if (xi - dxi > 0){
       	xi -= dxi;
       	
       	posicaoi++;
       	if(posicaoi >8 || posicaoi<6)
       		posicaoi = 6;
       }
       break;
   }
   
}




function KeyDown(evt){
	
	switch (evt.keyCode) {
        case 39: //direita
        if (primeiro==0) {
        	posicao=0;
        	primeiro=1;
        }  
        if (x + dx < WIDTH-20){
        	x += dx;
        	mudaAndarBatalha();
        	posicao++;
        	if(posicao >3 || posicao<0)
        		posicao = 0;
        }
        break; 
        case 38 : //cima
        if (primeiro==0) {
        	posicao=12;
        	primeiro=1;
        }   
        if (y - dy > 0){
        	y -= dy;
        	mudaAndarBatalha();
        	posicao++;
        	if(posicao > 15 || posicao<12)
        		posicao = 12;
        }
        break;
        case 40:  //baixo
        if (primeiro==0) {
        	posicao=4;
        	primeiro=1;
        }  
        if (y + dy < HEIGHT-40){
        	y += dy;
        	mudaAndarBatalha();
        	posicao++;
        	
        	if(posicao >7 || posicao<4)
        		posicao = 4;        
        }break;
       case 37:  //esquerda
       if (primeiro==0) {
       	posicao=8;
       	primeiro=1;
       }  
       if (x - dx > 0){
       	x -= dx;
       	mudaAndarBatalha();
       	posicao++;
       	if(posicao >11 || posicao<8)
       		posicao = 8;
       }
       break;

       case 77:
       var tag = document.getElementById("status");
       tag.classList.toggle("status");
       break;
       case 116:
       evt = window.event;
       var tecla = evt.keyCode;
       var confirma = confirm("caso atualize a pagina o jogo será fechado.");
       if(confirma==true){window.location.href = "../view/pontos.html";
       evt.preventDefault();
   }else{
   	evt.preventDefault();
   }

   break;
}

}




function Desenhar() {    
	tile1.src = "../imagens/"+posicao+".png";
	ctx.drawImage(tile1, x, y);
}
function DesenharI() {    
	tile2.src = "../imagens/a"+posicaoi+".png";
	ctx.drawImage(tile2, xi, yi);
	
}

function LimparTela() {
	var gra=document.getElementById("grama") ;
	var fundo = ctx.createPattern(gra, "repeat");
	
	ctx.fillStyle = fundo;    
	ctx.beginPath();
	ctx.rect(0, 0, WIDTH, HEIGHT);
	ctx.closePath();
	ctx.fill();    
}

function Atualizar() {
	LimparTela();    
	Desenhar();
	DesenharI();

}
function mudaAndarBatalha(){
	
	console.log("valor X "+x+"valor de y: "+y);
	if (x+20==xi && y==yi || x==xi && y==yi||x==xi && y+40==yi
		||x+20==xi && y-10==yi||x+20==xi && y+10==yi
		||x+20==xi && y+20==yi||x+10==xi && y+30==yi
		||x-10==xi && y==yi||x-10==xi && y+30==yi
		||x-20==xi && y+20==yi||x-20==xi && y+10==yi
		||x-20==xi && y==yi||x-20==xi && y-10==yi
		||x-20==xi && y-20==yi||x-10==xi && y-30==yi
		||x==xi && y-30==yi) {
		paraMusica();
	tocaBatalha();
	var troca = document.getElementById("andar");
	troca.classList.add("andaroff");
	troca.classList.remove("andaron");
	var troca2 =  document.getElementById("batalha");
	troca2.classList.add("batalhaon");
	troca2.classList.remove("batalhaoff");
	geraVida();
	document.getElementById("suffer").innerHTML="";
	document.getElementById("taken").innerHTML="";
}
}

function reinicia(){
	vida=vidaMax;
	qtdPotion=3;
	statusInimigo();
	geraVidaI();
	soma=100;
	var corVerde=document.getElementById("verde");
	var corVermelho=document.getElementById("vermelho");
	corVerde.style.width=soma+"%";
	corVerde.style.display="block";
	corVermelho.style.display="none";
	document.getElementById("usaPocao").innerHTML= "Po&ccedil&atildeo = "+qtdPotion;
}

function mudaBatalhaAndar(){
	tocaMusica();
	paraMusicaBatalha();
	console.log("valor X "+x+"valor de y: "+y);
	var troca = document.getElementById("andar");
	troca.classList.remove("andaroff");
	troca.classList.add("andaron");
	var troca2 =  document.getElementById("batalha");
	troca2.classList.remove("batalhaon");
	troca2.classList.add("batalhaoff");
	document.getElementById("suffer").innerHTML="";
	document.getElementById("taken").innerHTML="";
	reinicia();
	
}
function Iniciar() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
	return setInterval(Atualizar, 100);
}



function separaUrl(){
	var url   = window.location.search.replace("?", "");
	var items = url.split("&");

	var hash = {};

	for(var i = 0; i < items.length; i++){
		var parametro = items[i].split("=");
		var chave = parametro[0];
		var valor = parametro[1];
		hash[chave] = valor;
	}
	var olaAtk = hash["atk"];
	var olaDef = hash["def"];
	var olaSpd = hash["spd"];
	var pers = hash["pers"];
	iniAtk = parseInt(olaAtk);
	iniDef = parseInt(olaDef);
	iniSpd = parseInt(olaSpd);
	classe = parseInt(pers);
	if (!verificaNan(iniAtk,iniDef,iniSpd)) {
		if(!verificaHack(iniAtk,iniDef,iniSpd)){
			

			console.log("seu ataque"+iniAtk, iniSpd,iniDef,classe);
			geraClasse();
			return iniAtk,iniDef,iniSpd,classe;
		}
	}

}
function verificaHack(hAtk,hDef,hSpd){
	var soma=hAtk+hDef+hSpd;
	if(soma>12){
		alert("grande espertinho volte aos pontos.");
		window.location.replace("../view/pontos.html");
		return true;
	}else{
		return false;
	}

}
function verificaNan(valor1,valor2,valor3){
	if (isNaN(valor1)||isNaN(valor2)||isNaN(valor3)) {
		alert("valores indefinidos comece do inicio");
		window.location.replace("../view/pontos.html");

	}else{
		return false;
		
	}
}
function geraClasse() {

	if (classe==1) {
		iniAtk+=3;
		iniDef+=1;
		iniSpd+=2;
	}else if (classe==2) {
		iniAtk+=2;
		iniDef+=3;
		iniSpd+=1;
	}else if (classe==3){
		iniAtk+=1;
		iniDef+=2;
		iniSpd+=3;
	}else{
		alert("classe invalida, volte aos pontos.");
		window.location.replace("../view/pontos.html");

	}
	
}
function geraVida(){
	
	var total;
	vidaMax = Math.floor((spd*2)+def+(atk*0.5)+100);
	vida = vidaMax;

	document.getElementById("vida").innerHTML=vida+"/"+vidaMax;
	
	return vidaMax;
}
function somaAtk(){
	var com;
	com=1;
	atk=com+iniAtk;


	this.innerHTML = atk;
	return atk;
}
function somaDef(){
	var com;
	com=1;
	def=com+iniDef;


	this.innerHTML = def;
	return def;
}
function somaSpd(){
	var com;
	com=1;
	spd=com+iniSpd;


	this.innerHTML = spd;

	return spd;
}
function mudaBotao(){
	document.getElementById("atk").innerHTML=atk;
	document.getElementById("def").innerHTML=def;
	document.getElementById("spd").innerHTML=spd;


}

function usaPocao(){
	

	var rec,perc;
	if(qtdPotion>=1){

		var min = Math.ceil(30);
		var max = Math.floor(40);
		perc = Math.floor(Math.random() * ((max - min + 1)) + min);
		rec =Math.floor((vidaMax*(perc/100)));
		if(vida>=vidaMax){
			alert("voce esta com a vida cheia");
			document.getElementById("usaPocao").innerHTML= "Po&ccedil&atildeo = "+qtdPotion;
			vida=vidaMax;
		}else if(vida+rec>=vidaMax){
			vida=vidaMax;
			console.log("percento: "+perc);
			console.log("recuperado: "+rec);
			console.log("vida: "+vida);

			qtdPotion--;
			console.log("quantidade de poção: "+qtdPotion);
			document.getElementById("usaPocao").innerHTML= "Po&ccedil&atildeo = "+qtdPotion;
			document.getElementById("vida").innerHTML=vida+"/"+vidaMax;
			document.getElementById("taken").innerHTML+="voce recuperou: "+rec+"dano<br>";
			perc=0;
			rec=0;
		}else{
			vida=vida+rec;
			console.log("percento: "+perc);
			console.log("recuperado: "+rec);
			console.log("vida: "+vida);

			qtdPotion--;
			console.log("quantidade de poção: "+qtdPotion);
			
			document.getElementById("usaPocao").innerHTML= "Po&ccedil&atildeo = "+qtdPotion;
			document.getElementById("vida").innerHTML=vida+"/"+vidaMax;
			document.getElementById("taken").innerHTML+="voce recuperou: "+rec+" vida.<br>";
			perc=0;
			rec=0;
		}


	}else{
		document.getElementById("usaPocao").disabled=true;
		alert("acabou suas poções");

	}
	console.log("percento: "+perc);
	console.log("recuperado: "+rec);
	console.log("vida: "+vida);
}



function geraDano() {
	document.getElementById("aliado").style.display="none";
	somDanoI();
	var min = Math.ceil(12);
	var max = Math.floor(18);
	var dano;
	dano = parseInt(Math.floor(Math.random() * ((max - min + 1)) + min));
	var danoF = (dano+atkI)-def;
	vida=vida-danoF;
	console.log("ataque:"+atkI);
	console.log("sua vida pos dano: "+vida+" dano feito: "+danoF);
	console.log("-------------------");
	document.getElementById("vida").innerHTML=vida+"/"+vidaMax;
	document.getElementById("taken").innerHTML+="voce tomou: "+danoF+" dano.<br>";
	setInterval(function(){document.getElementById("aliado").style.display="inline";},200);
	if (vidaI<=0) {

		document.getElementById("taken").innerHTML="";
	}

	if(vida<=0){
		vidaI=vidaMaxI;
		morreu();
	}

	return danoF;
}
function danoInimigo(){
	document.getElementById("enemy").style.display="none";
	somDano();
	var min = Math.ceil(10);
	var max = Math.floor(18);
	var dano;
	dano = parseInt(Math.floor(Math.random() * ((max - min + 1)) + min));
	danoFI = (dano+atk)-defI;
	vidaI=vidaI-danoFI;
	console.log("ataque:"+atk);
	console.log("vida inimigo pos dano: "+vidaI+" dano tomado: "+danoFI);
	console.log("-------------------");
	document.getElementById("suffer").innerHTML+="voce causou: "+danoFI+" dano.<br>";
	setInterval(function(){document.getElementById("enemy").style.display="inline";},200);
	if (vida<=0) {
		document.getElementById("suffer").innerHTML="";
	}
	if(vidaI<=0){
		vida=vidaMax;
		ganhou();
		return 0;
	}
	diminuiBarra();
	return danoFI;

}
function tocaMusica(){
	var som =document.getElementById("player");
	som.src="../sons/music.mp3";
	som.volume=0.1;

}
function tocaBatalha(){
	var som =document.getElementById("playerbt");
	som.src="../sons/batalha.mp3";
	som.volume=0.1;
	

}
function paraMusica(){
	var som =document.getElementById("player");
	som.pause();
}
function paraMusicaBatalha(){
	var som =document.getElementById("playerbt");
	som.pause();
}
function somDano(){
	var som =document.getElementById("danoSom");
	som.src="../sons/espada.wav"
}
function somDanoI(){
	var som =document.getElementById("danoSom");
	som.src="../sons/dragao.wav"
}
function morreu(){
	if(vida<=0){
		alert("voce morreu");
		window.location.replace("../view/pontos.html");
		vida=0;
		paraMusica();
	}

}
function ganhou(){
	if(vidaI<=0){
		alert("voce ganhou");
		mudaBatalhaAndar();
		x = 10;
		xi=900;
		y = 10;
		yi=400;
		
	}

}

function ordemDano(){
	if(spdI>spd && vidaI>0 && vida>0){
		setTimeout(function(){geraDano()},500);
		if (vidaI>0) {
			setTimeout(function(){danoInimigo()},1000);
		}

	}else if(spd>=spdI && vida>0 && vidaI>0){
		setTimeout(function(){danoInimigo()},500);
		if(vida>0){
			setTimeout(function(){geraDano()},1000);
		}
	}

}

function statusInimigo(){
	var min = Math.ceil(1);
	var max = Math.floor(9);
	var somaIni=100;

	while(somaIni>20 || somaIni<8){
		
		
		atkI = Math.floor(Math.random() * ((max - min + 1)) + min);
		defI = Math.floor(Math.random() * ((max - min + 1)) + min);
		spdI = Math.floor(Math.random() * ((max - min + 1)) + min);
		somaIni=atkI+defI+spdI;
		console.log("a soma dos status é de: "+somaIni);
		console.log("o ataque é de: "+atkI);
		console.log("a defesa é de: "+defI);
		console.log("a velocidade é de: "+spdI);
		console.log("-------------------");

	}



}
function geraVidaI(){
	var total;
	vidaMaxI = Math.floor((spdI*2)+defI+(atkI*0.5)+150);
	vidaI = vidaMaxI;
	console.log("essa é a vida do inimigo: "+vidaI);
	console.log("-------------------");
	return vidaMaxI;
}
//funções da barra
function calculaMenosBarra(tiraWidth){
	return parseInt(tiraWidth=(soma*danoFI)/vidaI); 
}
function mudaCorBarra(){
	console.log("acho que mudou a cor haha");
	var corVerde=document.getElementById("verde");
	var corAmarelo=document.getElementById("amarelo");
	var corVermelho=document.getElementById("vermelho");
	if(soma>85){
		corVerde.style.display="block";
		corAmarelo.style.display="none";
		corVermelho.style.display="none";
	}else if(soma>45){
		corVerde.style.display="none";
		corAmarelo.style.display="block";
		corVermelho.style.display="none";
	}else{
		corVerde.style.display="none";
		corAmarelo.style.display="none";
		corVermelho.style.display="block";
	}
}
function diminuiBarra(){
	mudaCorBarra();
	soma-=calculaMenosBarra();
	console.log(soma);
	var barraVerde = document.getElementById("verde");
	var barraAmarela = document.getElementById("amarelo");
	var barraVermelha = document.getElementById("vermelho");
	
	if (soma<=0) {
		
		barraVerde.style.width="0%";
		barraVermelha.style.width="0%";
		barraAmarela.style.width="0%";
	}else{
		barraVerde.style.width=soma+"%";
		barraVermelha.style.width=soma+"%";
		barraAmarela.style.width=soma+"%";
	}

}

window.onload = function(){ //carrega função no inicio do site

	tocaMusica();
	setInterval(andaInimigo,500);
	separaUrl();
	var classe;
	var atkI,defI,spdI,vidaI,vidaMaxI;
	var atk,iniAtk;
	var def,iniDef;
	var vida;
	var vidaMax;
	var iniSpd;
	var spd;
	var danoFI;
	somaAtk();
	somaDef();
	somaSpd();
	geraVida();
	mudaBotao();
	statusInimigo();
	geraVidaI();
	Iniciar();
	document.getElementById("usaAtk").addEventListener("click",ordemDano);
	document.getElementById("usaPocao").addEventListener("click",usaPocao);
	window.addEventListener('keydown', KeyDown);
	
}