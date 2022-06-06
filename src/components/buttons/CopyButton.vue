<template>
    <div>
        <button :class="[copied ? 'bg-green-600 ring-green-600' : 'bg-gray-500 ring-gray-500 lg:hover:bg-gray-400 lg:hover:ring-gray-400', 'w-10 h-10 ring-1 transition-colors duration-300 ease-in-out cursor-pointer rounded-[0_6px_6px_0] flex items-center justify-center']">
            <span class="sr-only">Copy content</span>
            <i aria-hidden="true"
                class="text-white transition duration-300 ease-in-out transform">
                <CopyIcon v-if="!copied"></CopyIcon>
                <CheckIcon v-else-if="copied"></CheckIcon>
            </i>
        </button>
    </div>
</template>

<script setup>
import CopyIcon from '../svgs/CopyIcon.vue'
import CheckIcon from '../svgs/CheckIcon.vue'

defineProps({
    copied: Boolean
})

</script>