const app = new Vue({
	el:'#main',
	data:{
		usuario:false,
		stats:false,
		admin:true,
		mostrar:false,
		user:{
			name:'Alfred Sosa Locumi',
			type:'Usuario Frecuente',
			rate:'Doña Rosa',
			ubicacion: 'Chiclayo',
			img:'url',
			consumo: 134.50,
			points: 45
		},
		platos:[
			{
				id:0,
				name:'Mondonguito Italiano',
				precio: 8.50,
				Descripcion:'Papas fritas, Mondonguito y arroz',
				img: 'https://cde.peru.com/ima/0/0/7/9/0/790393/611x458/mondonguito.jpg'
			},
			{
				id:1,
				name:'Causa Monsefuana',
				precio: 15.00,
				Descripcion:'Peje blanco',
				img: 'https://media-cdn.tripadvisor.com/media/photo-s/06/bc/10/e1/la-perla-de-las-flores.jpg'
			},
			{
				id:2,
				name:'Arroz Chaufa',
				precio: 8.00,
				Descripcion:'Chaufa de chancho',
				img: 'http://2.bp.blogspot.com/_uyLzRUlIHxQ/TUcscnwgH-I/AAAAAAAAC2o/zGYiCcXrntE/s1600/arroz-chaufa.jpg'
			},
			{
				id:3,
				name:'Tacacho con sesina',
				precio: 8.50,
				Descripcion:'Tacacho con sesina ',
				img: 'https://www.atrapalo.pe/common/photo/res/48875/0/ticr_890_370.jpg'
			},
			{
				id:4,
				name:'Pollo a la Brasa',
				precio: 40.00,
				Descripcion:'Pollo + papas + ensalada',
				img: 'http://polleriaexcelencia.com.pe/images/slide-1.jpg'
			},
			{
				id:5,
				name:'Arroz con pato',
				precio: 10.00,
				Descripcion:'Pato criollo',
				img: 'http://cde.peru.com/ima/0/1/4/3/6/1436698.jpg'
			},
			{
				id:6,
				name:'Juane',
				precio: 8.50,
				Descripcion:'De gallina',
				img: 'https://cde.peru.com/ima/0/0/4/0/8/408079/611x458.jpg'
			},
			{
				id:7,
				name:'Ceviche',
				precio: 15.00,
				Descripcion:'De tollo',
				img: 'http://walac.pe/wp-content/uploads/2016/06/ceviche.jpg'
			},
			{
				id:8,
				name:'Bistec a lo pobre',
				precio: 8.50,
				Descripcion:'Platano, huevo frito y carne',
				img: 'http://www.record.com.pe/consejos/wp-content/uploads/2015/06/2.png'
			},
			{
				id:9,
				name:'Parihuela',
				precio: 8.50,
				Descripcion:'Mixto',
				img: 'https://www.verycocinar.com/recursos/recetas/443/parihuela.video.jpg?1360782498'
			}
		]
	},
	methods:{
		cerrarModal(){
			this.mostrar=false;
		},
		Editar(){
			this.mostrar=true;
		},
		Usuario(){
			console.log('Hola');
			this.usuario=true;
			this.stats=false;
			this.admin=false;
			$('nav').animate({
				left:'-100%'
			});
		},
		Administracion(){
			this.usuario=false;
			this.stats=false;
			this.admin=true;
			$('nav').animate({
				left:'-100%'
			});
		},
		Estadistica(){
			this.usuario=false;
			this.stats=true;
			this.admin=false;
			$('nav').animate({
				left:'-100%'
			});
		}
	}
});