<template>
    <section class="flex items-center w-full md:overflow-hidden">
        <div class="flex flex-col items-center justify-center w-2/5">
            <h1 class="mb-8 text-3xl font-bold text-zinc-900 font-display">About me</h1>
            <div class="w-[70%] mb-16 text-sm font-light leading-loose text-gray-700 font-body">
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
        <div class="flex items-center justify-center w-[900px] h-[900px] rounded-full bg-gradient-to-r from-violet-50 to-indigo-50">
            <WorkIllustration class="h-1/2"></WorkIllustration>
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