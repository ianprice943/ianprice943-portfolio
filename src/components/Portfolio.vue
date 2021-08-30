<template>
    <div id="portfolio">
        <h1 id="portfolio-title">
            Portfolio
        </h1>
        <div id="portfolio-container">
            <div id="github">
                <h2 class="project-title">
                    To see what side projects Ian is working on, check out his GitHub
                </h2>
                <a href="https://github.com/ianprice943" aria-label="Ian's GitHub">
                    <img src="~@/assets/GitHub_Logo_White.png" alt="GitHub Logo">
                </a>
            </div>
            <div id="pmddx">
                <h2 class="project-title">
                    Pokemon Mystery Dungeon Rescue Team DX Starters
                </h2>
                <div>
                    A small site developed to learn Vue.js and also React.js with TypeScript
                </div>
                <a href="https://pmdrtdx-react.herokuapp.com/" aria-label="A Pokemon Game Site">
                    <img src="~@/assets/PMDRTDXLogo.png" alt="Pokemon Mystery Dungeon Rescue Team DX Logo">
                </a>
                <div id="vue-react-link-container">
                    <a href="https://pmdrtdx-vuejs.herokuapp.com/">Vue.js Version</a>
                    <a href="https://pmdrtdx-react.herokuapp.com/">React.js Version</a>
                </div>
            </div>
            <div id="wkmediation">
                <h2 class="project-title">
                    William Kampf Mediation
                </h2>
                <a href="https://wkmediation.com/" aria-label="A mediator's website">
                    <img src="https://wkmediation.files.wordpress.com/2020/06/wk_mediation_logo_horiz_graygold.png" alt="WK Mediation Logo">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Portfolio'
}
</script>

<style scoped>
#portfolio-title {
    font-size: 36px;
    text-align: left;
    font-weight: 400;
    margin: 0;
}
#portfolio-container {
    margin: 1em 0;
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
    flex-wrap: wrap;
}
.project-title {
    font-size: 28px;
}
#portfolio-container > div {
    width: 48%;
}
#portfolio-container > div> a > img {
    width: 100%;
}
#vue-react-link-container {
    display: flex;
    justify-content: center;
}
#vue-react-link-container > a {
    margin: 0 0 1em;
}
#vue-react-link-container > a:last-of-type {
    margin: 0 0 1em 1em;
}
#vue-react-link-container > a:hover {
    opacity: .7;
}
#vue-react-link-container > a:visited {
    color: #FFF;
}

@media only screen and (max-width: 1023px) {
    #pmddx > div:last-of-type {
        font-size: 16px;
    }
}

@media only screen and (max-width: 767px) {
    #portfolio-container {
        flex-direction: column;
    }
    #portfolio-container > div {
        width: 100%;
        margin: auto 0;
    }

}
</style>