<script setup lang="ts">
import { ref, withDefaults, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  foo: string
}>(),{
  foo: 'Hello World'
})

const { foo } = props

const message = ref(foo)

onMounted(()=>{
  console.log('mounted')
})
</script>
<template>
        <h2> {{ message }} </h2>
</template>