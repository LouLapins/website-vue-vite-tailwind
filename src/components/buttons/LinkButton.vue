<template>
<button class="p-3 rounded-full drop-shadow-lg ring-1 ring-zinc-700 text-zinc-900 hover:ring-violet-400 hover:ring-2">
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
