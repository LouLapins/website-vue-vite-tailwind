<template>
    <section class="flex items-center w-full h-[calc(100vh-50px)]">
        <div class="flex flex-col items-center justify-center w-1/2">
            <h1 class="text-3xl font-bold text-zinc-900 font-display">Let's talk.</h1>
            <a class="my-16" href="mailto:lapins.lou@gmail.com">
                <ActionButton title="Open email" text="Email me here" icon="contact" />
            </a>
            <p class="mb-4 text-sm font-light text-gray-700 font-body">Or copy my email address here.</p>
            <div class="flex items-center p-1 bg-gray-100 rounded-lg ring-1 ring-gray-200">
                <input ref="myInput" v-on:focus="$event.target.select()" value="lapins.lou@gmail.com" type="text"
                    readonly
                    class="p-3 mx-2 text-xs text-gray-500 bg-transparent focus-visible:[outline:none] font-body">
                <CopyButton :copied="copied" @click="copy"></CopyButton>
            </div>
            <p class="my-16 text-sm font-light text-gray-700 font-body">Or connect with me on any of these
                platforms&colon;</p>
            <SocialLinkButtonGroup />
        </div>
        <img class="object-cover w-1/2 h-full max-w-full" src="../../assets/letters.jpg" alt="Cream colored envelopes">
    </section>
</template>
<script setup>
import { ref } from 'vue'
import ActionButton from '../../components/buttons/ActionButton.vue'
import SocialLinkButtonGroup from '../../components/buttons/SocialLinkButtonGroup.vue'
import CopyButton from '../../components/buttons/CopyButton.vue'

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