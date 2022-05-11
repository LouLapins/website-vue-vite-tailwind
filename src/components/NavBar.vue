<template>
  <nav class="absolute z-10 flex items-center w-full p-4 text-sm font-bold text-white justify-evenly bg-zinc-900">
    <router-link :to="{ name: 'Home' }">Lou Lapins</router-link>
    <router-link v-for="item in navItems" :to="{ name: item.componentName }" class="">{{ item.text }}
    </router-link>
  </nav>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const navItems = ref([
  {
    componentName: 'Work',
    text: 'Work'
  },
  {
    componentName: 'About',
    text: 'About'
  },
  {
    componentName: 'Contact',
    text: 'Contact'
  }
])
</script>
