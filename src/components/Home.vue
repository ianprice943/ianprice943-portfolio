<template>
    <div id="home">
        <div id="home-title">
            Home
        </div>
        <div id="about-me">
            <div class="column center">
                <img src="~@/assets/LinkedIn.png" alt="Photo of Ian">   
            </div>
            <div class="column">
                <div>
                    My name is Ian Price, and I'm a 22 year old developer based in Columbus, Ohio. I hold a
                    Bachelor of Science in Computer Science from Miami University, and graduated in 2019.
                </div>
                <div>
                    I am a front-end focused web developer with almost a year of E-Commerce experience. 
                    Making sure every page I touch is both responsive and cross browser compatible is a 
                    fun and rewarding challenge that I tackle every day.
                </div>
            </div> 
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
    text-align: left;
}
#about-me {
    font-size: 16px;
    margin: 1em 0;
    text-align: left;
    display: flex;
    justify-content: space-between;
}
.column {
    width: 45%;
    margin: 0 1em;
}
.column.center {
    text-align: center;
}
.column>img {
    width: 80%;
    margin: 0 auto;
}
.column>div {
    margin: 0 3em 1em 0;
}

@media only screen and (max-width: 767px) {
    #about-me {
        flex-flow: column;
    }
    .column {
        width: 100%;
    }
    .column>div {
        margin: 0 0 1em;
    }
    .column>div:last-of-type {
        margin: 0 1em;
    }

}
</style>