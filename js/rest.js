const app = new Vue({
	el:'#main',
	data:{
		restaurantes:[
			{
				id:0,
				name:'Doña Rosa',
				address: 'Juan XXIII',
				especialidad: 'Arroz con pato',
				rate: 5,
				img: 'http://www.ozarlington.com/wp-content/uploads/2017/04/bar-buffet.jpg'
			},
			{
				id:1,
				name:'El Sabor',
				address: 'Jr Junin',
				especialidad: 'Arroz con pollo',
				rate: 3.8,
				img: 'https://www.schick-hotels.com/files/images/content/f-b-restaurant-schick/restaurant-wien-schick.jpg'
			},
			{
				id:2,
				name:'El Jacal',
				address: 'Huamachuco',
				especialidad: 'Ceviche',
				rate: 4,
				img: 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAqFAAAAJDZhNWI1ZGYyLWZhZDUtNGZiNC04NWNiLWY0Yzk4NGNhMGE2MA.jpg'
			},
			{
				id:3,
				name:'Mi Tia',
				address: 'Elias Aguirre',
				especialidad: 'Mondonguito Italiano',
				rate: 2.9,
				img: 'http://www.losportaleshoteles.com.pe/wp-content/uploads/2014/05/083.jpg'
			},
			{
				id:4,
				name:'La Perla de las Flores',
				address: 'Urb.San Martin',
				especialidad: 'Causa Monsefuana',
				rate: 4.5,
				img: 'https://media-cdn.tripadvisor.com/media/photo-s/05/f3/13/f5/la-perla-de-las-flores.jpg'
			},
			{
				id:5,
				name:'El Aguajal',
				address: 'Calle Union',
				especialidad: 'Tacacho con sesina',
				rate: 4.1,
				img: 'https://www.atrapalo.pe/common/photo/res/48875/0/ticr_890_370.jpg'
			},
			{
				id:6,
				name:'El Rincon del Pato ',
				address: 'Elias Aguirre',
				especialidad: 'Arroz con Pato',
				rate: 3.6,
				img: 'http://cde.elcomercio.pe/66/ima/0/0/3/3/9/339800.jpg'
			},
			{
				id:7,
				name:'El chavo',
				address: 'Av. Jorgue Chavez',
				especialidad: 'Pollo a la Brasa',
				rate: 2.8,
				img: 'http://polleriaexcelencia.com.pe/images/slide-1.jpg'
			}
		]
	},
	mounted(){
		this.cargarRate();
	},
	methods:{
		cargarRate(){
			this.restaurantes.forEach(function(obj){
				let id = '#'+obj.id;
				let rate = obj.rate;
				$(function () { 
				  $(id).rateYo({
				    rating: rate
				  });
				 
				});
			});
		}
	}
});