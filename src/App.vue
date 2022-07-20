<template>
  <NavBar @toggle-scroll="toggleScroll" class="h-[50px]"></NavBar>
  <router-view v-slot="{ Component }" 
  :class="[canScroll ? 'overflow-y-scroll' : 'fixed', 'overflow-x-hidden lg:overflow-y-auto lg:relative lg:h-[calc(100vh-50px)]']">
    <Transition mode="out-in" 
    enter-from-class="opacity-0" 
    enter-active-class="transition-all ease-in-out" 
    leave-to-class="opacity-0" 
    leave-active-class="transition-all ease-in-out">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>
<script setup>
import NavBar from './components/nav/NavBar.vue'
import { ref } from 'vue'

const canScroll = ref(true)

function toggleScroll() {
  canScroll.value = !canScroll.value
}

</script>