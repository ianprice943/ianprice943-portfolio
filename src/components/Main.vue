<template>
    <main id="main" aria-label="main">
        <router-view />
    </main>
</template>

<script>
export default {
    name: 'Main',
    watch: {
        '$route':{
            handler: (to) => {
                document.title = to.meta.title || 'Ian Price'
            },
            immediate: true
        }
    }
}

</script>

<style scoped>
#main {
    padding: 1em .5em;
}
</style>