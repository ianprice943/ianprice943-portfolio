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
    border-bottom: 1px solid #333;
    background: #AAA;
    padding: 0 .25em;
    color: #000;
}
#name {
    text-align: left;
    font-size: 24px;
}
#current-role {
    text-align: left;
    font-size: 16px;
}
</style>