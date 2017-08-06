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
				rate: 4,
				img: 'https://www.schick-hotels.com/files/images/content/f-b-restaurant-schick/restaurant-wien-schick.jpg'
			},
			{
				id:2,
				name:'El Jacal',
				address: 'Huamachuco',
				especialidad: 'Ceviche',
				rate: 4,
				img: 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAqFAAAAJDZhNWI1ZGYyLWZhZDUtNGZiNC04NWNiLWY0Yzk4NGNhMGE2MA.jpg'
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