<template>
<button :title="title" class="flex items-center p-4 text-sm text-white rounded-lg bg-violet-500 hover:bg-violet-300 hover:text-black">
    {{ text }} <EmailIcon v-if="icon === 'email'" :size="14" class="pl-2"/>
</button>
</template>
<script setup lang="ts">
import EmailIcon from 'vue-material-design-icons/emailoutline.vue'

defineProps({
  text: String,
  title: String,
  icon: String
})

</script>