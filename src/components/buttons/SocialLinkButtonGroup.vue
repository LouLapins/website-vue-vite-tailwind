<template>
    <div class="flex items-center">
        <slot></slot>
        <LinkButton url="https://github.com/LouLapins" title="Github Profile">
            <GithubIcon />
        </LinkButton>
        <LinkButton url="https://www.linkedin.com/in/loulapins" title="Linkedin Profile" class="mx-8">
            <LinkedinIcon />
        </LinkButton>
        <LinkButton url="https://www.facebook.com/lou.lapins" title="Facebook Profile">
            <FacebookIcon />
        </LinkButton>
    </div>
</template>

<script setup>
import LinkButton from './LinkButton.vue'
import LinkedinIcon from '../svgs/LinkedinIcon.vue'
import GithubIcon from '../svgs/GithubIcon.vue'
import FacebookIcon from '../svgs/FacebookIcon.vue'
</script>