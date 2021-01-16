<template>
    <ul> 
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" secondProp="another prop value"> </slot>
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