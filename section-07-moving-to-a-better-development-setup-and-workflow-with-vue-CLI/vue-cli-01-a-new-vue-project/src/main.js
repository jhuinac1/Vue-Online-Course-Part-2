import { createApp } from 'vue';
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";

//creating the main app
const app = createApp(App)

//app components
app.component("friend-contact", FriendContact )

//mounting the app to a tag in the index.html 
app.mount('#app');
