<template>
    <nav id="navigation" aria-label="navigation">
        <slot>
            <nav>
                <ul>
                    <li>
                        <router-link :to="{ name: 'Home' } ">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Resume' }">Resume</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Portfolio' }">Portfolio</router-link>
                    </li>
                </ul>
            </nav>
        </slot>
    </nav>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style scoped>
#navigation {
    margin: auto 0;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
li {
    display: inline;
    margin: 0 .5em;
}
a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
}
a:visited {
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
a:active {
    text-decoration: underline;
}
</style>