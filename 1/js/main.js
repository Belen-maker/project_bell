// Tipos de variables

var texto = "hola como estas"; //texto
var x = 20; //númericas
var flag= true; //boolean



// #maria

//arreglos
var starts=["hola","que onda!","hey","hello"];
var chat=["a si", ["a","b","c"], "apoco"];

//objetos

var user={ 
	"name":"",
	"nicknames":"",
	"age":0,
	"second_name":"",
	"auto":{
		"marca":"seat",
		"modelo":"leon",
		"year":"2019",
		"color":"white"
	}
}

//variables globales

var flag_saludo=false;
var flag_name=false;
const random = Math.floor(Math.random() * starts.length);

var flags={
	"saludo":false,
	"name":false,
	"age":false
}

function maria(res){


	// El saludo
	if (!flag_saludo) {
		
		console.log(starts[random]+", que tal..");
		flag_saludo=true;

	}else if(flag_name){

		user.name=res;
		console.log(starts[random]+user.name);

	}else if(!user.name || flag_name==false){

		console.log("Hola, como te llamas?");
		flag_name=true;

	}



	// if(!user.name){
	// 	console.log("Hola, como te llamas?");
	// }

	// console.log(starts[1]+" "+user.name);
	//cuando corra la función saludar responda un saludo random
}



//Primero saluda ✅
//Segundo me pregunta mi nombre
//Tercero me pregunta mi edad
//Si tengo auto o no?
//Tienes apodos
//Despedida. 






// alert("Hola, si funciona");
// console.log(texto);