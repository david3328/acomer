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
				img: 'img/rest/rest1.png'
			},
			{
				id:1,
				name:'El Sabor',
				address: 'Jr Junin',
				especialidad: 'Arroz con pollo',
				rate: 3.8,
				img: 'img/rest/rest2.png'
			},
			{
				id:2,
				name:'El Jacal',
				address: 'Huamachuco',
				especialidad: 'Ceviche',
				rate: 4,
				img: 'img/rest/rest3.png'
			},
			{
				id:3,
				name:'Mi Tia',
				address: 'Elias Aguirre',
				especialidad: 'Mondonguito Italiano',
				rate: 2.9,
				img: 'img/rest/rest4.png'
			},
			{
				id:4,
				name:'La Perla de las Flores',
				address: 'Urb.San Martin',
				especialidad: 'Causa Monsefuana',
				rate: 4.5,
				img: 'img/rest/perlas.png'
			},
			{
				id:5,
				name:'El Aguajal',
				address: 'Calle Union',
				especialidad: 'Tacacho con sesina',
				rate: 4.1,
				img: 'img/rest/aguajal.png'
			},
			{
				id:6,
				name:'El Rincon del Pato ',
				address: 'Elias Aguirre',
				especialidad: 'Arroz con Pato',
				rate: 3.6,
				img: 'img/rest/pato.png'
			},
			{
				id:7,
				name:'El chavo',
				address: 'Av. Jorgue Chavez',
				especialidad: 'Pollo a la Brasa',
				rate: 2.8,
				img: 'img/rest/chavo.png'
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