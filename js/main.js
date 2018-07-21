
		var urlJson="https://jsonplaceholder.typicode.com/photos";
		var json= new XMLHttpRequest();

		json.open('GET', urlJson, true);
		json.send();
		json.addEventListener('readystatechange', cargarLista);
		var numeroMenus =new Array();
		var listaImagenes= new Array();
		var listaAlbum=new Array();
		var listaIds=new Array();
		var listaTitulos=new Array();

		$('html, body').ready(cargarLista);


		//funcion sliphover de jquery
		$(document).ready(function(){

		$('#container').sliphover();

		})



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
					listaTitulos.push(lista[j]['title']);

				}
				pintarMenu(numeroMenus);
				pintarFoto(listaImagenes, listaAlbum, listaIds, listaTitulos);
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



		function pintarFoto(pListaImagenes, pListaTipo, pListaId, pListaTitulos){
			var imagenes= "";
			for(var k=0; k<pListaImagenes.length; k++){
				imagenes +='<img src="'+pListaImagenes[k]+'" class="imagen" title="'+pListaTitulos[k]+'" data-album="'+pListaTipo[k]+'" id="'+pListaId[k]+'"></img>'
			}
				$('#container').html(imagenes);

			$('.imagen').on('hover', )

		}




		function filtrarFoto(event){
			$('.imagen').css('display', 'none');
			$('*[data-album="'+this.id+'"]').css('display', 'flex');

		}



		$('#container').slipHover();


