"use strict"

const DIM = 10;

window.onload=function(){
	let _body = document.getElementsByTagName("body")[0];
	let _table = document.createElement("table"); 
	//centratura contenuto
	_table.style.textAlign = "center";
	//centratura genitore (tabella)
	_table.style.margin = "0 auto";
	_body.appendChild(_table);	
	
	for(let i=0;i<DIM;i++)
	{
		let _tr = document.createElement("tr");
		_table.appendChild(_tr);
		for(let j=0;j<DIM;j++)
		{
			let _td = document.createElement("td");
			_tr.appendChild(_td);
			let _btn = document.createElement("button");
			_btn.classList.add("btnStyle");
			_btn.setAttribute("id", "btn-"+i+"-"+j);
			_btn.addEventListener("click",visualizza);
			_td.appendChild(_btn);
		}
	}
	
	function visualizza(){
		//lettura coordinate
		let id = this.getAttribute("id");
		id = id.split("-");
		let i = id[1];
		let j = id[2];
		
		//visualizzazione
		this.innerHTML = i + "-" + j;
		this.style.backgroundColor = "red";
		this.disabled=true;
	}
}




function generaNumero(min,max){
	let n= Math.floor((max-min+1)*Math.random()+min) /*x generare un numero tra min e max estremi inlcusi */
	return n;
}