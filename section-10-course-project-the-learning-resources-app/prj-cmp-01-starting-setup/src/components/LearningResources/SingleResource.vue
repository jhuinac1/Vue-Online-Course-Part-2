<template>
  <li>
    <base-card>
      <header>
        <h3>{{ resource.title }}</h3>
        <base-button mode="flat" @click="deleteResource(resource.id)">Delete</base-button>
      </header>
    <p>{{ resource.description }}</p>
    <nav>
      <a :href="resource.link" target="_blank"> Learn More </a>
    </nav>
    </base-card>
  </li>
</template>


<script>
export default {
  props: ['resource'],
  inject: ['deleteResource']
};
</script>


<style scoped>
/* li {
  border: 1px solid black;
  margin: auto;
  padding: 1rem;
  max-width: 40rem;
  border-radius: 3px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.397);
} */

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}

</style>