<template>
    <div
        class="w-full md:w-1/2 min-h-[400px] lg:w-1/3 lg:h-full lg:justify-center flex flex-col items-center justify-between mx-8 lg:items-start lg:ml-24">
        <div class="text-center lg:text-left">
            <h1
                class="mb-4 lg:mb-8 text-3xl lg:text-7xl text-zinc-900 font-bold leading-[2.5rem] lg:leading-[4rem] font-display">
                Lou Lapins
            </h1>
            <span class="font-semibold text-sm lg:text-base tracking-wide uppercase font-body text-[#522DA8]">
                Front End Developer
            </span>
        </div>
        <p class="mx-8 text-sm font-light text-center text-gray-700 lg:mt-8 lg:mx-0 lg:text-left font-body">
            I'm a design minded developer from Stockholm, looking for my next job.
        </p>
        <ActionButton class="lg:mt-16" @click="goToContact" icon="contact" text="Get in touch" />
        <SocialLinkButtonGroup class="mb-8 md:my-8 lg:absolute lg:bottom-16 lg:m-0">
            <hr class="absolute invisible lg:visible -left-[100px] lg:w-[70px] h-px border-zinc-700">
        </SocialLinkButtonGroup>
    </div>
</template>

<script setup lang="ts">
import ActionButton from '../../../components/buttons/ActionButton.vue'
import router from '../../../router'
import SocialLinkButtonGroup from '../../../components/buttons/SocialLinkButtonGroup.vue';

function goToContact() {
    router.push({ name: 'Contact' })
}

</script>