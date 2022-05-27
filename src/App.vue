<template>
  <NavBar></NavBar>
  <router-view v-slot="{ Component }">
    <Transition mode="out-in" 
    enter-from-class="opacity-0" 
    enter-active-class="transition-all ease-out" 
    leave-to-class="opacity-0" 
    leave-active-class="transition-all ease-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>
<script setup>
import NavBar from './components/nav/NavBar.vue'
</script>