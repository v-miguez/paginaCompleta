
		var urlJson="https://jsonplaceholder.typicode.com/photos";
		var json= new XMLHttpRequest();

		json.open('GET', urlJson, true);
		json.send();
		json.addEventListener('readystatechange', cargarLista);


		$('html, body').load(cargarLista);


		function cargarLista(event){
	

			if (this.readyState==4 && this.status == 200){
				var lista = JSON.parse(this.responseText);
				for(var i = 0; i<500; i++){
				console.log(lista[i]);
				}

			}
		}