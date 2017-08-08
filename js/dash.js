const app = new Vue({
	el:'#main',
	data:{
		usuario:true,
		stats:false,
		admin:false,
		mostrar:false,
		add:false,
		editar:false,
		mostrardelete:false,
		modalplato:{},
		nombreplato:'',
		descplato:'',
		precioplato:'',
		imgplato:'',
		auxid:'',
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
		]
	},
	methods:{
		cerrarModal(){
			this.mostrar=false;
			this.add=false;
			this.editar=false;
			this.nombreplato='';
			this.descplato='';
			this.precioplato='';
			this.imgplato='';
			this.auxid='';
		},
		Agregar(){
			this.add=true;
		},
		AgregarPlato(){
			let obj = new Object();
			obj.name = this.nombreplato;
			obj.Descripcion=this.descplato;
			obj.precio=this.precioplato;
			obj.img=this.imgplato;
			let index = this.platos.lenght -1 ;
			obj.id=index;
			this.platos.push(obj);
			this.nombreplato='';
			this.descplato='';
			this.precioplato='';
			this.imgplato='';
			this.add=false;
		},
		Editar(){
			this.mostrar=true;
		},
		ConfirmarEditar(){
			this.platos[this.auxid].name=this.nombreplato;
			this.platos[this.auxid].Descripcion=this.descplato;
			this.platos[this.auxid].precio=this.precioplato;
			this.platos[this.auxid].img=this.imgplato;

			this.editar=false;
			this.nombreplato='';
			this.descplato='';
			this.precioplato='';
			this.imgplato='';
			this.auxid='';
		},
		EditarPlato(plato){
			this.nombreplato=plato.name;
			this.precioplato=plato.precio;
			this.descplato=plato.Descripcion;
			this.imgplato=plato.img;
			this.auxid=plato.id;
			this.editar=true;
		},
		AlertPlato(plato){
			this.modalplato=plato;
			this.mostrardelete=true;
		},
		cerrarAlert(){
			this.mostrardelete=false;
			this.modalplato={};
		},
		EliminarPlato(){
			let index = this.platos.indexOf(this.modalplato);
			this.platos.splice(index,1);
			this.mostrardelete=false;
			this.modalplato={};
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