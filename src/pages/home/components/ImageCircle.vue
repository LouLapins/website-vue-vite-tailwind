<template>
    <Transition enter-from-class="translate-y-24 opacity-0" tag="div" appear>
      <img ref="image" src="../../../assets/lou-river.jpg" alt="Lou Lapins"
        class="w-[45%] rounded-full mb-8 mt-[5vh] lg:m-0 lg:z-10 lg:absolute lg:self-center lg:w-1/3 lg:left-[400px] xl:left-[450px] 2xl:left-[600px]">
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