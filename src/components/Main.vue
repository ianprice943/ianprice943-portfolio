<template>
    <div id="main">
        <router-view />
    </div>
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
    margin: 1em 0;
    padding: 0 .5em;
}
</style>