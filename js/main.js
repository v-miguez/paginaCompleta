
		var urlJson="https://jsonplaceholder.typicode.com/photos";
		var json= new XMLHttpRequest();

		json.open('GET', urlJson, true);
		json.send();
		json.addEventListener('readystatechange', cargarLista);
		var numeroMenus =new Array();
		var listaImagenes= new Array();
		$('html, body').ready(cargarLista);






//Cargamos los datos del listado y los pintamos
		function cargarLista(event){
	

			if (this.readyState==4 && this.status == 200){

				var lista = JSON.parse(this.responseText);
				for(var i = 1; i<200; i=i+50){

					numeroMenus.push(lista[i]['albumId']);

				}
				for (var j= 0; j<200; j++){
					listaImagenes.push(lista[i]['url']);

				}
				pintarMenu(numeroMenus);
				pintarFoto(listaImagenes);
			}
		}

//funcion para pintar el numero de menus correctos
		function pintarMenu(pNumeroMenus){
			var menu="";
			for ( var j=1; j<=pNumeroMenus.length; j++ ){

				menu +='<li>menu'+j+'</li>';
			}
			$('#listado').html(menu);
		}



		function pintarFoto(pListaImagenes){
			var imagenes= "";
			for(var k=0; k<pListaImagenes.length; k++){

				imagenes +='<img src="'+pListaImagenes[k]+'" class="imagen"></img>'
			}
				$('#zonaImagenes').html(imagenes);

		}






