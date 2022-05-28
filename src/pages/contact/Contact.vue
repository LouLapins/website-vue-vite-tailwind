<template>
    <section class="flex items-center w-full h-[calc(100vh-50px)]">
        <div class="flex flex-col items-center justify-center w-1/2">
            <h1 class="text-3xl font-bold text-zinc-900 font-display">Let's talk.</h1>
            <a class="my-16" href="mailto:lapins.lou@gmail.com">
                <ActionButton title="Link to email" text="Email me here" icon="contact" />
            </a>
            <input value="lapins.lou@gmail.com" type="text" readonly />
            <button @click="copy">Copy</button>
            <p class="mt-4 mb-16 text-sm font-light text-gray-700 font-body">Or feel free to message me on any of these
                platforms&colon;</p>
            <SocialLinkButtonGroup />
        </div>
        <img class="object-cover w-1/2 h-full max-w-full" src="../../assets/letters.jpg" alt="Cream colored envelopes">
    </section>
</template>
<script setup>
import ActionButton from '../../components/buttons/ActionButton.vue'
import SocialLinkButtonGroup from '../../components/buttons/SocialLinkButtonGroup.vue'

function copy() {
    Clipboard.writeText('hello')
    console.log(Clipboard)
}
</script>