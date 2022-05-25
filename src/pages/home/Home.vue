<template>
    <div class="flex h-[calc(100vh-50px)]">
        <LeftSide class="w-2/5"/>
        <RightSide class="w-3/5"/>
    </div>
</template>
<script setup lang="ts">
import LeftSide from './LeftSide.vue'
import RightSide from './RightSide.vue'
</script>