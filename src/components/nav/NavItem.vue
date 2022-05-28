<template>
    <router-link class="flex items-center h-full px-8 text-sm font-bold text-white font-body group hover:bg-zinc-800"
        :to="{ name: toComponentName }">
        <slot></slot>
        {{ text }}
    </router-link>
</template>
<script setup>
defineProps({
    toComponentName: String,
    text: String
})
</script>