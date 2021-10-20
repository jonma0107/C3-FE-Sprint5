<template>
	<div v-if="loaded" class="information">
		<h1>Información de su cuenta</h1>
		<h2>Nombre: <span>{{name}}</span></h2>
		<!-- <h2>Password: <span>{{password}}</span></h2> -->
		<h2>Correo electrónico: <span>{{email}}</span></h2>
		<button type="button" v-on:click="deleteUser"> Eliminar Cuenta </button>
		
	</div>
</template>

<script>
import jwt_decode from "jwt-decode";
//import axios from 'axios';
import axios from '../config/axios';
export default {
	name: "Tienda",
	data: function(){
		return {
			userId: null,
			name: "",			
			password: "",
			email: "",
			loaded: false,
		}
	},
	methods: {
		getData: async function () {
			if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
					this.$emit('logOut');
					return;
				}
				await this.verifyToken();
				let token = localStorage.getItem("token_access");
				this.userId = jwt_decode(token).user_id.toString(); //con cambios del Profe

				axios.get(`https://tumotoapp.herokuapp.com/crud/user/${this.userId}/`, {headers: {'Authorization': `Bearer ${token}`}}) //con cambios del Profe
				.then((result) => {
					this.name = result.data.name;
					//this.password = result.data.password;
					this.email = result.data.email;
					this.loaded = true;
				})
				.catch(() => {
					this.$emit('logOut');
				});
			},
			verifyToken: function () {
				return axios.post("https://tumotoapp.herokuapp.com/refresh/", {refresh: localStorage.getItem("token_refresh")}, {headers: {}}
					)
				.then((result) => {
					localStorage.setItem("token_access", result.data.access);
				})
				.catch(() => {
					this.$emit('logOut');
				});
			},
			//DELETE
			deleteUser: function(){
				axios.delete("crud/user/"+ this.userId+"/").then(res =>{ //con cambios del Profe
					alert("ELIMINADO");
					this.$emit('logOut');
					// this.$router.push({name: "SignUp"})
				})
			}
		},

		created: async function(){
			this.getData();
		},
	};
</script>

<style>
.information{
	margin: 0;
	padding: 0%;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.information h1{
	font-size: 60px;
	color: #0f1316;
}
.information h2{
	font-size: 40px;
	color: #283747;
}
.information span{
	color: crimson;
	font-weight: bold;
}
</style>