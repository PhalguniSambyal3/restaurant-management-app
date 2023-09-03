<template>
<Header></Header>
    <h1>Hello user, Update Restaurant</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
        <button type="button" v-on:click="updateRestaurant">Update restaurant</button>
    </form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'

export default {
    name:'UpdateV',
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
        async updateRestaurant()
        {
             const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name:this.restaurant.name,
                contact:this.restaurant.contact,
                address:this.restaurant.address
            });
            console.log("result",result)
            if(result.status==200)
            {
                this.$router.push({name:'Home'})
            }
        }
    },
    async mounted()
    {
      let user= localStorage.getItem('user-info');
      if(!user)
      {
        this.$router.push({name:'SignUp'})
      }
      console.log(this.$route.params.id)
      const result= await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id)
      this.restaurant= result.data
    }
}
</script>