const app = new Vue({
	el:'#main',
	data:{
		personas:[],
		busqueda:'',
		modal:false,
		ModalTitle:'',
		ModalImg:'',
		ModalPrice:'',
		cantidad:1	
	},
	mounted(){
		this.cargarPersonas();	
	},
	methods:{
	
		cargarPersonas(){
			axios.get('https://randomuser.me/api/?results=10')
				.then((respuesta)=>{
					this.personas = respuesta.data.results;
				});

		},
		aumentar(){
			this.cantidad+=1;
		},
		disminuir(){
			this.cantidad-=1;
		},
		buscarPersonas(){
			return this.personas.filter((persona)=>persona.name.first.includes(this.busqueda));
		},
		cerrarModal(){
			this.modal=!this.modal;
		},
		Ordernar(name){
			console.log(name.name.first);
			this.ModalTitle = name.name.first;
			this.ModalImg = name.picture.large;
			this.ModalPrice = name.gender;
			this.modal=true;
		}
	}
});