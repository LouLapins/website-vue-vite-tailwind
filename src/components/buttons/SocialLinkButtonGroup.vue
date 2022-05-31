<template>
    <div class="flex items-center">
        <slot></slot>
        <LinkButton url="https://github.com/LouLapins">
            <span class="sr-only">Github Profile</span>
            <GithubIcon />
        </LinkButton>
        <LinkButton url="https://www.linkedin.com/in/loulapins" class="mx-8">
            <span class="sr-only">Linkedin Profile</span>
            <LinkedinIcon />
        </LinkButton>
        <LinkButton url="https://www.facebook.com/lou.lapins">
            <span class="sr-only">Facebook Profile</span>
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