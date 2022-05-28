<template>
    <div class="flex flex-col">
        <div class="flex flex-col items-start mt-40 ml-24 w-80">
            <h1 class="mb-8 text-7xl text-zinc-900 font-bold leading-[4rem] font-display">Lou Lapins</h1>
            <span class="font-semibold tracking-wide uppercase font-body text-violet-500">Front End Developer</span>
            <p class="my-8 text-sm font-light text-gray-700 font-body">
                I'm a design minded developer from Stockholm, looking for my next job.
            </p>
            <ActionButton 
            class="mt-4" 
            @click="goToContact" 
            icon="contact" 
            text="Get in touch" 
            title="Contact" />
        </div>
        <SocialLinkButtonGroup class="mt-24 ml-24">
            <hr class="absolute left-0 w-[70px] h-px border-zinc-700">
        </SocialLinkButtonGroup>
    </div>
</template>
<script setup>
import ActionButton from './../../components/buttons/ActionButton.vue';
import router from '../../router';
import SocialLinkButtonGroup from '../../components/buttons/SocialLinkButtonGroup.vue'


function goToContact() {
    router.push({ name: 'Contact' })
}
</script>