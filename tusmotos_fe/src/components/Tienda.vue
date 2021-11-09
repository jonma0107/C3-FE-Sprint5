<template>
	<center>
	<div v-if="loaded" class="information">
		<h2>Ahora estás en la Tienda <br> Con los siguientes datos: <br> 
			Nombre: <span>{{name}}</span> <br> Correo electrónico: <span>{{email}}</span> <br>
			Status: Comprador
		</h2>				
	</div>
	</center>

	<center>
	<!-- <div> -->
			<div id="shop">
				<!-- <ul> -->
					<div>
						<a href="https://youtu.be/MEBY8tj2XYU" target="_blank">
							<img src="https://i.ibb.co/n61gwVZ/pexels-rachel-claire-4825756.jpg" height="100" width="100"/>
						</a>
						<a href="https://youtu.be/MEBY8tj2XYU" target="_blank">Ver Vídeo</a><br />
						<span class="price">999.00</span><br />
						<a href="" ><span class="price">Añadir al carrito</span></a>						
					</div>
					<div>
						<a href="https://youtu.be/MEBY8tj2XYU" target="_blank">
							<img src="https://i.ibb.co/n61gwVZ/pexels-rachel-claire-4825756.jpg" height="100" width="100"/>
						</a>
						<a href="https://youtu.be/MEBY8tj2XYU" target="_blank">Ver Vídeo</a><br />
						<span class="price">999.00</span> <br />
						<a href="" ><span class="price">Añadir al carrito</span></a>						
					</div>
					<!-- <div>
						<a href="https://youtu.be/MEBY8tj2XYU" target="_blank">
							<img src="https://i.ibb.co/n61gwVZ/pexels-rachel-claire-4825756.jpg" height="100" width="100"/>
						</a>
						<a href="https://youtu.be/MEBY8tj2XYU" target="_blank">Ver Vídeo</a><br />
						<span class="price">999.00</span> <br />
						<a href="" ><span class="price">Añadir al carrito</span></a>						
					</div>
					<div>
						<a href="https://youtu.be/MEBY8tj2XYU" target="_blank">
							<img src="https://i.ibb.co/n61gwVZ/pexels-rachel-claire-4825756.jpg" height="100" width="100"/>
						</a>
						<a href="https://youtu.be/MEBY8tj2XYU" target="_blank">Ver Vídeo</a><br />
						<span class="price">999.00</span> <br />
						<a href="" ><span class="price">Añadir al carrito</span></a>						
					</div> -->
					
				<!-- </ul> -->
			</div>

			<div id="info-table">
				<h3>Carrito de Compras</h3>
				<table id="mytable"  width="50%" align="center">
					<tr>
						<th>Seleccionar</th>
						<th>Producto</th>
						<th>Cantidad</th>
						<th>Total (pesos)</th>
						
					</tr>
					<tr>
						<td><input type="checkbox"  class="selectOne" /></td>
						<td class="imgbackground"><img src="https://i.ibb.co/n61gwVZ/pexels-rachel-claire-4825756.jpg" height="50" width="50"/></td>
						<td class="integral">1</td>
						<td>4999.00</td>
												
					</tr>
					
					 
					
				</table>
					<div >
							<button onclick="reduce(this)">-</button>
							<input type="text" size="1" readonly="true" value="1"/>
							<button onclick="plus(this)">+</button>
					
					<a href="#" onclick="">Comprar</a>
					</div>
			</div>
			
		<!-- </div> -->
		</center>

	<center>
	<div class="delete">
		<button type="button" v-on:click="deleteUser"> Eliminar Cuenta </button>
	</div>
	</center>

</template>

<script>
import jwt_decode from "jwt-decode";
//import axios from 'axios';
import axios from '../config/axios';
export default {
	name: "Tienda",
	data: function(){
		return {
			userId: null, // con cambios del profe
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
					alert("USUARIO ELIMINADO DE LA BASE DE DATOS");
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

.delete{
	width: 100%;
	height: 10%;
	display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
}

 #shop div{
	width: 20%;
	height: 20%;
	/*font-size: 20px;
	margin: 10px 0;*/
	border: 3px solid #ffffff;
	border-radius: 10px;
	background-color: #283747;
	padding: 10px;
	margin: 1px 1px 1px 1px;
	margin-bottom: 20px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-y: auto;

	
    

}
#info-table{
	
	margin: 10px 0;
	border: 3px solid #ffffff;
	border-radius: 10px;
	background-color: #283747;
	padding: 10px;
	margin: 1px 1px 1px 1px;
	text-align: center;
}



.information{
	border: 3px solid #ffffff;
	border-radius: 10px;
	width: 35%;
	height: 30%;
	background-color: #283747;
	text-align: center;
	margin-bottom: 20px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

}

.information h2{
	font-size: 20px;
	color: red;
}
.information span{
	color: green;
	font-weight: bold;
}


	@media(max-width: 1080px){
		.information {
			width: 80%;
			height: 50%;

      justify-content: center;
      align-items: center;
      /*grid-template-columns: repeat(2, 2fr);*/

		}
		

		.delete{
			width: 80%;
			height: 50%;

      justify-content: center;
      align-items: center;
      /*grid-template-columns: repeat(1, 1fr);*/

		}

	
	/*#shop div{

		width: 50%;
		height: 50%;
		overflow-y: auto;

      justify-content: center;
      align-items: center;
      
	}*/		
    
  #shop div {
    	width: 50%;
		height: 80%;
		display: flex;
      	/*justify-content: center;
      	align-items: center;*/
      	grid-template-columns: repeat(2, 1fr);
      	overflow-y: auto;



    }

   
    #info-table {
    	width: 90%;
		height: 50%;
		overflow-y: auto;
	
			
      justify-content: center;
      align-items: center;
      
     

    }	
		
	    
	}

</style>