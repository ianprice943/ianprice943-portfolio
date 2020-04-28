<template>
    <div id="home">
        <div id="home-title">
            Home
        </div>
        <div id="about-me">
            <p>
                My name is Ian Price, and I'm a 22 year old developer from Columbus, Ohio. I hold a
                Bachelor of Science in Computer Science from Miami University, and graduated in 2019.
            </p>
            <p>
                I am a front-end focused web developer with almost a year of E-Commerce experience. 
                Making sure every page I touch is both responsive and cross browser compatible is a 
                fun and rewarding challenge.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
#home-title {
    font-size: 36px;
}
#about-me {
    font-size: 16px;
    margin: 1em 0;
    text-align: left;
}
</style>