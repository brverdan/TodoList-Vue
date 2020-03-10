import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        tarefas: [
            {
                id: 1,
                tituloTarefa: '1',
                descricaoTarefa: '1',
                status: 'Baixa Prioridade',
                realizada: false
            },
            {
                id: 2,
                tituloTarefa: '2',
                descricaoTarefa: '2',
                status: 'Média Prioridade',
                realizada: false
            },
            {
                id: 3,
                tituloTarefa: '3',
                descricaoTarefa: '3',
                status: 'Alta Prioridade',
                realizada: false
            },
            {
                id: 4,
                tituloTarefa: '4',
                descricaoTarefa: '4',
                status: 'Baixa Prioridade',
                realizada: false
            },
            {
                id: 5,
                tituloTarefa: '5',
                descricaoTarefa: '5',
                status: 'Alta Prioridade',
                realizada: false
            },
            {
                id: 6,
                tituloTarefa: '6',
                descricaoTarefa: '6',
                status: 'Média Prioridade',
                realizada: false
            },
        ],
        tudo: [{}]
    },
    mutations: {
        novaTarefa: (state, tarefa) => state.tarefas.push(tarefa),
        deletarTarefa: (state, id) => (state.tarefas = state.tarefas.filter(t => t.id !== id))
    },
    getters: {
        listaTarefas: state => state.tarefas
    },
    actions: {
        adicionarTarefa({ commit }, tudo) {
            let id = this.state.tarefas.length + 1
            tudo.id = id
            commit("novaTarefa", tudo)
        },
        deletarTarefa({ commit }, index) {
            commit("deletarTarefa", index)
        },
    }
});

export default store;