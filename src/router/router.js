import Vue from 'vue';
import Router from 'vue-router';

//pages
import ToDoList from '@/components/ToDoList.vue'
import AddToDo from '@/components/AddToDo.vue'
import ToDoDetails from '@/components/ToDoDetails.vue'

Vue.use(Router);

const routes = [
    {
        name: 'toDo',
        path: '/',
        component: ToDoList
    },
    {
        name: 'toDoDetails',
        path: '/ToDo/:id',
        component: ToDoDetails,
    },
    {
        name: 'addToDo',
        path: '/AddToDo',
        component: AddToDo
    }
]

const router = new Router({
    mode: 'history',
    routes
});
export default router;