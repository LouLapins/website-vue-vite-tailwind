<template>
<button :title="title" class="p-4 bg-gray-100 rounded-full hover:bg-gray-200">
  <a :href="url" target="blank">
    <LinkedinIcon v-if="icon === 'linkedin'"></LinkedinIcon>
    <GithubIcon v-else-if="icon === 'github'"></GithubIcon>
    <FacebookIcon v-else-if="icon === 'facebook'"></FacebookIcon>
    <WebIcon v-else></WebIcon>
  </a>
</button>
</template>
<script setup lang="ts">
import LinkedinIcon from 'vue-material-design-icons/linkedin.vue'
import GithubIcon from 'vue-material-design-icons/github.vue'
import FacebookIcon from 'vue-material-design-icons/facebook.vue'
import WebIcon from 'vue-material-design-icons/web.vue'

defineProps({
  url: String,
  icon: String,
  title: String
})

</script>