<template>
    <section class="w-full md:flex md:overflow-hidden">
        <TextElements class="w-1/3"/>
        <ImageCircle />
        <div class="relative invisible w-full h-full overflow-hidden md:visible">
            <div class="absolute w-3/5 h-[300%] bg-right-bottom bg-no-repeat right-0 bg-waves-img">
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import ImageCircle from './components/ImageCircle.vue'
import TextElements from './components/TextElements.vue'

</script>
