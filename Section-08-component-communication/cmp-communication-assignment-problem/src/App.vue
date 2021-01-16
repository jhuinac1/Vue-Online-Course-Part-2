<template>
    <section>
        <h1> VUE PROJECT ASSIGNMENT </h1>
        <user-data
            @add-name="renderUsername"
            @add-age="renderAge"
            > </user-data>
        <active-user 
            :user-name="name"
            :user-age="age"
            > </active-user>
    </section>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'
export default {
  components: { ActiveUser, UserData },
  data(){
      return{
          name: "",
          age: "",
      }
  },
  methods: {
      renderUsername(name){
          this.name = name;
      },
      renderAge(age){
          this.age = age;
      }
      
  }
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
* {
    font-family: 'Nanum Gothic', sans-serif;
}

section {
    margin: 2rem auto;
    max-width: 40rem;
    padding: auto;

}
</style>