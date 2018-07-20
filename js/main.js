
		var urlJson="https://jsonplaceholder.typicode.com/photos";
		var json= new XMLHttpRequest();

		json.open('GET', urlJson, true);
		json.send();
		json.addEventListener('readystatechange', cargarLista);
		var numeroMenus =new Array();

		$('html, body').load(cargarLista);


		function cargarLista(event){
	

			if (this.readyState==4 && this.status == 200){

				var lista = JSON.parse(this.responseText);
				for(var i = 1; i<1000; i=i+50){

					numeroMenus.push(lista[i]['albumId']);
					pintarMenu(numeroMenus);

				}
				console.log(numeroMenus);

				pintarMenu(numeroMenus);
			}
		}


		function pintarMenu(pNumeroMenus){
			var menu="";
			for ( var j=1; j<=pNumeroMenus.length; j++ ){

				menu +='<li>menu'+j+'</li>';
			}
			$('#listado').html(menu);
		}