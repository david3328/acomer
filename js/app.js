const app = new Vue({
	el:'#main',
	data:{
		platos:[
			{
				id:0,
				name:'Mondonguito Italiano',
				precio: 8.50,
				Descripcion:'Papas fritas, Mondonguito y arroz',
				img: 'img/platos/mondonguito.png'
			},
			{
				id:1,
				name:'Causa Monsefuana',
				precio: 15.00,
				Descripcion:'Peje blanco',
				img: 'img/platos/causa.png'
			},
			{
				id:2,
				name:'Arroz Chaufa',
				precio: 8.00,
				Descripcion:'Chaufa de chancho',
				img: 'img/platos/chaufa.png'
			},
			{
				id:3,
				name:'Tacacho con sesina',
				precio: 8.50,
				Descripcion:'Tacacho con sesina ',
				img: 'img/platos/tacacho.png'
			},
			{
				id:4,
				name:'Pollo a la Brasa',
				precio: 40.00,
				Descripcion:'Pollo + papas + ensalada',
				img: 'img/platos/pollo.png'
			},
			{
				id:5,
				name:'Arroz con pato',
				precio: 10.00,
				Descripcion:'Pato criollo',
				img: 'img/platos/pato.png'
			},
			{
				id:6,
				name:'Juane',
				precio: 8.50,
				Descripcion:'De gallina',
				img: 'img/platos/juane.png'
			},
			{
				id:7,
				name:'Ceviche',
				precio: 15.00,
				Descripcion:'De tollo',
				img: 'img/platos/ceviche.png'
			},
			{
				id:8,
				name:'Bistec a lo pobre',
				precio: 8.50,
				Descripcion:'Platano, huevo frito y carne',
				img: 'img/platos/bistec.png'
			},
			{
				id:9,
				name:'Parihuela',
				precio: 8.50,
				Descripcion:'Mixto',
				img: 'img/platos/parihuela.png'
			}
		],
		busqueda:'',
		modal:false,
		ModalTitle:'',
		ModalImg:'',
		ModalPrice:'',
		cantidad:1,
		
	},
	mounted(){
		
	},
	methods:{
	
		
		aumentar(){
			this.cantidad+=1;
		},
		disminuir(){
			this.cantidad-=1;
		},
		buscarPlatos(){
			return this.platos.filter((plato)=>plato.name.includes(this.busqueda));
		},
		cerrarModal(){
			this.modal=!this.modal;
		},
		Ordernar(name){
			this.ModalTitle = name.name;
			this.ModalImg = name.img;
			this.ModalPrice = name.precio;
			this.modal=true;
		}
	}
});