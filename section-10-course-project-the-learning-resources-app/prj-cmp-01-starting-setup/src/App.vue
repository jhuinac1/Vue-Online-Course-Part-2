<template>
  <the-header title="RememberMe"> </the-header>
  <stored-resources :resources="storedResources"> </stored-resources>
  <the-resources> </the-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from "./components/LearningResources/TheResources.vue";
export default {
  components: {
    TheHeader,
    TheResources,
  },
 
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

* {
  font-family: 'Josefin Sans', sans-serif;
  box-sizing: border-box;
}
body {
  margin: 0;
}
</style>