
		var urlJson="https://jsonplaceholder.typicode.com/photos";
		var json= new XMLHttpRequest();

		json.open('GET', urlJson, true);
		json.send();
		json.addEventListener('readystatechange', cargarLista);
		var numeroMenus =new Array();
		var listaImagenes= new Array();
		var listaAlbum=new Array();
		var listaIds=new Array();

		$('html, body').ready(cargarLista);




//Cargamos los datos del listado y los pintamos
		function cargarLista(event){
	

			if (this.readyState==4 && this.status == 200){

				var lista = JSON.parse(this.responseText);
				for(var i = 1; i<100; i=i+50){

					numeroMenus.push(lista[i]['albumId']);

				}
				for (var j= 0; j<100; j++){
					listaImagenes.push(lista[j]['thumbnailUrl']);
					listaAlbum.push(lista[j]['albumId']);
					listaIds.push(lista[j]['id']);

				}
				pintarMenu(numeroMenus);
				pintarFoto(listaImagenes, listaAlbum, listaIds);
			}
		}

//funcion para pintar el numero de menus correctos
		function pintarMenu(pNumeroMenus){
			var menu="";
			for ( var j=1; j<=pNumeroMenus.length; j++ ){

				menu +='<li class="enlace" id="'+j+'">menu'+j+'</li>';
			}
			$('#listado').html(menu);

			//listeners del listado
			$('#listado li').on("click", filtrarFoto);

		}



		function pintarFoto(pListaImagenes, pListaTipo, pListaId){
			var imagenes= "";
			for(var k=0; k<pListaImagenes.length; k++){
				imagenes +='<img src="'+pListaImagenes[k]+'" class="imagen" data-album="'+pListaTipo[k]+'" id="'+pListaId[k]+'"></img>'
			}
				$('#zonaImagenes').html(imagenes);

		}




		function filtrarFoto(event){
			$('.imagen').css('display', 'none');
			$('*[data-album="'+this.id+'"]').css('display', 'flex');

		}

