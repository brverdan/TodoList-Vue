import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        tarefas: []
    },
    mutations: {
        getTarefas: (state, tarefas) => state.tarefas = tarefas,
        novaTarefa: (state, tarefa) => state.tarefas.push(tarefa),
        deletarTarefa: (state, id) => (state.tarefas = state.tarefas.filter(t => t.id !== id)),
    },
    getters: {
        allTarefas: state => state.tarefas,
        detalharTarefa: (state) => (id) => (state.tarefas = state.tarefas.filter(t => t.id == id))[0]
    },                     
    actions: {
        adicionarTarefa({ commit }, tudo) {
            let id = this.state.tarefas[this.state.tarefas.length - 1].id + 1
            tudo.id = id
            commit("novaTarefa", tudo)
        },
        deletarTarefa({ commit }, index) {
            commit("deletarTarefa", index)
        },
        getTarefas: async ({ commit }) => {
            await axios.get("./tarefas.json").then((response) => {
                commit("getTarefas", response.data.tarefas);
            });
        }
    }
});

export default store;