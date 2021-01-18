<template>
    <ul>
        <single-resource v-for="resource in resources" :key="resource.id"
        :resource="resource"> 
        </single-resource>
    </ul>
</template>

<script>
import SingleResource from "./SingleResource.vue";

export default {
    components: {
        SingleResource,
    },
    inject:["resources"]
}
</script>

<style  scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}

</style>