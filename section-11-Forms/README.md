# Forms
- handling user Input & forms
- vue + forms = easy!


## using v-model on custom components

just like we are able to use v-model for inputs in a form which replaces @input="" :value=""

```vue
<input v-model='' />
```
equals:
```vue
<input @input="" :value="" />
```

On custom components we can also use v-model
This is supported by vue, and vue will set a very specific prop in that component
and it will listen to a very specific event which you can emit in that compoenent;

Thus using v-model
```vue
<custom-component v-model="props" > </custom-component>
```
is equivalent to
```vue
<custom-component :model-value="props" @update:modelValue="emit"> </custom-component>
```

and in the component file we set the props and emits

```vue
props: ['modelValue'],
emits: ['update:modelValue'], //name vue will be waiting for
```
