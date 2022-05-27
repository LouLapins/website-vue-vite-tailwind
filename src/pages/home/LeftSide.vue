<template>
    <div class="flex flex-col justify-center h-full">
        <div class="flex flex-col items-start ml-24 w-80">
            <span class="text-xs font-semibold tracking-wide uppercase">Hello, I'm</span>
            <h1 class="w-48 my-8 text-7xl text-zinc-900 font-bold uppercase leading-[3.5rem] font-display">Lou Lapins</h1>
            <span class="font-semibold tracking-wide uppercase text-violet-500">Front End Developer</span>
            <p class="my-8 text-sm font-light text-gray-700 font-body">
                I'm a design minded developer from Stockholm, looking for my next job.
            </p>
            <ActionButton class="my-8" @click="goToContact" icon="contact" text="Get in touch" title="Contact" />

            <div class="mt-8">
                <LinkButton icon="github" url="https://github.com/LouLapins" title="Github Profile" />
                <LinkButton icon="linkedin" url="https://www.linkedin.com/in/loulapins" title="Linkedin Profile" class="mx-6" />
                <LinkButton icon="facebook" url="https://www.facebook.com/lou.lapins" title="Facebook Profile" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import LinkButton from './../../components/buttons/LinkButton.vue'
import ActionButton from './../../components/buttons/ActionButton.vue';
import router from '../../router';

function goToContact() {
    router.push({ name: 'Contact' })
}
</script>