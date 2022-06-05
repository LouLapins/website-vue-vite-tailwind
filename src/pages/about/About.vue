<template>
    <section class="flex flex-col items-center w-full mt-16 lg:m-0 lg:flex-row">
        <div class="flex flex-col md:ml-16 items-center justify-center w-[70%] lg:w-[400px]">
            <h1 class="mb-8 text-3xl font-bold text-zinc-900 font-display">About me</h1>
            <div class="mb-16 text-sm font-light leading-loose text-gray-700 font-body">
                <p>I recently graduated from the Front End Developer program at
                    <a class="font-bold border-b-2 hover:text-violet-500"
                        href="https://medieinstitutet.se/utbildningar/front-end-developer/"
                        target="blank">Medieinstitutet.</a>
                </p>
                <p class="my-2"> Before that I have worked for ten years, mainly in retail and customer support.</p>
                <p>I like beautiful interfaces, clean code and modern javascript based frameworks.</p>
                <p class="my-2">As a junior developer I'm still learning every day, so working closely with colleagues
                    is important to me.</p>
                <p>If you think I could be a good fit for your team, I'd love to hear from you.</p>
            </div>
            <ActionButton text="Get in touch" @click="goToContact" icon="contact" />
        </div>
        <div class="flex items-center justify-center lg:absolute lg:left-[500px] w-[80vw] h-[80vw] mt-16 rounded-full lg:h-[900px] lg:w-[900px] lg:m-0 bg-gradient-to-r from-violet-50 to-indigo-50">
            <WorkIllustration class="w-1/2"></WorkIllustration>
        </div>
    </section>
</template>
<script setup>
import ActionButton from '../../components/buttons/ActionButton.vue'
import router from '../../router'
import WorkIllustration from '../../components/svgs/illustrations/WorkIllustration.vue'

function goToContact() {
    router.push({ name: 'Contact' })
}
</script>