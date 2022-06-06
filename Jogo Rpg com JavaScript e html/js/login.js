function validaSenha(){
	cadUser=document.getElementById("loginCad").value;
	cadSenha=document.getElementById("senhaCad").value;

	var test=cadSenha.search(/[\W+]/g);

	if (test<0) {
		cadastrar();
	}else{
		alert("senha deve conter apenas numeros e letras");
	}
}


window.onload=function(){
var cadSenha;
var cadUser;
document.getElementById("loginCad").value="";
document.getElementById("senhaCad").value="";
document.getElementById("login").value="";
document.getElementById("senha").value="";
var recLogin = document.getElementById("login").addEventListener("blur",login);
var recSenha = document.getElementById("senha").addEventListener("blur",login);
document.getElementById("ir").addEventListener("click",logar);
document.getElementById("irCad").addEventListener("click",validaSenha);

}

 function login(){
recLogin=document.getElementById("login").value;
recSenha=document.getElementById("senha").value;

return recSenha,recLogin;
  }

function logar(){
	try{
	var senha = recSenha;
	var login = recLogin;
	console.log(cadUser,cadSenha);
	if(recSenha==cadSenha&&recLogin==cadUser){
		window.location.replace("../view/pontos.html");
	}else{
		alert("senha/usuario errado(os)");
}
}catch{
	alert("voce deve se cadastrar primeiro");
}
}
function cadastrar(){
	var userTest,senhaTest;

	cadUser=document.getElementById("loginCad").value;
	cadSenha=document.getElementById("senhaCad").value;
	if(cadUser == ""||cadSenha==""){
		alert("campos de cadastro/senha deve ser preenchido");
		window.location.replace("../view/login.html");
		cadUser=document.getElementById("loginCad").value="";
		cadSenha=document.getElementById("senhaCad").value="";
	}
	document.getElementById("loginCad").value="";
	document.getElementById("senhaCad").value="";
}
