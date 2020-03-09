import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        tarefas: [
            {
                tituloTarefa: '1',
                descricaoTarefa: '1',
                status: 'Baixa Prioridade',
                realizada: false
            },
            {
                tituloTarefa: '2',
                descricaoTarefa: '2',
                status: 'Média Prioridade',
                realizada: false
            },{
                tituloTarefa: '3',
                descricaoTarefa: '3',
                status: 'Alta Prioridade',
                realizada: false
            },{
                tituloTarefa: '4',
                descricaoTarefa: '4',
                status: 'Baixa Prioridade',
                realizada: false
            },{
                tituloTarefa: '5',
                descricaoTarefa: '5',
                status: 'Alta Prioridade',
                realizada: false
            },{
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
        deletarTarefa: (state, id) => state.tarefas.splice(id)
    },
    getters: {
        listaTarefas: state => state.tarefas
    },
    actions: {
        adicionarTarefa({ commit }, tudo) {
            commit("novaTarefa", tudo)
        },
        deletarTarefa({commit}, id) {
            commit("deletarTarefa", id)
        }
    }
});

export default store;