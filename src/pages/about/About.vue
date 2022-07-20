<template>
    <section class="flex flex-col items-center w-full mt-16 lg:m-0 lg:flex-row">
        <div class="flex flex-col md:ml-16 2xl:ml-[15%] items-center justify-center w-[70%] lg:w-[400px]">
            <Heading text="About me" />
            <BodyText class="mb-16">
                <p>I recently graduated from the Front End Developer program at
                    <TextLink text="Medieinstitutet." aria-label="Link to Medieinstitutet"
                        url="https://medieinstitutet.se/utbildningar/front-end-developer/" />
                </p>
                <p class="my-2"> Before that I have worked for ten years, mainly in retail and customer support.</p>
                <p>I like beautiful interfaces, clean code and modern javascript based frameworks.</p>
                <p class="my-2">As a junior developer I'm still learning every day, so working closely with colleagues
                    is important to me.</p>
                <p>If you think I could be a good fit for your team, I'd love to hear from you.</p>
            </BodyText>
            <ActionButton text="Get in touch" @click="goToContact" icon="contact" />
        </div>
        <div
            class="flex items-center justify-center lg:absolute lg:left-[500px] 2xl:left-[900px] w-[80vw] h-[80vw] mt-16 
        rounded-full lg:h-[900px] lg:w-[900px] lg:m-0 bg-gradient-to-r 2xl:h-screen 2xl:w-[100vh] from-violet-50 to-indigo-50">
            <WorkIllustration class="w-1/2"></WorkIllustration>
        </div>
    </section>
</template>
<script setup>
import ActionButton from '../../components/buttons/ActionButton.vue'
import router from '../../router'
import WorkIllustration from '../../components/svgs/illustrations/WorkIllustration.vue'
import TextLink from '../../components/TextLink.vue'
import Heading from '../../components/typography/Heading.vue'
import BodyText from '../../components/BodyText.vue'

function goToContact() {
    router.push({ name: 'Contact' })
}
</script>