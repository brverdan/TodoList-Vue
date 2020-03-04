import Vue from 'vue';
import Router from 'vue-router';

//pages
import Home from '@/components/Home.vue'
import Cadastrar from '@/components/Cadastrar.vue'
import ToDoList from '@/components/ToDoList.vue'
import AddToDo from '@/components/AddToDo.vue'

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
    },
    {
        name: 'addToDo',
        path: '/AddToDo',
        component: AddToDo
    },
    {
        name: 'cadastrar',
        path: '/Cadastrar',
        component: Cadastrar
    }

]

const router = new Router({
    mode: 'history',
    routes
});
export default router;