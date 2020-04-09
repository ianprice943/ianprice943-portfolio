<template>
    <div id="header">
        <div id="title">
            <div id="name">
                Ian Price
            </div>
            <div id="current-role">
                Web Developer
            </div>
        </div>
        <Navigation />
    </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
    name: 'Header',
    components: {
        Navigation,
    }
}
</script>

<style scoped>
#header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#name {
    text-align: left;
    font-size: 22px;
}
#current-role {
    text-align: left;
    font-size: 14px;
}
</style>