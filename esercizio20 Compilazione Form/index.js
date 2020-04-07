"use strict"

let _cognome;
let _nome;
let _matricola;
let _regione;
let _email;

window.onload=function(){
	_cognome=document.getElementsByName("cognome")[0];
	_nome=document.getElementById("nome");
	_matricola=document.getElementsByName("matricola")[0];
	//_regione=document.getElementsByClassName("regione");
	_email=document.getElementsByName("email")[0];
}

function validaForm(){
	if(_cognome.value=="")
	{
		//alert("Inserire cognome");
		//_cognome.style.borderBottom="1px solid red";
		addClassi(_cognome, "red-border");
		return false;
	}
	else
	{
		removeClassi(_cognome,"red-border");
	}
	if(_nome.value=="")
	{
		addClassi(_nome, "red-border");
		return false;
	}
	else
	{
		removeClassi(_nome,"red-border");
	}
	if(_matricola.value== "")
	{
		addClassi(_matricola, "red-border");
		return false;
	}
	else
	{
		removeClassi(_matricola,"red-border");
	}
	let v=parseInt(_matricola.value);
	if(isNaN(v))
	{
		alert("La matricola deve essere un numero");
		addClassi(_matricola, "red-border");
		return false;
	}
	else
	{
		removeClassi(_matricola,"red-border");
	}
	if(document.registr.regione.value=="nessuna")
	{
		alert("Selezionare una regione");
		return false;
	}
	
	if(_email.value=="")
	{
		addClassi(_email/*.value*/, "red-border");
		return false;
	}
	
	if(document.registr.richieste.value=="")
	{
		addClassi(document.registr.richieste/*.value*/, "red-border");
		return false;
	}
	if(document.registr.tel.value=="")
	{
		addClassi(document.registr.tel/*.value*/, "red-border");
		return false;
	}
	let num=document.registr.tel.value;
	if(isNaN(num))
	{
		alert("Il cellulare deve essere composto da numeri");
		return false;
	}
	alert("Dati inviati correttamente");
	return true;
}

function addClassi(_element, _className){
	let arr;
	arr = _element.className.split(" ");
	if(arr.indexOf(_className)==-1){
		_element.className += " " +_className;
	}
}

function removeClassi(_element, _className){
	_element.className = _element.className.replace(_className,"");
}

function generaNumero(min,max){
	let n= Math.floor((max-min+1)*Math.random()+min) /*x generare un numero tra min e max estremi inlcusi */
	return n;
}