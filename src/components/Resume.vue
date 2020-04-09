<template>
    <div id="resume">
        <div id="resume-title">
            Resume
        </div>
        <div id="resume-container">
            <div id="experience-container">
                <div class="section-title">
                    Experience
                </div>
                <div class="experience">

                </div>
            </div>
            <div id="education-container">
                <div class="section-title">
                    Education
                </div>
                <div class="education">

                </div>
            </div> 
            <div id="skills-container">
                <div class="section-title">
                    Skills
                </div>
                <div class="skills">

                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'Resume'
}
</script>

<style scoped>
#resume-title {
    font-size: 24px;
    margin: 1em 0;
}
#resume-container {
    font-size: 16px;
    display: flex;
    justify-content: space-around;
}
.section-title {
    font-size: 20px;
    color: #13C8ED;
}
#experience-container {
    display: flex;
    flex-flow: column;
    text-align: left;
    margin: 0 0 1em;
}
.experience {
    display: flex;
    flex-flow: column;
}
.experience-title {

}
.experience-time {

}
.experience-description {

}
#education-container {
    display: flex;
    flex-flow: column;
    text-align: left;
    margin: 0 0 1em;
}
.education {

}
.education-title {

}
.education-earned {

}
.education-time {

}
#skills-container {
    display: flex;
    flex-flow: column;
    text-align: left;
    margin: 0 0 1em;
}
.skills {

}
.skill-title {

}
.skill-competancy {

}

@media only screen and (max-width: 768px) {

    #resume-container {
        flex-flow: column;
    }   
    .section-title {
        text-align: center;
    }
}
</style>