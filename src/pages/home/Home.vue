<template>
    <section class="h-[calc(100vh-50px)] flex w-full overflow-hidden">
        <TextElements class="w-1/3"/>
        <ImageCircle />
        <div class="relative w-full h-full overflow-hidden">
            <div class="absolute w-3/5 h-[300%] bg-right-bottom bg-no-repeat right-0 bg-waves-img">
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import ImageCircle from './components/ImageCircle.vue'
import TextElements from './components/TextElements.vue'

</script>
