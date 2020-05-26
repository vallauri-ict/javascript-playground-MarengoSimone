"use strict"

const DIM = 6;

window.onload=function(){
	let _body= document.getElementsByTagName("body")[0];
	let vet = [];
	let vet2 = [];
	let cont=0;
	let btn1,_btn1;
	let btn2,_btn2;
	let indovinate=0;
	
	for(let i=0;i<18;i++)
	{
		vet[i]=i+1;
		vet2[i]=i+1;
	}
	for(let i=0;i<DIM;i++)
	{
		for(let j=0;j<DIM;j++)
		{
			let _btn = document.createElement("button");
			//_btn.id = "btn-" + i + "-" + j;
			_btn.classList.add("btn");
			_btn.innerHTML="";
			_btn.addEventListener("click", scopri);
			_body.appendChild(_btn);
			if(vet.length)
			{
				let pos = generaNumero(0,vet.length-1);
				_btn.innerHTML = vet[pos];
				_btn.id= vet[pos];
				vet.splice(pos,1);
			}
			if(i>2)
			{
				if(vet2.length)
				{
				let pos = generaNumero(0,vet2.length-1);
				_btn.innerHTML = vet2[pos];
				_btn.id = vet2[pos];
				vet2.splice(pos,1);
				}
			}
		}
	}
	
	function scopri(){
		cont++;
		if(cont==1)
		{
			btn1 = this.id;
			_btn1= this;
			this.style.backgroundColor="red";
			this.style.color="white";
		}
		else
		{
			if(cont>1)
			{
			btn2 = this.id;
			_btn2=this;
			this.style.backgroundColor="red";
			this.style.color="white";
			for(let i=0;i<DIM;i++)
			{
				for(let j=0;j<DIM;j++)
				{
					if(this.style.backgroundColor!= "red")
						this.disabled=true;
				}
			}
				
				setTimeout(controlla,500);
				cont=0;
			}
		}
		
		
	}
	
	function controlla(){
		if(btn1 == btn2)
		{
			_btn1.style.backgroundColor="blue";
			_btn2.style.backgroundColor="blue";
			_btn1.style.color="black";
			_btn2.style.color="black";
			indovinate++;
		}
		else
		{
			_btn1.style.backgroundColor="#CCC";
			_btn2.style.backgroundColor="#CCC";
			_btn1.style.color="gray";
			_btn2.style.color="gray";
		}
		if(indovinate==18)
		{
			alert("Complimenti! Hai vinto");		
		}
	
	}
}



function generaNumero(min,max){
	let n= Math.floor((max-min+1)*Math.random()+min) /*x generare un numero tra min e max estremi inlcusi */
	return n;
}