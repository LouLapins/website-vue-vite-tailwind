<template>
    <Transition enter-from-class="translate-y-24 opacity-0" tag="div" appear>
      <img ref="image" src="../../../assets/lou-river.jpg" alt="Lou Lapins"
        class="absolute self-center w-1/3 rounded-full left-1/3">
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