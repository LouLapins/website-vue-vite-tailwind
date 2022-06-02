<template>
    <Transition enter-from-class="translate-y-24 opacity-0" tag="div" appear>
      <img ref="image" src="../../../assets/lou-river.jpg" alt="Lou Lapins"
        class="w-1/2 mt-24 rounded-full md:mt-0 md:z-10 md:absolute md:self-center md:w-1/3 md:left-[55%] lg:left-[45%] xl:left-1/3">
    </Transition>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const image = ref()

onMounted(() => {
  gsap.to(image.value, { duration: 2, opacity:1, y: 0 })
})

</script>