<template>
   <div class="greetings" style="background-image: url('https://i.ibb.co/2hpMYFK/pexels-rachel-claire-4825756.jpg'); background-repeat: no-repeat; background-attachment: fixed;
   background-size: 100% 100%">
       <h1>¡Bienvenid@ <span> {{username}} </span>!</h1>
   </div>
</template>

<script>
export default {
   name: "Home",
   data: function(){
       return {
           username: localStorage.getItem('username') || "none"
       }
   }
};
</script>

<style>
.greetings{
   margin: 0;
   padding: 0%;
   height: 100%;
   width: 100%;

   display: flex;
   justify-content: right;
   align-items: center;
}
.greetings h1{
   font-size: 50px;
   color: crimson;
   /*font-weight: bold;*/
}
.greetings span{
   font-size: 50px; 
   color: #283747;
   /*font-weight: bold;*/
}
</style>
