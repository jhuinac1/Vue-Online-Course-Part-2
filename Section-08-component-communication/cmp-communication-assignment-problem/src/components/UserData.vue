
// UserData should output two input fields => for name and age

<template>
  <section>
    <label> Name </label>
    <input placeholder="john" type="text" v-model="name" />
    <label> age </label>
    <input placeholder="20" type="number" v-model="age"/>
  </section>
</template>


<script>
export default {
    emit:['add-name'],
  data() {
    return {
      name: "",
      age: "",
    };
  },
  watch: {
      name() {
          this.$emit("add-name", this.name);
      },
      age() {
          this.$emit("add-age", this.age);
      }
  }
};
</script>