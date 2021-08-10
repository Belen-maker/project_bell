// Tipos de variables

// var texto = "hola como estas"; //texto
// var x = 20; //númericas
// var flag= true; //boolean


// Objeto maestro

var abc={
	"starts":["¡Hola! ","¡Qué onda! ","¡Holi! "],
	"flags":{"saludo":false,"name":false,"age":false,"nicknames":false},
	"user":{"name":"","nicknames":"","age":0},
	"random":funtion(){
		return Math.floor(Math.random() * abc.starts.length)
	}
}



var flags={
	"saludo":false,
	"name": false,
	"age":false,
	"nicknames":false,
}


var user={
	"name":"",
	"nicknames":"",
	"age":0
}


//document.getElementById("respond_user").innerHTML = ("name ");