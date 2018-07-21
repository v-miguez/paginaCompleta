		//abriendo el JSON para poder leerlo a continuacion
		var urlJson="https://jsonplaceholder.typicode.com/photos";
		var json= new XMLHttpRequest();

		json.open('GET', urlJson, true);
		json.send();


		//añadiendo eventos

		json.addEventListener('readystatechange', cargarLista);
		$('html, body').ready(cargarLista);
// 	// $('html').bind("DOMSubtreeModified",function(){
//  //  		console.log('changed');
// 	// });
// 	$( document ).on( "DOMNodeInserted", function( e ) {
// 	$(e.target).on('click', mostrarLightBox())  // the new element	
// });

	// select the target node
var target = document.getElementsByTagName('body')[0];
 
// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation.type);
  });    
});
 
// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

		//funcion sliphover de jquery
			$(document).ready(function(){

			$('#container').sliphover();

			})
// pass in the target node, as well as the observer options
observer.observe(target, config);
 


		//creacion de Arrays
		var numeroMenus =new Array();
		var listaImagenes= new Array();
		var listaAlbum=new Array();
		var listaIds=new Array();
		var listaTitulos=new Array();



		
		


//Seccion de funciones
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

	//funciones para pintar el numero de menus correctos y las imagenes
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

			//Despues de pintar las imagenes les añadimos un evento para mostrar el lightbox
				$('.sliphover-container').on('click', mostrarLightBox);

		}



	//funcion para filtrar las fotos al hacer click
		function filtrarFoto(event){
			$('.imagen').css('display', 'none');
			$('*[data-album="'+this.id+'"]').css('display', 'flex');

		}

	//funcion para crear el lightbox
		function mostrarLightBox(){
			console.log('holi');		
		}





