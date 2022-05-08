<template>
<ActionButton @click="goToContact" text="Get in touch" title="Contact" icon="email"/>

<LinkButton icon="github" url="https://github.com/LouLapins" title="Github Profile"/>
<LinkButton icon="linkedin" url="https://www.linkedin.com/in/loulapins" title="Linkedin Profile"/>
<LinkButton icon="facebook" url="https://www.facebook.com/lou.lapins" title="Facebook Profile"/>
</template>
<script setup lang="ts">
import LinkButton from './buttons/LinkButton.vue'
import ActionButton from './buttons/ActionButton.vue';
import router from '../router';

function goToContact() {
    router.push({ name: 'Contact' })
}
</script>