<template>
    <a class="font-bold border-b-2 lg:hover:text-violet-500"
    :aria-label="ariaLabel"
    :href="url" 
    target="blank">
    {{ text }}
    </a>
</template>
<script setup>

defineProps({
    url: String,
    ariaLabel: String,
    text: String
})

</script>