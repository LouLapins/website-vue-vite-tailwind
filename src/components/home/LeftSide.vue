<template>
    <div class="box-border flex flex-col items-center w-1/2 h-screen">
        <div class="flex flex-col items-start w-2/3 h-full justify-evenly">
            <h1 class="w-48 text-6xl font-bold uppercase">Lou Lapins</h1>
            <p class="text-sm">I'm a front end developer from Stockholm.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum atque nemo aliquid ad ullam aspernatur.
            </p>
            <ActionButton @click="goToContact" text="Get in touch" title="Contact" />

            <div>
                <LinkButton icon="github" url="https://github.com/LouLapins" title="Github Profile" />
                <LinkButton icon="linkedin" url="https://www.linkedin.com/in/loulapins" title="Linkedin Profile" />
                <LinkButton icon="facebook" url="https://www.facebook.com/lou.lapins" title="Facebook Profile" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import LinkButton from '../buttons/LinkButton.vue'
import ActionButton from '../buttons/ActionButton.vue';
import router from '../../router';

function goToContact() {
    router.push({ name: 'Contact' })
}
</script>