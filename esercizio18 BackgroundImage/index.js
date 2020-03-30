"use strict"

let _imgBox, _imgRoll;
let _lstImmagini, _opts;

window.onload=function(){
	_imgBox=document.getElementById("imgBox");
	_imgRoll=document.getElementById("imgRoll");
	_imgBox.style.backgroundImage = "url('img/img1.jpg')";
	_imgRoll.style.backgroundImage = "url('img/img1.jpg')";
	_lstImmagini=document.getElementById("lstImmagini");
	_opts=document.getElementsByName("opt");
	setRadioButtonsClick();
}

function setRadioButtonsClick(){
	for(let i=0;i< _opts.length;i++)
	{
		//_opts[i].setAttribute("onclick", "cambiaImmagine("+ _opts[i].value + ")");
		_opts[i].addEventListener("click", function () { cambiaImmagine(this.value)});
	}
}

function cambiaImmagine(num){
	let imageNum = Number(num) + 1;
	console.log(imageNum);
	_imgBox.style.backgroundImage = "url('img/img" + imageNum + ".jpg')";
	_lstImmagini.value=num;
	_opts[num].checked=true;
}

function rollOn(){
	let n=generaNumero(1,4);
	_imgRoll.style.backgroundImage = "url('img/img" + n + ".jpg')";
}

function rollOff(){
	_imgRoll.style.backgroundImage = "url('img/img1.jpg')";
}

function generaNumero(min,max){
	let n= Math.floor((max-min+1)*Math.random()+min) /*x generare un numero tra min e max estremi inlcusi */
	return n;
}