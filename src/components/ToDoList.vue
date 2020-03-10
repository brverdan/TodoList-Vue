<template>
  <v-container class="width-50">
    <v-app-bar color="deep-purple accent-4" dark>
      <v-toolbar-title>TAREFAS</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon :to="{name:'addToDo'}">
        <v-icon>add</v-icon>
      </v-btn>
    </v-app-bar>
    <v-simple-table>
      <thead>
        <tr>
          <th>Tarefas:</th>
          <th class="status">Status:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tarefa, index) in listaTarefas" :key="index">
          <td>
            <v-row>
              <v-col>
                <v-expansion-panels>
                  <v-expansion-panel
                    :class="tarefa.realizada == true ? 'success' : tipoDePrioridade(tarefa.status)"
                  >
                    <v-expansion-panel-header id="tarefa" disable-icon-rotate>
                      {{tarefa.tituloTarefa}}
                      <template v-if="tarefa.realizada" v-slot:actions>
                        <v-icon>mdi-check</v-icon>
                      </template>
                      <template v-else-if="tarefa.status == 'Alta Prioridade'" v-slot:actions>
                        <v-icon>mdi-alert-circle</v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>{{tarefa.descricaoTarefa}}</v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </td>
          <td>
            <v-row>
              <v-col class="d-flex align-center"> 
                <v-checkbox v-model="tarefa.realizada" class="mx-2" label="Realizada"></v-checkbox>
                <v-btn icon @click="deletarTarefa(tarefa.id)">
                   <v-icon>delete</v-icon>
                </v-btn>
                <v-btn icon :to="{ name:'toDoDetails', params: {id: index}}">
                  <v-icon>details</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "TodoList",

  data: () => ({}),
  methods: {
    tipoDePrioridade: function(status) {
      if (status == "Alta Prioridade") {
        return "error";
      } else if (status == "Média Prioridade") {
        return "warning";
      } else {
        return "";
      }
    },
    ...mapActions(["deletarTarefa", "editarTarefa"]),
    editarTarefa(tarefa) {
      const up = {
        id: tarefa.id,
        tituloTarefa: tarefa.tituloTarefa,
        descricaoTarefa: tarefa.descricaoTarefa,
        realizada: true
      };
      this.editarTarefa(up);
    }
  },
  computed: {
    ...mapState({
      tarefasState: store => store.state.tarefas
    }),
    ...mapGetters(["listaTarefas"])
  }
};
</script>

<style scoped>
.width {
  width: 10%;
}
.status {
  width: 10%;
}
</style>
