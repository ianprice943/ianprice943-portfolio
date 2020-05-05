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
    padding: 1em .5em;
    /*background-image: url("~@/assets/dark-triangles.png");*/
    background-image: url("~@/assets/double-bubble.png");
    /*background-image: url("~@/assets/prism.png");*/
}
</style>