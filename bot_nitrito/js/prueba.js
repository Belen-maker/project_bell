//Lógica de construcción:
//Primero saluda ✅
//Segundo me pregunta mi nombre ✅
//Tercero me pregunta *aleatoria* ¿Sabías que en los últimos 10 años se han descubierto Xn de nuevos elementos químicos? 👀
//Cuarto *Frase de admiración. Aleatoria* Es impresionante, ¿no crees?* 👀
//Cinco Invitación a conocer más sobre el tema... (se comparte un link)
//Despedida. 👀
for (var i = 1; i <= 2; i++) {

	console.log(i);
	//Recuerden que pueden usar un if aquí dentro
	
}

//Este es un while y su formato.
var x=0;
do{

console.log(x);
x= x + 1;

}while(x<5);

// FUNCION 

flags=abc.flags;
starts=abc.starts;
user=abc.user;

var r_element = document.getElementById('respond_user');

/*function nitrito(){
	let nombre = document.getElementById('respond_user').value;
	console.log(nombre);*/
	/*alert('¡Hola! Yo soy '+ nombre);
	}
	*/


function nitrito(res){
	// El saludo
	if (!flags.saludo) {

		// reasignación
		//----
		// conversación
		r_element.innerHTML = starts[abc.random] +" ¿Qué tal?... " + "¿Cómo te llamas?";
		// indicador
		flags.saludo=true;
		
		}else if(!flags.name){
			
			// reasignación
			user.name=res; 

			if (user.name) {

				// conversación	
				console.log(starts[random]+" "+user.name);
				console.log("🧪 ¿Sabías que en los últimos 10 años se han descubierto 6 nuevos elementos químicos?");

				// indicador
				flags.name=true;

			} else {

				r_element.innerHTML = "🧪 ¿Sabías que en los últimos 10 años se han descubierto 6 nuevos elementos químicos?";

			}}else if(!flags.age){

				// reasignación
				user.age=res;

				if (user.age) {

					// conversación
					console.log("Wow,"+user.name+". "+user.age+" anioos");
					console.log("Es impresionante, ¿no crees?");
					// indicador
					flags.age=true;

				} else {
					console.log("No me haz dado tu edad");
				}

			}else if(!flags.nicknames){

				// reasignación
				user.nicknames=res;

				if (user.nicknames) {
					// conversación
					console.log("oh ya veo, " + user.nicknames);

					// indicador
					flags.nicknames=true;

				} else {

					console.log("No me haz dado tu apodo")

				}

					}else if(flags.nicknames||flags.name||flags.age|| flags.saludo){

							console.log("======================")
							console.log("Esta fue una buena charla, me dio gusto conocerte, me tengo que ir. BYE")
							console.log("======================")
					
					}


				}
