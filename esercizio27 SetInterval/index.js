"use strict"




window.onload=function(){
	let _wrapper=document.getElementById("wrapper");
	let _btnStop=document.getElementById("btnStop");
	let _btnRestart=document.getElementById("btnRestart");
	
	let timer = setInterval(generaOggetti, 100);
	_btnRestart.disabled=true;
	
	let wrapperWidth = parseInt(getComputedStyle(_wrapper).width); //per accedere alle proprietà statiche nei CSS
	let wrapperHeight = parseInt(getComputedStyle(_wrapper).height);
	
	_btnStop.addEventListener("click", function(){
		clearInterval(timer);
		this.disabled=true;
		_btnRestart.disabled=false;
	});
	
	_btnRestart.addEventListener("click", function(){
		timer = setInterval(generaOggetti, 100);
		this.disabled=true;
		_btnStop.disabled=false;
	});
	
	function generaOggetti(){
		//crea un tag div  in memoria non visibile all'interno della pagina
		
		//assegno width e height
		let _div = document.createElement("div");
		let w = generaNumero(1,100); // lunghezza
		let h = generaNumero(1,100); // altezza
		_div.style.width=w;
		_div.style.height=h;
		
		//colore di sfondo
		let red = generaNumero(0,255);
		let green = generaNumero(0,255);
		let blue = generaNumero(0,255);
		_div.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
		
		//posizione nel wrapper
		let x = generaNumero(0, wrapperWidth-w);
		let y = generaNumero(0, wrapperHeight-h);
		_div.style.position = "absolute";
		_div.style.left = x // + "px";
		_div.style.top = y //+ "px";
		
		// appendo _div al wrapper
		_wrapper.appendChild(_div);
	}
}




function generaNumero(min,max){
	let n= Math.floor((max-min+1)*Math.random()+min) /*x generare un numero tra min e max estremi inlcusi */
	return n;
}