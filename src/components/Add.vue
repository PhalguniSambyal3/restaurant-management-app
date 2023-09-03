<template>
<Header></Header>
    <h1>Hello user, Add Restaurant</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
        <button type="button" v-on:click="addRestaurant">Add new restaurant</button>
    </form>
    
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';

export default {
    name:'AddV',
    components:{
        Header
    },
    data(){
        return{
            restaurant :{
                name:'',
                contact:'',
                address:''
            }
        }

    },
    methods:{
        async addRestaurant(){
            console.log(this.restaurant)
            const result = await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                contact:this.restaurant.contact,
                address:this.restaurant.address
            });
            console.log("result",result)
            if(result.status==201)
            {
                this.$router.push({name:'Home'})
            }
        }
    },
    mounted()
    {
      let user= localStorage.getItem('user-info');
      if(!user)
      {
        this.$router.push({name:'SignUp'})
      }
    }
}
</script>