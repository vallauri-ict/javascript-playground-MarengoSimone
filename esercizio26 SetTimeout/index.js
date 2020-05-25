"use strict"

window.onload=function(){
	let _img=document.getElementById("imgCarta");
	let _btnGioca=document.getElementById("btnGioca");
	let _lblSomma=document.getElementById("lblSomma");
	let _lblCarte=document.getElementById("lblCarte");
	let _lblRisultato=document.getElementById("lblRisultato");
	
	_btnGioca.addEventListener("click",gioca);
	_lblRisultato.style.visibility= "hidden";
	
	let vet = [];
	function gioca(){
		if(_btnGioca.disabled==false)
		{
			_btnGioca.disabled=true;
			_lblSomma.innerHTML = "0";
			_lblCarte.innerHTML = "0";
			_lblRisultato.style.visibility= "hidden";
			vet=[];
		}
		
		let rnd;
		do{
			rnd=generaNumero(1,10);
		}while(vet.includes(rnd));
		vet.push(rnd);  //salvo il numero nel vettore
		
		_img.src = "img/bg_d" + rnd + ".gif";
		
		if(rnd>7)
			rnd=0.5;
		
		_lblCarte.innerHTML = vet.length;
		_lblSomma.innerHTML = parseFloat(_lblSomma.innerHTML) + rnd;
		
		if(vet.length<3)
			setTimeout(gioca,1500);
		else
		{
			if(parseFloat(_lblSomma.innerHTML)>7.5)
				_lblRisultato.innerHTML = "Hai perso";
			else
				_lblRisultato.innerHTML = "Hai vinto";
			_lblRisultato.style.visibility = "visible";
			_btnGioca.disabled=false;
		}
	}
}

function generaNumero(min,max){
	let n= Math.floor((max-min+1)*Math.random()+min) /*x generare un numero tra min e max estremi inlcusi */
	return n;
}