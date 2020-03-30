"use strict"

let _titolo, _txtSize, _body, _divImmagine, _btnImg1, _btnImg2, _btnImg3;

window.onload=function(){
	_titolo=document.getElementById("titolo");
	_txtSize=document.getElementById("txtSize");
	_body=document.getElementsByTagName("body")[0];
	_divImmagine=document.getElementById("imgBox");
	_btnImg1=document.getElementById("btnImg1");
	_btnImg2=document.getElementById("btnImg2");
	_btnImg3=document.getElementById("btnImg3");
	_txtSize.value="";
}

function cambiacolore(){
	if(_titolo.style.backgroundColor == "blue")
	{
		_titolo.style.backgroundColor = "yellow";
		_titolo.style.color= "blue";
	}
	else
	{
		_titolo.style.backgroundColor = "blue";
		_titolo.style.color= "yellow";
	}
}

function dimensione(){
	let font= _txtSize.value;
	_titolo.style.fontSize = font+"pt";
}

function sfondo(){
	if(_body.style.background=="")
	{
		_body.style.background="#eaeaea url(bg.gif) center repeat-y";
	}
	else
		_body.style.background="";
}

function bordo(){
	if(_titolo.style.border == "2px solid red")
	{
		_titolo.style.border= "2px solid white";
	}
	else
		_titolo.style.border= "2px solid red";
}

function immagini(i){
	_divImmagine.style.cssText+="background-image:url(img/img"+i+".jpg)";
}

function pulisci(){
	_divImmagine.style.visibility= "hidden";
}

function generaNumero(min,max){
	let n= Math.floor((max-min+1)*Math.random()+min) /*x generare un numero tra min e max estremi inlcusi */
	return n;
}