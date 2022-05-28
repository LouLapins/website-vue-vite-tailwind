<template>
    <div>
        <button :class="[copied ? 'bg-green-600' : 'bg-gray-500', 'w-10 h-10 transition-colors duration-300 ease-in-out cursor-pointer rounded-md flex items-center justify-center']">
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