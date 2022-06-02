<template>
    <button class="flex items-center justify-center cursor-pointer">
        <span class="sr-only">{{ SRText }}</span>
        <slot></slot>
    </button>
</template>

<script setup>

defineProps({
    SRText: String,
})

</script>