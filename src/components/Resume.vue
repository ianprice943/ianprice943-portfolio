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
                    <div class="experience-name">
                        Sogeti USA
                    </div>
                    <div class="experience-title">
                        Consultant
                    </div>
                    <div class="experience-time">
                        June 2019 - Present
                    </div>
                    <div class="experience-description">
                        <span>As a consultant at Sogeti, I've had the pleasure of working for several
                        brands on their front end.</span>
                        <ul>
                           <li>
                                <a href="https://www.maurices.com">maurices</a>
                                I have been both an A/B tester and a front end developer for maurices, using
                                stacks including JavaScript(ES6), HTML5, CSS3, and SCSS.
                           </li> 
                           <li>
                               <a href="">Abbott Nutrition</a>
                           </li>
                           <li>
                               <a href="https://www.shopjustice.com/">Justice</a>

                           </li>
                           <li>
                                <a href="https://dressbarn.com/">Dressbarn</a>
                                Before their wind down I was a front end developer using a JavaScript(ES5), 
                                HTML5, and CSS3 stack.
                           </li>
                        </ul>
                    </div>
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
//import resume from '../../public/resume.json';
export default {
    name: 'Resume',
    methods: {
        populateExperience: function () {

        },
        populateEducation: function () {

        },
        populateSkills: function() {

        }
    }
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
.experience-name {

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
.education-name {

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
.skill-name {

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