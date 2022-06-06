<template>
    <button
        class="flex items-center w-auto px-10 py-4 text-sm text-white border-2 rounded-full font-body border-violet-500 bg-violet-500 lg:hover:bg-violet-400 lg:hover:border-violet-400 lg:active:border-violet-600"
    >
        {{ text }}
        <PaperPlaneIcon
            v-if="icon === 'contact'"
            class="relative left-1.5 bottom-px"
        />
    </button>
</template>
<script setup>
import PaperPlaneIcon from '../svgs/PaperPlaneIcon.vue'

defineProps({
    text: String,
    icon: String,
})
</script>
