<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1 class="text-xl">{{ msg }}</h1>

  <button class="p-4" type="button" @click="count++">count is: {{ count }}</button>
  <p class="p-10">
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

</template>

<style scoped>

</style>
