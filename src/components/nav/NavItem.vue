<template>
    <router-link class="flex items-center px-4 lg:px-8 h-[50px] text-base lg:text-sm 2xl:text-base font-bold text-white md:py-0 font-body group lg:hover:bg-zinc-800"
        :to="{ name: toComponentName }" @click="$emit('hideMobileMenu')">
        <slot></slot>
        {{ text }}
    </router-link>
</template>
<script setup>
defineProps({
    toComponentName: String,
    text: String
})

const emit = defineEmits(['hideMobileMenu'])
</script>