
// ActiveUser should output a username (h2) and age (h3)

<template>
    <section>
        <h2>Username: {{userName}} </h2>
        <h3>Age: {{userAge}} </h3>
    </section>
</template>

<script>
export default {
    props:["userName", "userAge"],
    data(){
        return{
            
        }
    },

}
</script>