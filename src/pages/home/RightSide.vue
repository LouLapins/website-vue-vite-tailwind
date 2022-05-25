<template>
    <TransitionGroup enter-from-class="opacity-0" tag="div" appear class="flex items-end justify-end h-full bg-[#E9DBB9]">
        <div key="1" ref="plants" class="relative w-3/4 h-full bg-center bg-no-repeat bg-cover bg-plants-img">
        </div>
 
        <img key="2" ref="image" src="../../assets/lou-river.jpg" alt="Lou by river" class="absolute w-2/6 rounded-full lou top-52 right-1/3">
    
    </TransitionGroup>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const plants = ref()
const image = ref()

onMounted(() => {
  gsap.to(image.value, { duration: 2.5, opacity: 1})
})

</script>
