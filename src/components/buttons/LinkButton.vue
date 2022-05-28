<template>
<button class="p-2 rounded-full ring-1 ring-zinc-900 text-zinc-900 hover:ring-violet-400 hover:ring-2">
  <a :href="url" target="blank">
    <slot></slot>
  </a>
</button>
</template>
<script setup>

defineProps({
  url: String,
})

</script>
