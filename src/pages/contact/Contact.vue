<template>
    <section class="flex items-center w-full h-screen">
        <div class="flex flex-col items-center justify-center w-1/2">
            <h1 class="text-3xl font-bold text-zinc-900 font-display">Let's talk.</h1>
            <a class="my-16" href="mailto:lapins.lou@gmail.com">
                <ActionButton title="Link to email" text="Email me here" icon="contact"/>
            </a>
            <p class="mt-4 mb-16 text-gray-600 font-body">Or feel free to message me on any of these platforms&colon;</p>
            <div>
                <LinkButton icon="github" url="https://github.com/LouLapins" title="Github Profile" />
                <LinkButton icon="linkedin" url="https://www.linkedin.com/in/loulapins" title="Linkedin Profile"
                    class="mx-6" />
                <LinkButton icon="facebook" url="https://www.facebook.com/lou.lapins" title="Facebook Profile" />
            </div>
        </div>
        <img class="object-cover w-1/2 h-full max-w-full" src="../../assets/letters.jpg" alt="Cream colored envelopes">
    </section>
</template>
<script setup lang="ts">
import LinkButton from '../../components/buttons/LinkButton.vue'
import ActionButton from '../../components/buttons/ActionButton.vue'
</script>