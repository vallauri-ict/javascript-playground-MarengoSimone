"use strict"

let _txtNome, _optSesso, _sltAteneo, _chkLav, _txtDescr;
let output;

window.onload=function(){
	_txtNome=document.getElementById("nominativo");
	_optSesso=document.getElementsByName("sesso");
	_sltAteneo=document.getElementById("ateneo");
	_chkLav=document.getElementById("lavoratore");
	_txtDescr=document.getElementById("descr");
	output="Rilevati i seguenti problemi: ";
}

function validaForm(){
	if(_txtNome.value=="")
	{
		_txtNome.classList.toggle("red-border", true);
		output += "  Campo nominativo vuoto  ";
	}
	else
		_txtNome.classList.toggle("red-border", false);
	
	
		if(_optSesso[0].checked==false && _optSesso[1].checked==false)
		{
		   output += "  Sesso non selezionato  ";
		}
	

	
	let cap= document.datiUtente.cap.value;
	if(document.datiUtente.cap.value.length != 5 || isNaN(cap))
	{
		datiUtente.cap.classList.toggle("red-border", true);
		output += "  CAP errato  ";
	}
	
	if(_sltAteneo.value=="nessuno")
	{
		output+= "  Ateneo non selezionato  ";
	}
	
	if(_chkLav.checked)
	{
		if(_txtDescr.value=="")
		{
			output += "  Descrizione del lavoro vuota  ";
		}
	}
	
	if(output.length > 30)
	{
		alert(output);
		output="Rilevati i seguenti problemi: ";
		return false;
	}
	else
		alert("Dati inviati correttamente");
	return true;

}

function controllaNominativo(){
	let nome = _txtNome.value;
	let i=0;
	while((i<nome.length)&&(isNaN(nome[i++])));
	if(!isNaN(nome[i - 1]))
	{
		_txtNome.classList.toggle("red-border", true);
		alert("Il nome contiene dei numeri");
		return false;
	}
	else
		_txtNome.classList.toggle("red-border", false);
	if(nome.length==0)
	{
		_txtNome.classList.toggle("red-border", true);
		alert("Il campo nome è vuoto");
		return false;
	}
	else
	{
		_txtNome.classList.toggle("red-border", false);
		return true;
	}
}

function controllaCAP(){
	if(document.datiUtente.cap.value.length != 5)
	{
		alert("Il CAP deve contenere 5 cifre");
		return false;
	}
	let cap= document.datiUtente.cap.value;
	if(isNaN(cap))
	{
		alert("Il CAP deve contenere solo numeri");
		return false;
	}
	return true;
}

function Desc(){
	if(_chkLav.checked)
		_txtDescr.disabled=false;
	else
		_txtDescr.disabled=true;
}

function generaNumero(min,max){
	let n= Math.floor((max-min+1)*Math.random()+min) /*x generare un numero tra min e max estremi inlcusi */
	return n;
}