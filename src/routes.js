import Home from './components/Home.vue';
import Resume from './components/Resume.vue';
import Portfolio from './components/Portfolio.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Resume',
        name: 'Resume',
        component: Resume
    },
    {
        path: '/Portfolio',
        name: 'Portfolio',
        component: Portfolio
    }
];

export default routes;