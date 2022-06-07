<template>
  <Transition enter-from-class="translate-y-24 opacity-0" tag="div" appear>
    <picture ref="image" class="w-[45%] mb-8 mt-[5vh] lg:m-0 lg:z-10 lg:absolute lg:self-center lg:w-1/3 lg:left-[400px] xl:left-[450px] 2xl:left-[600px]">
      <source type="image/webp" srcset="src/assets/lou-river-372w.webp 372w, src/assets/lou-river-520w.webp 530w, src/assets/lou-river-743w.webp 743w" class="rounded-full">
      <source type="image/jpeg" srcset="src/assets/lou-river-372w.jpg 372w, src/assets/lou-river-520w.jpg 520w, src/assets/lou-river-743w.jpg 743w" class="rounded-full">
      <img src="src/assets/lou-river-743w.jpg" alt="Lou Lapins" class="rounded-full">
    </picture>
  </Transition>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const image = ref()

onMounted(() => {
  gsap.to(image.value, { duration: 2, opacity: 1, y: 0 })
})

</script>