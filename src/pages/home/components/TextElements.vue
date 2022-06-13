<template>
    <div
        class="w-full md:w-1/2 min-h-[400px] lg:w-[350px] lg:h-full lg:justify-center flex flex-col items-center justify-between mx-8 lg:items-start lg:ml-24">
        <div class="text-center lg:text-left">
            <h1 ref="name"
                class="mb-4 lg:mb-8 text-3xl opacity-0 translate-y-10 lg:text-7xl 2xl:text-8xl text-zinc-900 font-bold leading-[2.5rem] lg:leading-[4rem] font-display">
                Lou Lapins
            </h1>
            <h2 ref="title"
                class="font-semibold text-sm 2xl:text-xl opacity-0 translate-y-10 lg:text-base tracking-wide uppercase font-body text-[#522DA8]">
                Front End Developer
            </h2>
        </div>
        <p ref="desc"
            class="mx-8 text-sm font-light text-center text-gray-700 translate-y-10 opacity-0 2xl:text-base lg:mt-8 lg:mx-0 lg:text-left font-body">
            I'm a design minded developer from Stockholm, looking for my next job.
        </p>
        <div ref="button" class="translate-y-5 opacity-0">
            <ActionButton class="lg:mt-16" @click="goToContact" icon="contact" text="Get in touch" />
        </div>
        <SocialLinkButtonGroup class="mb-8 md:my-8 lg:relative lg:top-[100px] lg:m-0">
            <hr class="absolute invisible lg:visible -left-[100px] lg:w-[70px] h-px border-zinc-700">
        </SocialLinkButtonGroup>
    </div>
</template>

<script setup>
import ActionButton from '../../../components/buttons/ActionButton.vue'
import router from '../../../router'
import SocialLinkButtonGroup from '../../../components/buttons/SocialLinkButtonGroup.vue'

import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const name = ref()
const title = ref()
const desc = ref()
const button = ref()

onMounted(() => {
    gsap.to(name.value, { y: 0, opacity: 1, duration: .5, delay: .1 });
    gsap.to(title.value, { y: 0, opacity: 1, duration: .5, delay: .2 });
    gsap.to(desc.value, { y: 0, opacity: 1, duration: .5, delay: .3 });
    gsap.to(button.value, { y: 0, opacity: 1, duration: .5, delay: .4 });

})

function goToContact() {
    router.push({ name: 'Contact' })
}

</script>