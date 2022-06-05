<template>
    <div class="flex flex-col items-center w-full lg:h-[calc(100vh-50px)] justify-evenly lg:flex-row">
        <ImageCircle />
        <TextElements />
        <div class="relative invisible w-full h-0 overflow-hidden lg:h-full lg:visible">
            <div class="absolute w-3/5 h-[400%] top-0 bg-right-bottom bg-no-repeat right-0 bg-waves-img">
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
import ImageCircle from './components/ImageCircle.vue'
import TextElements from './components/TextElements.vue'
import SocialLinkButtonGroup from '../../components/buttons/SocialLinkButtonGroup.vue'

</script>
