<template>
    <button
        :title="title"
        class="flex items-center w-auto px-10 py-4 text-sm text-white border-2 rounded-full border-violet-500 bg-violet-500 hover:bg-violet-400 hover:border-violet-400 active:border-violet-600"
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
    title: String,
    icon: String,
})
</script>
