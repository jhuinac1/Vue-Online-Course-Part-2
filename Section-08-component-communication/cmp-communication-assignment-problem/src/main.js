import { createApp } from 'vue'

//importing the main component
import App from "./App.vue";

//importing chilc components
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";


//initializing main component
const app = createApp(App);

//getting child components of app.vue
app.component(ActiveUser);
app.component(UserData);

app.mount('#app');

// Task 1: 
// Add two components to the app: 
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice

// Task 2: Output both components side-by-side in your main App template

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component