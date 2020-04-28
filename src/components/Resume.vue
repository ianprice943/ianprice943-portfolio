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
                        <a href="https://www.us.sogeti.com/">Sogeti USA</a>
                    </div>
                    <div class="experience-title">
                        Consultant
                    </div>
                    <div class="experience-time">
                        June 2019 - Present
                    </div>
                    <div class="experience-description">
                        <span>As a consultant at Sogeti, I've had the pleasure of working for several
                        brands on their front end:</span>
                        <ul>
                           <li>
                                <a href="https://www.maurices.com">maurices</a>: 
                                This my current client. I am both an A/B tester and a front end developer for maurices, using
                                stacks including JavaScript(ES5/6), HTML5, CSS3, and SCSS.
                           </li> 
                           <li>
                                <a href="https://abbottnutrition.com/">Abbott Nutrition</a>: 
                                At Abbott I helped update WebNova, a formula calculation application. The update included a 
                                C# .NET upgrade from 3.5 to 4.7.1, while also updating their front end for IE11 compatibility.
                           </li>
                           <li>
                                <a href="https://www.shopjustice.com/">Justice</a>: 
                                At Justice I worked on the homepage and banners using HTML5, CSS3, and JavaScript(ES5).
                           </li>
                           <li>
                                <a href="https://dressbarn.com/">Dressbarn</a>
                                Before their wind down I was a front end developer using a JavaScript(ES5), 
                                HTML5, and CSS3 stack.
                           </li>
                        </ul>
                    </div>
                </div>
                <div class="experience">
                    <div class="experience-name">
                        <a href="https://www.oclc.org/en/home.html">OCLC</a>
                    </div>
                    <div class="experience-title">
                        Network Intern
                    </div>
                    <div class="experience-time">
                        May 2018 - August 2018
                    </div>
                    <div class="experience-description">
                        <span>As a Network Intern for OCLC my responsibilities included:</span>
                        <ul>
                            <li>
                                Mapping the topology of the network across multiple sites.
                            </li>
                            <li>
                                Conducting VPC audits.
                            </li>
                            <li>
                                Configuring Cisco IOS & Meraki network switches. 
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="experience">
                    <div class="experience-name">
                        <a href="https://www.mapfrestadium.com/">MAPFRE Stadium</a>
                    </div>
                    <div class="experience-title">
                        IT Intern
                    </div>
                    <div class="experience-time">
                        June 2017 - August 2017
                    </div>
                    <div class="experience-description">
                        At MAPFRE Stadium I managed virtual machines and provided technical support for over 90 employees.
                    </div>
                </div>
                <div class="experience">
                    <div class="experience-name">
                        <a href="https://www.revolutiongroup.com/">Revolution Group</a>
                    </div>
                    <div class="experience-title">
                        IT Intern
                    </div>
                    <div class="experience-time">
                        May 2016 - August 2016
                    </div>
                    <div class="experience-description">
                        <span>At Revolution group I had the following responsibilities:</span>
                        <ul>
                            <li>
                                Providing technical support for over 70 companies in and around Ohio.
                            </li>
                            <li>
                                Remotely updating software.
                            </li>
                            <li>
                                Setting up hardware for clients.
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
                    <div class="education-name">
                        <a href="https://miamioh.edu/index.html">Miami University</a>
                    </div>
                    <div class="education-title">
                        Undergraduate
                    </div>
                    <div class="education-earned">
                        Bachelor of Science in Computer Science, 3.52 GPA
                    </div>
                    <div class="education-time">
                        August 2015 - May 2019
                    </div>
                </div>
            </div> 
            <div id="skills-container">
                <div class="section-title">
                    Skills
                </div>
                <ul>
                    <li class="skill">
                        JavaScript (ES5/6) - Intermediate
                    </li>
                    <li class="skill">
                        HTML5 - Intermediate   
                    </li>
                    <li class="skill">
                        CSS3 - Intermediate   
                    </li>
                    <li class="skill">
                        NodeJS/NPM - Novice   
                    </li>
                    <li class="skill">
                        VueJS - Novice
                    </li>
                    <li class="skill">
                        SCSS - Novice   
                    </li>
                    <li class="skill">
                        C# - Novice
                    </li>
                    <li class="skill">
                        C/C++ - Novice
                    </li>
                    <li class="skill">
                        Java - Novice
                    </li>
                    <li class="skill">
                        MySQL/MariaDB/MS SQL Server - Novice
                    </li>
                    <li class="skill">
                        VMWare/Virtual Box - Novice
                    </li>
                    <li class="skill">
                        Comfortability in MacOS, Linux(Arch/Ubuntu), and Windows
                    </li>
                    <li class="skill">
                        Microsoft Office Suite
                    </li>
                    <li class="skill">
                        Microsoft Visio
                    </li>
                </ul>
            </div> 
        </div>
    </div>
</template>

<script>
//import resume from '../../public/resume.json';
export default {
    name: 'Resume',
    methods: {
        
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #2c3e50;
}
a:hover {
    text-decoration: underline;
}
a:visited {
    text-decoration: none;
}
ul {
    list-style: circle;
}
li {
    margin: 0 0 .5em;
}
li > a {
    font-size: 18px;
    font-weight: 700;
}
#resume-title {
    font-size: 36px;
}
#resume-container {
    font-size: 16px;
    display: flex;
    justify-content: space-evenly;
    margin: 1em 0 0;
}
.section-title {
    font-size: 32px;
    color: #13C8ED;
    margin: 0 0 .5em;
}
#experience-container {
    display: flex;
    flex-flow: column;
    text-align: left;
    margin: 0 0 1em;
    flex-basis: 32%;
}
.experience {
    display: flex;
    flex-flow: column;
    margin: 0 0 1em;
}
.experience-name {
    font-size: 24px;
}
.experience-title {
    font-size: 20px;
}
.experience-time {
    font-size: 20px;
}
.experience-description {
    
}

#education-container {
    display: flex;
    flex-flow: column;
    text-align: left;
    margin: 0 0 1em;
    flex-basis: 32%;
}
.education {
    display: flex;
    flex-flow: column;
    margin: 0 0 1em;
}
.education-name {
    font-size: 28px;
}
.education-title {
    font-size: 24px;
}
.education-earned {
    font-size: 18px;
}
.education-time {

}
#skills-container {
    display: flex;
    flex-flow: column;
    text-align: left;
    margin: 0 0 1em;
    flex-basis: 32%;
}
.skill {
    font-size: 20px;
}

@media only screen and (max-width: 1023px) {

    #resume-container {
        flex-flow: column;
    }   
    .section-title {
        text-align: center;
    }
}
</style>