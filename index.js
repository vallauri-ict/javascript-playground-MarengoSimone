"use strict"

let _txtDisplay;
let primo=0;
let secondo=0;
let risultato;
let operazione;
let operatorePremuto=false;//serve per non scrivere 2 operarori
let potenza=0;
let bloccoNumero=false;//serve dopo avere premuto =. la consegna dice che dopo aver calcolato si deve per forza andare a cliccare un operando


window.onload=function(){
	_txtDisplay=document.getElementById("txtDisplay");
	_txtDisplay.value="";
	
}

function resetta(){
	_txtDisplay.value="";
	operazione="";
    operatorePremuto=false;
    potenza=0;
    bloccoNumero=false;

}

function visualizza(value){//primo e secondo li caricherò quando premerò = (anche corretto il tuo metodo non poteva funzionare perchè se si cliccava . non andava)
	if(bloccoNumero==false)
	{

		 _txtDisplay.value+=value;


	}

}

function operatore(value){
	if(operatorePremuto==false)
	{
		operazione=value;
		console.log(operazione);
		_txtDisplay.value+=operazione;
		operatorePremuto=true;
		potenza=0;
		bloccoNumero=false;
	}

}

function calcola(){
	let vet;
	switch(operazione)
	{
		case '+':
            vet= _txtDisplay.value.split("+");//splito la stringa di _txtDisplay
            primo=vet[0];
            secondo=vet[1];
			risultato=parseFloat(primo)+parseFloat(secondo);//se non si mette parseFloat rischi che primo e secondo vengano visti come 2 stringhe
			break;
		case '-':
            vet= _txtDisplay.value.split("-");
            primo=vet[0];
            secondo=vet[1];
            risultato=parseFloat(primo)-parseFloat(secondo);
			break;
		case '*':
            vet= _txtDisplay.value.split("*");
            primo=vet[0];
            secondo=vet[1];
            risultato=parseFloat(primo)*parseFloat(secondo);
			break;
		case '/':
            vet= _txtDisplay.value.split("/");
            primo=vet[0];
            secondo=vet[1];
            risultato=parseFloat(primo)/parseFloat(secondo);
			break;
	}
	_txtDisplay.value="";
	_txtDisplay.value=risultato;
	operatorePremuto=false;
	bloccoNumero=true;
		
}gh
/*"use strict"

let _txtDisplay;
let _btnNum, _btnOperatore;
let primo=0;
let secondo=0;
let operazione;
let risultato=0;
let cont=0;


window.onload=function(){
	_txtDisplay=document.getElementById("txtDisplay");
	_btnOperatore=document.getElementsByName("btnOperatore");
	_btnNum=document.getElementsByName("btnNum");
	_txtDisplay.value="";
	
}

function resetta(){
	_txtDisplay.value="";
	primo=0;
	operazione="";
}

function visualizza(value){
	cont++;
	if(cont==1)
	{
		primo=value;
		console.log(primo);
		_txtDisplay.value+=primo;
	}
	else
	{
		secondo=value;
		console.log(secondo);
		_txtDisplay.value+=secondo;
	}
}

function operatore(value){
	operazione=value;
	console.log(operazione);
	_txtDisplay.value+=operazione;
}

function calcola(){
	
	switch(operazione)
	{
		case '+':
			risultato=primo+secondo;
			break;
		case '-':
			risultato=primo-secondo;
			break;
		case '*':
			risultato=primo*secondo;
			break;
		case '/':
			risultato=primo/secondo;
			break;
	}
	_txtDisplay.value="";
	_txtDisplay.value=risultato;
	primo=risultato;
	secondo=0;
		
}*/


function generaNumero(min,max){
	let n= Math.floor((max-min+1)*Math.random()+min) /*x generare un numero tra min e max estremi inlcusi */
	return n;
}