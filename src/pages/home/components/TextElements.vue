<template>
    <div>
        <div class="flex flex-col items-center mx-8 mt-6 md:items-start md:ml-24 md:w-80">
            <h1 class="mb-4 md:mb-8 text-3xl md:text-7xl text-zinc-900 font-bold leading-[2.5rem] md:leading-[4rem] font-display">Lou Lapins</h1>
            <span class="font-semibold text-sm md:text-base tracking-wide uppercase font-body text-[#522DA8]">Front End Developer</span>
            <p class="mx-4 my-8 text-sm font-light text-center text-gray-700 md:mx-0 md:text-left font-body">
                I'm a design minded developer from Stockholm, looking for my next job.
            </p>
            <ActionButton class="mt-4" @click="goToContact" icon="contact" text="Get in touch" />
        </div>
        <SocialLinkButtonGroup class="mt-14 md:ml-24 md:mt-24">
            <hr class="absolute left-0 w-20 md:w-[70px] h-px border-zinc-700">
        </SocialLinkButtonGroup>
    </div>
</template>

<script setup lang="ts">
import ActionButton from '../../../components/buttons/ActionButton.vue'
import router from '../../../router'
import SocialLinkButtonGroup from '../../../components/buttons/SocialLinkButtonGroup.vue'

function goToContact() {
    router.push({ name: 'Contact' })
}

</script>