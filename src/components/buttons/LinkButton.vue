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
<script setup>
import LinkedinIcon from '../svgs/LinkedinIcon.vue'
import GithubIcon from '../svgs/GithubIcon.vue'
import FacebookIcon from '../svgs/FacebookIcon.vue'
import WebIcon from '../svgs/WebIcon.vue'

defineProps({
  url: String,
  icon: String,
  title: String
})

</script>