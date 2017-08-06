const app = new Vue({
	el:'#main',
	data:{
		personas:[],
		busqueda:''
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
		buscarPersonas(){
			return this.personas.filter((persona)=>persona.name.first.includes(this.busqueda));
		}
	}
});