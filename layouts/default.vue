<template>
    <body data-theme="mytheme">
        <div class="h-screen w-screen overflow-x-hidden">
            <slot />
        </div>  
    </body>
</template>

<script setup lang="ts">
useHead({
    title: 'Hello',
    meta: [
        { name: 'description', content: 'lorem ipsum' },
        { name: 'keywords', content: 'food, restaurant, gourmet' }
    ],
    
});

var scrollPosition: any = ref(0);

function getScrollPosition() {
    scrollPosition.value = window.scrollY;
}

onMounted(async () => {
    window.addEventListener('scroll', getScrollPosition);
})
</script>

<!-- <style>
.hide-scrollbar {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
}
</style> -->

