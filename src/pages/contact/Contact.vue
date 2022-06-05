<template>
    <section class="flex flex-col items-center w-full mt-16 lg:my-0 lg:flex-row">
        <div class="flex flex-col items-center justify-center lg:w-1/2">
            <h1 class="text-3xl font-bold text-zinc-900 font-display">Let's talk.</h1>
            <a class="my-16" href="mailto:lapins.lou@gmail.com">
                <span class="sr-only">To email</span>
                <ActionButton title="Open email" text="Email me here" icon="contact" />
            </a>
            <p class="mb-4 text-sm font-light text-gray-700 font-body">Or copy my email address here.</p>
            <div class="flex items-center bg-gray-100 rounded-md ring-1 ring-gray-200">
                <input ref="myInput" v-on:focus="$event.target.select()" value="lapins.lou@gmail.com" type="text"
                    readonly
                    class="p-3 mx-3 text-xs text-gray-500 bg-transparent focus-visible:[outline:none] tracking-wide truncate">
                <CopyButton :copied="copied" @click="copy"></CopyButton>
            </div>
            <p class="my-16 text-sm font-light text-gray-700 font-body">Or connect with me on any of these
                platforms&colon;</p>
            <SocialLinkButtonGroup />
        </div>
        <div class="flex items-center justify-center w-full h-full mt-16 lg:m-0 lg:w-1/2 bg-gray-50">
        <ContactIllustration class="w-[90%] max-w-full"></ContactIllustration>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import ActionButton from '../../components/buttons/ActionButton.vue'
import SocialLinkButtonGroup from '../../components/buttons/SocialLinkButtonGroup.vue'
import CopyButton from '../../components/buttons/CopyButton.vue'
import ContactIllustration from '../../components/svgs/illustrations/ContactIllustration.vue'

const myInput = ref()
const copied = ref(false)

function triggerCheckMark() {
    copied.value = true
    const removeCheckMark = () => {
        copied.value = false
        myInput.value.blur()
    }
    setTimeout(removeCheckMark, 3000)
}

async function copy() {
    try {
        myInput.value.focus()
        await navigator.clipboard.writeText(myInput.value.value)
        triggerCheckMark()
    } catch ($e) {
        alert('Sorry, could not copy!')
    }
}

</script>