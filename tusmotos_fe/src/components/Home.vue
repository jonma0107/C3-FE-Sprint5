<template>
    
   <div class="greetings">
       <div class="contenedor">
        <center>
            <h2 class="texto">Bienvenid@ <span class="span"> {{username}} </span> </h2>
        </center>    
       </div>
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
.contenedor{
    border: 3px solid #ffffff;
    border-radius: 10px;
    width: 70%;
    height: 30%;
    background-color: #283747;

    display: flex;
    justify-content: center;
    align-items: center;

}
.greetings{
   height: 30%;
   width: 100%;
   /*background-image: url('https://i.ibb.co/nfqWkhK/tumoto.png');
   background-size: 100px;
   background-attachment: fixed;*/

   display: flex;
   justify-content: center;
   align-items: center;
}
.greetings h2{
   font-size: 50px;
   color: red;
   /*font-weight: bold;*/
}
.greetings span{
   font-size: 50px; 
   color: green;
   /*font-weight: bold;*/
}
@media(max-width: 1080px){
    .contenedor {
        width: 100%;
        height: 50%;
        justify-content: center;
        align-items: center;
        
    }    

    
}
</style>
