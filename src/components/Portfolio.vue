<template>
    <div id="portfolio">
        <h1 id="portfolio-title">
            Portfolio
        </h1>
        <div id="portfolio-container">
            <div id="github">
                <div>
                    To see what side projects Ian is working on, check out his GitHub
                </div>
                <a href="https://github.com/ianprice943" aria-label="Ian's GitHub">
                    <img src="~@/assets/GitHub_Logo_White.png" alt="GitHub Logo">
                </a>
            </div>
            <div id="pmmddx">
                <div>
                    Pokemon Mystery Dungeon Rescue Team DX Starters
                </div>
                <div>
                    A small site developed to learn Vue.js
                </div>
                <a href="https://pmdrtdx-vuejs.herokuapp.com/" aria-label="A Pokemon Game Site">
                    <img src="~@/assets/PMDRTDXLogo.png" alt="Pokemon Mystery Dungeon Rescue Team DX Logo">
                </a>
            </div>
            <div id="wkmediation">
                <div>
                    William Kampf Mediation
                </div>
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
#portfolio-container > div {
    width: 48%;
}
#portfolio-container > div> a > img {
    width: 100%;
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