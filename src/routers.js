import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import {createRouter,createWebHistory} from 'vue-router'
import LogIn from './components/LogIn.vue';
import Add from './components/Add.vue';
import Update from './components/Update.vue';

const routes=[
{
    name:'Home',
    component: Home,
    path: '/'
},
{
    name:'SignUp',
    component: SignUp,
    path: '/sign-up'
},
{
    name:'LogIn',
    component: LogIn,
    path: '/log-in'
},
{
    name:'Add',
    component: Add,
    path: '/add-restaurant'
},
{
    name:'Update',
    component: Update,
    path: '/update-restaurant/:id'
}
];

const router = createRouter({
        history:createWebHistory(),
        routes
    }
);

export default router;