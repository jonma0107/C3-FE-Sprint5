<template>
	<div class="logIn_user">
		<div class="container_logIn_user">
			<h2>Iniciar sesión</h2>
			<form v-on:submit.prevent="processLogInUser" >
				<input type="text" v-model="user.username" placeholder="Username">
				<br>
				<input type="password" v-model="user.password" placeholder="Password">
				<br>
				<button type="submit">Iniciar Sesion</button>
			</form>
		</div>
	</div>
</template>

<script>
import axios from '../config/axios';
export default {
	name: "Login",
	data: function(){
		return {
			user: {
				username:"",
				password:""
			}
		}
	},
	methods: {
		processLogInUser: function(){
			axios
				.post("login/",	this.user, {
					headers: {},
				})
				.then((result) => {
					let dataLogIn = {
						username: this.user.username,
						token_access: result.data.access,
						token_refresh: result.data.refresh,
					};
					this.$emit('completedLogIn', dataLogIn)
				})
				.catch((error) => {

					if (error.response.status == "401")
						alert("ERROR 401: Credenciales Incorrectas.");

				});
			}
		}
	};
</script>

<style>
.logIn_user{
	margin: 0;
	padding: 0%;
	height: 50%;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
}
.container_logIn_user {
	border: 3px solid #ffffff;
	border-radius: 10px;
	width: 25%;
	height: 60%;
	background-color: #283747;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.logIn_user h2{
	color: #ffffff;
}
.logIn_user form{
	width: 70%;

}
.logIn_user input{
	height: 40px;
	width: 100%;
	box-sizing: border-box;
	padding: 10px 20px;
	margin: 5px 0;
	border: 1px solid #283747;
}
.logIn_user button{
	width: 100%;
	height: 40px;
	color: #E5E7E9;
	background: #283747;
	border: 1px solid #E5E7E9;
	border-radius: 5px;
	padding: 10px 25px;
	margin: 5px 0;
}
.logIn_user button:hover{
	color: #E5E7E9;
	background: crimson;
	border: 1px solid #283747;
}
@media(max-width: 1080px){
    .logIn_user .container_logIn_user{
    	width: 80%;
    	height: 50%;
      	justify-content: center;
      	align-items: center;
      	grid-template-columns: repeat(1, 1fr);
    }
}
</style>