<template>
  <router-view />
</template>

<script>

 export default{
    name: 'app',    
    
 }
  
</script>

<style>
#app{
  text-align:center
}
.logo{
  width:150px
}
.register input, .login input, .add input{
  width: 300px;
  height: 40px;
  display: block;
  margin: auto;
  padding-left: 20px;
  margin-bottom: 20px;
  border: 1px solid grey;
}
.register button, .login button, .add button{
  width: 325px;
  height: 40px;
  border: 1px solid grey;
  cursor: pointer;
  
}
</style>