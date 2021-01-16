# Diving deeper into components

- Unlocking the full potential
- Component Registration and Styling (more than one way of doing it, each has it's own purpose)
- Slots and Dynamic Components
- Naming and folder Structure (specially as projects keep scaling up)



### Global Components

These components are available anywhere
The downside vue needs to load them all when the application is loaded initially. (no problem for small application, but a problem for big and scalable applications)

### Local Components

These can be imported in the script tag of the component where we plan to use the child component, and it will only be available to that component.
Cannot be passed down to other components. 
Vue can automatically can translate "TheHeader" -> "the-header"


```
<template>
  <div>
    <the-header></the-header>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    'the-header': TheHeader
  },
  //OR
  //components: {
  //    TheHeader
  //}
};
</script>
```


### Scoped Styles (component Styles)
global style:
```
<style>
    section: {
        color: red
    }
</style>
```
component styles:

Scoped: it tells vue that the styles in here should only apply to the template that lives in the component.
```
<style scope>
    section: {
        color: red
    }
</style>
```


### Slots (feature in vue components)
can be used (v-slot:anyName) OR  (#anyName)
A stand alone component, flexible.
custom template to wrap around other components.


```
<template>
    <div> 
    //the slot tag allows for this compoenent to be a wrapper
        <slot> </slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style  scoped>

</style>
```

Named slots: used for multiple slots in one component, but one slot must not have a name
```
<template>
    <div> 
        <header>
        //named slot
            <slot name="anyName"> </slot>
        </header>
        //no name
        <slot> </slot>
    </div>
</template>
```

we can check if the a tag from the custom component is being used, and decide not to render if not content is being provided

```
<template>
    <div> 
        <header v-if="$slots.header">
            <slot name="header">
            <!-- <h2>The Default </h2> -->
                 </slot>
        </header>
        <slot> </slot>
    </div>
</template>
```

To Use it in the desired component
 
 ```
 <template>
  <section>
    <base-card>
      <!-- <template v-slot:header>
        <h2>Available Badges</h2>
      </template> -->
      <template #default>
        <ul>
          <li>
            <base-badge type="admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge type="author" caption="AUTHOR"></base-badge>
          </li>
        </ul>
      </template>
    </base-card>
  </section>
</template>
```

### Scoped slots
is about letting you pass data from inside the component where slot defined, to the component where you pass the mark-up to the slot. by adding a prop, 
(:anyName="nameOfTheDataPassed")




Inside the component where slot is defined
```
<template>
    <ul> 
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal"> </slot>
        </li>
    </ul>
</template>


<script>
export default {
    data() {
        return {
            goals: ["Finish the course", "learn vue!"]
        }
    }
}
</script>
```

the markup to the slot
here we define a name of choice, this variable will always be an object where all the props defined will merge in. 


```
<template>
    <ul> 
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" secondProp="another prop value"> </slot>
        </li>
    </ul>
</template>

```


On the template being used:
```
<course-goals>
    <template #default="slotProps">
        <h2> {{slotProps.item}} </h2>
        <p> {{ slotProps.secondProp }} </p>
    </template>
</course-goals>
```