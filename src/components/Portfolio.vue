<template>
    <div id="portfolio">
        <div id="portfolio-title">
            Portfolio
        </div>
        <div id="portfolio-container">
            <div id="github">
                <div>
                    To see what side projects Ian is working on, check out his GitHub
                </div>
                <a href="https://github.com/ianprice943">
                    <img src="@/assets/GitHub_Logo.png" alt="GitHub Logo">
                </a>
            </div>
            <div id="pmmddx">
                <div>
                    Pokemon Mystery Dungeon Rescue Team DX Starters
                </div>
                <a href="https://pmdrtdx-vuejs.herokuapp.com/">
                    <img src="@/assets/PMDRTDXLogo.png" alt="Pokemon Mystery Dungeon Rescue Team DX Logo">
                </a>
            </div>
        </div>
    </div>
    <!--TODO Add pokemon site, add github-->
</template>

<script>
export default {
    name: 'Portfolio'
}
</script>

<style scoped>
#portfolio-title {
    font-size: 36px;
}
#portfolio-container {
    margin: 1em 0;
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
}
#portfolio-container > div {
    width: 48%;
}
#portfolio-container > div> a > img {
    width: 100%;
}

</style>