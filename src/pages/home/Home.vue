<template>
    <div class="flex flex-col items-center w-full mb-8 lg:mb-0 lg:h-[calc(100vh-50px)] justify-evenly lg:flex-row">
        <ImageCircle />
        <TextElements />
        <div class="relative invisible w-full h-0 overflow-hidden lg:h-full lg:visible">
            <div class="absolute top-0 right-0 w-1/2 h-full">
                <WavyBackground />
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
import ImageCircle from './components/ImageCircle.vue'
import TextElements from './components/TextElements.vue'
import WavyBackground from '../../components/svgs/illustrations/WavyBackground.vue';

</script>
<style>
</style>
