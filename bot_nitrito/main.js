let btnItems = document.querySelectorAll(".item .btn-item");

for(let i=0; i<btnItems.length; i++){
	btnItems[i].addEventListener("click", function(e){

		let btn = e.target;

		if(btn.className=="btn-item active"){
			removerClase()
		}else{
			removerClase();
			btn.classList.add("active");
		}
	})

}

function removerClase() {
	for(let i = 0; i<btnItems.length; i++) {
		btnItems[i].classList.remove("active");
	}
}