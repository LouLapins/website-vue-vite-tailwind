<template>
  <nav class="z-10 flex items-center w-full px-8 justify-between h-[50px] bg-zinc-900">
    <NavItem 
    to-component-name="Home" 
    text="Lou Lapins">
      <i class="flex items-center justify-center w-6 h-6 mr-2 text-xs not-italic font-bold rounded-full group-hover:bg-violet-400 bg-violet-500 font-display">
        L
      </i>
    </NavItem>
    <div class="flex h-full">
      <NavItem class="ml-4" 
      v-for="item in navItems" 
      :to-component-name="item.componentName" 
      :text="item.text" />
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
import NavItem from './nav/NavItem.vue'
const navItems = ref([
  // {
  //   componentName: 'Work',
  //   text: 'Work'
  // },
  // {
  //   componentName: 'About',
  //   text: 'About'
  // },
  {
    componentName: 'Contact',
    text: 'Contact me',
  },
])
</script>
