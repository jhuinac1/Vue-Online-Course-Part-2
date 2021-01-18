//we will have tabs that will allows us to change windows.
<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')"
       :mode="storedResButtonMode">
      Stored Resources
    </base-button>
    <base-button @click="setSelectedTab('add-resources')"
      :mode="addResButtonMode">
      Add Resource</base-button
    >
  </base-card>
  <keep-alive>
  <component :is="selectedTab" > </component>
    </keep-alive>
</template>



<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResources,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
  provide() {
      return {
          resources: this.storedResources,
          addNewResource: this.addResource,
          deleteResource: this.removeResource,
      }
  },
  computed: {
    storedResButtonMode(){
      return this.selectedTab === "stored-resources" ? null : 'flat';
    },
    addResButtonMode(){
      return this.selectedTab === "add-resources" ? null : 'flat';
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(newResource){
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    removeResource(resId){
      //creating a new array and setting it to storedResources will not work because provide doesn't recognize that there is a new array, so instead we just update the original array, rather than creating a new one.
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    }
  },
};
</script>