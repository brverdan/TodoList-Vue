import Vue from 'vue';
import Router from 'vue-router';

//pages
import Home from '@/components/Home.vue'
import ToDoList from '@/components/ToDoList.vue'

Vue.use(Router);

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'toDo',
        path: '/ToDo',
        component: ToDoList
    }
]

const router = new Router({
    mode: 'history',
    routes
});
export default router;