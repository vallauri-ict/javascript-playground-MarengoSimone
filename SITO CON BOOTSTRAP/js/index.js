"use strict"

let _nome;
let _email;
let _cellulare;
let _indirizzo;
let _città;
let _cap;
let _messaggio;

window.onload=function(){
	_nome=document.getElementsById("name");
	_città=document.getElementById("citta");
	_cellulare=document.getElementsById("phone");
	_email=document.getElementsById("email");
	_indirizzo=document.getElementById("indirizzo");
	_cap = document.getElementById("cap");
	_messaggio=document.getElementById("message");
	
	
	
	function validaForm(){
		
	if(_nome.value=="")
	{
		addClassi(_nome, "red-border");
		return false;
	}
	else
	{
		removeClassi(_nome,"red-border");
	}
	
	if(_messaggio.value=="")
	{
		addClassi(_messaggio, "red-border");
		return false;
	}
	else
	{
		removeClassi(_messaggio,"red-border");
	}
	
	if(_indirizzo.value=="")
	{
		addClassi(_indirizzo, "red-border");
		return false;
	}
	else
	{
		removeClassi(_indirizzo,"red-border");
	}
	
	if(_città.value=="")
	{
		addClassi(_città, "red-border");
		return false;
	}
	else
	{
		removeClassi(_città,"red-border");
	}
	
	if(_email.value== "")
	{
		addClassi(_email, "red-border");
		return false;
	}
	else
	{
		removeClassi(_email,"red-border");
	}
	
	let v=parseInt(_cellulare.value);
	if(isNaN(v))
	{
		alert("Il cellulare deve contenere numeri numeri");
		addClassi(_cellulare, "red-border");
		return false;
	}
	else
	{
		removeClassi(_cellulare,"red-border");
	}
	
	
	let cap=_cap.value;
	if(isNaN(cap))
	{
		alert("Il CAP deve essere composto da numeri");
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
}