<template>
  <div id="app" class="app">

    <div class="header">
      <div class="menu-btn">
      <img class="fas fa-bars" src="./assets/Logo.png" alt="" /> <!-- design -->
      </div>
      <!-- <h1>Tu Moto App</h1> -->
      <!-- <h1 v-if="SignIn">Iniciar Sesión</h1>
      <h1 v-if="SignUp">Registrarse</h1> -->
      <nav class="show">
        <button v-if="is_auth" v-on:click="loadTienda"> Tienda </button>
        <button v-if="is_auth" v-on:click="loadHome"> Inicio </button>
        <button v-if="is_auth" v-on:click="logOut"> Salir </button>
        <button v-if="!is_auth" v-on:click="loadLogIn" > Iniciar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadSignUp" > Registrarse Aquí </button>
      </nav>
    </div>

    <!-- <router-view></router-view> -->

    <div class="main-component">
      <router-view
      v-on:completedLogIn="completedLogIn"
      v-on:completedSignUp="completedSignUp"
      v-on:logOut="logOut"
      v-on:loadTienda="loadTienda"
      >   
      </router-view>
    </div>

    <!-- <div class="footer">
      <h2>tusmotos.com</h2>
    </div> -->

  </div>
</template>

                      <!-- SCRIPT -->

<script>
export default{
 name: 'App',

 data: function(){
  return {
    is_auth: false
  }
  // return {
  //   SignIn: true,
  //   SignUp: true,
  // }
 },

 methods: {
  verifyAuth: function() {
   this.is_auth = localStorage.getItem("isAuth") || false;  

   if(this.is_auth == false)
    this.$router.push({name: "Login"})
   else
    this.$router.push({name: "Home"})      
 },
 loadLogIn: function(){
   this.$router.push({name: "Login"})
 },
 loadSignUp: function(){
   this.$router.push({name: "SignUp"})
 },
 completedLogIn: function(data) {
    localStorage.setItem("isAuth", true);
    localStorage.setItem("username", data.username);
    localStorage.setItem("token_access", data.token_access);
    localStorage.setItem("token_refresh", data.token_refresh);
    //alert("Autenticación Exitosa");
    this.verifyAuth();
    },
    //console.log('Autenticado', data)
    //alert('Autenticado')},
 completedSignUp: function(data) {
    // console.log('Registrado', data)
    // alert('Registrado')
    // this.$router.push({name: "Login"})
    //alert("Registro Exitoso");
    this.completedLogIn(data);
 },
 loadHome: function() {
    this.$router.push({ name: "Home" });
 },
 logOut: function () {
    localStorage.clear();
    // alert("Sesión Cerrada");
    this.verifyAuth();
 },
 loadTienda: function () {
    this.$router.push({ name: "Tienda" });
 }
},

created: function(){
  this.verifyAuth()
}

};
</script>

<style>
  body{
    margin: 0 0 0 0;
}

  .header{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;

    background-color: #283747;
    color:#E5E7E9;
    display: flex;
    align-items: center;
}

  .header img {
    padding: 30px;
    display: flex;
    width: 100px;
    text-align: center;
}
  
  .header nav{
    height: 100%;
    width: 30%;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;

}

  .header nav button{
    width: 30%;
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 15px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

}

  .header nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;

}

  .main-component{
    height: 180vh;
    margin: 0%;
    padding: 0%;
    
    background-image: url('https://i.ibb.co/nfqWkhK/tumoto.png');
    background-size: 40px;

}

  /*.footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #283747;
    color: #E5E7E9;
 }

  .footer h2{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
 }*/

  .menu-btn {
    cursor: pointer;
    top: 15px;
    left: 30px;
    /*display: none;*/
 }

 @media(max-width: 1080px){

    .header nav {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      background: #2f3640;
      height: 100%;
      padding: 20px;
      opacity: .9;
      transform:  translateX(-1200px);

      transition: transform .5s ease-in-out;
    }

    .header .show{
      transform: translateX(-0px);
    }

    .header nav button{
      padding: 20px;
      width: 80%;
      margin: 20px;
      border-bottom: #ccc solid 20px;
      font-size: 14px;
    }

    .header {
      grid-template-columns: repeat(2, 1fr);
    }

    .header nav .main-component {
      width: 80%;
    }
 }


</style>