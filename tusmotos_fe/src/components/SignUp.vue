<template>
	<div class="signUp_user">
		<div class="container_signUp_user">
			<h2>Registrarse</h2>
			<form v-on:submit.prevent="processSignUp" >
				<input type="text" v-model="user.username" placeholder="username">
				<br>
				<input type="password" v-model="user.password" placeholder="password">
				<br>
				<input type="text" v-model="user.name" placeholder="name">
				<br>
				<input type="email" v-model="user.email" placeholder="email">
				<br>
				<center>
				<select id="text">
					<option selected>Selecciona :</option>
					<option value="">Comprador</option>
					<option value="">Vendedor</option>
				</select>
				</center>
				<br>
				<button type="submit">Enviar</button>
			</form>
		</div>
	</div>
</template>

<script>
import axios from '../config/axios';
export default {
	name: "SignUp",
	data: function(){
		return {
			user: {

				username: "",
				password: "",
				name: "",
				email: ""
				
			}
		}
	},
	methods: {
		processSignUp: function(){
			axios.post(
				"user/",
				this.user,
				{headers: {}}
				)
				.then((result) => {
					let dataSignUp = {
						username: this.user.username,
						token_access: result.data.access,
						token_refresh: result.data.refresh,
					};
					this.$emit('completedSignUp', dataSignUp)
				})
				.catch((error) => {
					console.log(error)
					alert("ERROR: Fallo en el registro.");
				});
		}
	}
};
</script>

<style>
#text {
	margin-top: 20px;
	width: 80%;
	padding: 5px;
}
.signUp_user{
	margin: 0;
	padding: 0%;
	height: 60%;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
}
.container_signUp_user{
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
.signUp_user h2{
	color: #ffffff;

}
.signUp_user form{
	width: 70%;


}
.signUp_user input{
	height: 40px;
	width: 100%;
	box-sizing: border-box;
	padding: 10px 20px;
	margin: 5px	0;
	border: 1px solid #283747;

}
.signUp_user button{
	width: 100%;
	height: 40px;
	color: #E5E7E9;
	background: #283747;
	border: 1px solid #E5E7E9;
	border-radius: 5px;
	padding: 10px 25px;
	margin: 5px	0 25px	0;

}
.signUp_user button:hover{
	color: #E5E7E9;
	background: crimson;
	border: 1px solid #283747;
}

@media(max-width: 1080px){
    .signUp_user .container_signUp_user{
    	width: 80%;
    	height: 70%;
      	justify-content: center;
      	align-items: center;
      	grid-template-columns: repeat(1, 1fr);
    }
}
</style>	