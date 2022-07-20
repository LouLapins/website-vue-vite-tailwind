<template>
    <picture ref="image"
      class="translate-y-10 opacity-0 w-[45%] mb-8 mt-[5vh] lg:m-0 lg:z-10 lg:absolute lg:self-center lg:w-1/3 lg:left-[400px] xl:left-[450px] 2xl:left-[600px]">
      <source type="image/webp"
        srcset="/assets/lou-river-372w.webp 372w, /assets/lou-river-520w.webp 530w, /assets/lou-river-743w.webp 743w"
        class="rounded-full">
      <source type="image/jpeg"
        srcset="/assets/lou-river-372w.jpg 372w, /assets/lou-river-520w.jpg 520w, /assets/lou-river-743w.jpg 743w"
        class="rounded-full">
      <img src="/assets/lou-river-743w.jpg" alt="Lou Lapins" class="rounded-full">
    </picture>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const image = ref()

onMounted(() => {
  gsap.to(image.value, { duration: 1, y: 0, opacity: 1})
})

</script>