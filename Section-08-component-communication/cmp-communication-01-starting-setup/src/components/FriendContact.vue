<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="deleteFriend"> Delete </button>
  </li>
</template>

<script>
export default {
  // props:[
  //   "name",
  //   "phoneNumber",
  //   "emailAddress",
  //   "isFavorite",
  // ],
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    // isFavorite: {
    //   type: String,
    //   required: false,
    //   default: "0",
    //   validator: (value) =>{
    //   return value ==="1" || value === "0";
    // }}
    isFavorite: {
      type: Boolean,
      required: false,
      // default: "0",
      //   validator: (value) =>{
      //   return value ==="1" || value === "0";
      // }
    },
  },

  ///this is the opposite of props, add

  emits:['toggle-favorite', 'delete-friend'],


//more advanced ways to do emits \/ \/

  // emits: {
  //   "toggle-favorite": (id) => {
  //     if (id) {
  //       return true;
  //     } else {
  //       //don't have to add, but will make fix code easier, and helps in teams. to understand where the problem is.
  //       console.warn("Id is missing");
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite,
      // friend: {
      //   id: "manuel",
      //   name: "Manuel Lorenz",
      //   phone: "0123 45678 90",
      //   email: "manuel@localhost.com",
      // },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // if(this.friendIsFavorite === "1"){
      //   this.friendIsFavorite = "0";
      // }else{
      //   this.friendIsFavorite = "1";
      // }

      // this.friendIsFavorite = !this.friendIsFavorite;

      //allows to use a custom event that the parent is listening.
      this.$emit("toggle-favorite", this.id); //convention is always use names with dash.
    },
    deleteFriend() {
      this.$emit('delete-friend', this.id);
    }
  },
};
</script>

                         