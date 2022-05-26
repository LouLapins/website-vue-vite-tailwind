<template>
    <div class="flex flex-col justify-center h-full">
        <div class="flex flex-col items-start ml-24 w-80">
            <h1 class="w-48 text-6xl font-bold uppercase font-display">Lou Lapins</h1>
            <p class="my-8 text-sm font-body">I'm a front end developer from Stockholm.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum atque nemo aliquid ad ullam aspernatur.
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