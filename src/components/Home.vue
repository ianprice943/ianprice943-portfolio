<template>
    <div id="home">
        <h1 id="home-title">
            Home
        </h1>
        <div id="about-me">
            <div class="column center">
                <img src="~@/assets/LinkedIn.png" alt="Photo of Ian">   
            </div>
            <div class="column">
                <div>
                    Ian is a 23 year old web developer based in Columbus, Ohio. He holds a
                    Bachelor of Science in Computer Science from Miami University, and graduated in 2019.
                </div>
                <div>
                    Ian's focus is on front-end web development, with over a year of E-Commerce experience. 
                    He takes designs and brings them to life on the web while ensuring responsiveness and 
                    cross browser compatibility.
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
    font-weight: 400;
    margin: 0;
}
#about-me {
    font-size: 28px;
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
    width: 50%;
    margin: 0 auto;
}
.column>div {
    margin: 0 3em 1em 0;
}
@media only screen and (min-width: 768px) and (max-width: 1024px){
    .column>img {
        width: 90%;
    }
    .column>div {
        margin: 0 0 1em;
    }
}
@media only screen and (max-width: 767px) {
    #about-me {
        flex-flow: column;
    }
    .column {
        width: 100%;
        margin: 0 0 1em;
    }
    .column:last-of-type {
        margin: 0 1em;
    }
    .column>img {
        width: 80%;
    }
    .column>div {
        font-size: 22px;
    }
}
</style>