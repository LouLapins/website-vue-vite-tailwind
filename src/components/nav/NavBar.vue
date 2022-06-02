<template>
  <header class="fixed top-0 left-0 z-10 w-screen md:relative bg-zinc-900">
    <nav class="flex items-center justify-between">
      <NavItem to-component-name="Home" text="Lou Lapins">
        <LogoIcon />
      </NavItem>
      <Button @click="toggleMobileMenu" s-r-text="Toggle menu"
        class="h-[50px] w-auto z-20 p-4 md:invisible text-white">
        <CloseIcon v-if="showMobileMenu" />
        <MenuIcon v-else/>
      </Button>
      <div 
        :class="showMobileMenu ? 'visible' : 'invisible'" 
        class="top-0 right-0 z-10 md:visible flex absolute flex-col items-center
         justify-center h-screen w-full md:w-auto overflow-hidden md:justify-end md:relative md:h-[50px] bg-zinc-900 md:flex-row">
        <NavItem class="md:invisible" to-component-name="Home" text="Home" @hideMobileMenu="toggleMobileMenu">
        </NavItem>
        <NavItem class="mt-8 md:mt-0" v-for="item in navItems" :to-component-name="item.componentName"
          :text="item.text" @hideMobileMenu="toggleMobileMenu"/>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref } from 'vue'
import NavItem from './NavItem.vue'
import LogoIcon from './LogoIcon.vue'
import Button from '../buttons/Button.vue'
import MenuIcon from '../svgs/MenuIcon.vue'
import CloseIcon from '../svgs/CloseIcon.vue'

const showMobileMenu = ref(false)
const navItems = ref([
  // {
  //   componentName: 'Work',
  //   text: 'Work'
  // },
  {
    componentName: 'About',
    text: 'About'
  },
  {
    componentName: 'Contact',
    text: 'Contact me',
  },
])

const emit = defineEmits(['toggleScroll'])

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value
  
  emit('toggleScroll')
}

</script>