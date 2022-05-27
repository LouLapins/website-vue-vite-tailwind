<template>
  <div class="flex items-end justify-end h-full">
    <Transition enter-from-class="opacity-0" tag="div" appear>
      <div ref="plants" class="relative w-full h-full bg-center bg-no-repeat bg-cover bg-plants-img">
      </div>
    </Transition>
    <img ref="image" src="../../assets/lou-river.jpg" alt="Lou by river"
      class="absolute w-1/3 rounded-full lou top-48 right-1/3">
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const plants = ref()
const image = ref()

onMounted(() => {
  gsap.to(plants.value, { duration: 2.5, opacity: 1 })
})

</script>
