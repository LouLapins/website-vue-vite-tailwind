<template>
    <div class="w-full px-8 mt-16 text-center lg:mx-auto lg:w-2/3">
        <a class="w-4/5 lg:w-full" :href="imageLinkUrl" target="_blank" rel="noopener noreferrer">
        <img class="rounded-sm drop-shadow-lg" :src="imageSrcUrl" :alt="imageAltText">
        </a>
        <slot></slot>
    </div>
</template>
<script setup>

defineProps({
    imageSrcUrl: String,
    imageAltText: String,
    imageLinkUrl: String
})

</script>