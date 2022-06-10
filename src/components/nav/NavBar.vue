<template>
  <header class="left-0 z-10 w-screen stop-0 lg:relative bg-zinc-900">
    <nav class="flex items-center justify-between">
      <NavItem to-component-name="Home" text="Lou Lapins" class="flex items-center justify-center">
        <LogoIcon class="relative bottom-0.5 w-[12px] mr-2"/>
      </NavItem>
      <Button @click="toggleMobileMenu" s-r-text="Toggle menu"
        class="h-[50px] w-auto z-20 px-4 lg:invisible text-white">
        <CloseIcon v-if="showMobileMenu" />
        <MenuIcon v-else/>
      </Button>
      <div 
        :class="showMobileMenu ? 'visible' : 'invisible'" 
        class="top-0 right-0 z-10 lg:visible flex absolute flex-col items-center
         justify-center h-screen w-full lg:w-auto overflow-hidden lg:justify-end lg:relative lg:h-[50px] bg-zinc-900 lg:flex-row">
        <NavItem class="lg:invisible" to-component-name="Home" text="Home" @hideMobileMenu="toggleMobileMenu">
        </NavItem>
        <NavItem class="mt-8 lg:mt-0" v-for="item in navItems" :to-component-name="item.componentName"
          :text="item.text" @hideMobileMenu="toggleMobileMenu"/>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref } from 'vue'
import NavItem from './NavItem.vue'
import LogoIcon from '../svgs/LogoIcon.vue'
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