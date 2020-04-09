import Home from './components/Home.vue';
import Resume from './components/Resume.vue';
import Portfolio from './components/Portfolio.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Ian Price - Home'
        }
    },
    {
        path: '/Resume',
        name: 'Resume',
        component: Resume,
        meta: {
            title: 'Ian Price - Resume'
        }
    },
    {
        path: '/Portfolio',
        name: 'Portfolio',
        component: Portfolio,
        meta: {
            title: 'Ian Price - Portfolio'
        }
    }
];

export default routes;