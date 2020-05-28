"use strict"

const DIM = 10;
let livello=0;

window.onload=function(){
	let _wrapper = document.getElementById("wrapper"); 
	
	for(let i=0;i<DIM;i++)
	{
		for(let j=0;j<DIM;j++)
		{
			let _div = document.createElement("div");
			_div.id = "btn-" + i + "-" + j;
			_wrapper.appendChild(_div);
		}
	}
	
	setInterval(visualizza, 500);
	
	
	function visualizza(){
		reset();
		disegnaCornice();
		livello++;
		if(livello == 5)
			livello=0;
	}
	
	function reset(){
		for(let i=0;i<DIM;i++)
		{
			for(let j=0;j<DIM;j++)
			{
				let _btn = document.getElementById("btn-" + i + "-" + j);
				_btn.style.backgroundColor = "#CCC";
			}
		}
	}
	
	function disegnaCornice(){
		// disegno le righe
		let riga1=livello;
		let riga2=DIM-livello-1;
		for(let j=livello;j<DIM-livello;j++)
		{
			let _div1 = document.getElementById("btn-" + riga1 + "-" + j);
			_div1.style.backgroundColor = "#F00";
			let _div2 = document.getElementById("btn-" + riga2 + "-" + j);
			_div2.style.backgroundColor = "#F00";
		}
		
		// disegno le colonne
		let colonna1=livello;
		let colonna2=DIM-livello-1;
		for(let i=livello;i<DIM-livello;i++)
		{
			let _div1 = document.getElementById("btn-" + i + "-" + colonna1);
			_div1.style.backgroundColor = "#F00";
			let _div2 = document.getElementById("btn-" + i + "-" + colonna2);
			_div2.style.backgroundColor = "#F00";
		}
	}
	
}




function generaNumero(min,max){
	let n= Math.floor((max-min+1)*Math.random()+min) /*x generare un numero tra min e max estremi inlcusi */
	return n;
}