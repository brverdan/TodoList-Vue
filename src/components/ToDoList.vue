<template>
  <v-container class="width-50">
    <v-app-bar color="deep-purple accent-4" dark>
      <v-toolbar-title>TAREFAS</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon :to="{ name:'addToDo' }">
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
        <tr v-for="t in allTarefas" :key="t.id">
          <td>
            <v-row>
              <v-col>
                <v-expansion-panels>
                  <v-expansion-panel
                    :class="t.realizada == true ? 'success' : tipoDePrioridade(t.status)"
                  >
                    <v-expansion-panel-header id="tarefa" disable-icon-rotate>
                      {{ t.tituloTarefa }}
                      <template v-if="t.realizada" v-slot:actions>
                        <v-icon>mdi-check</v-icon>
                      </template>
                      <template v-else-if="t.status == 'Alta Prioridade'" v-slot:actions>
                        <v-icon>mdi-alert-circle</v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>{{ t.descricaoTarefa }}</v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </td>
          <td>
            <v-row>
              <v-col class="d-flex align-center">
                <v-checkbox v-model="t.realizada" class="mx-2" label="Realizada"></v-checkbox>
                <v-btn icon @click="deletarTarefa(t.id)">
                  <v-icon>delete</v-icon>
                </v-btn>
                <v-btn icon :to="{ name:'toDoDetails', params: {id: t.id}}">
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
import { mapGetters, mapActions } from "vuex";

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
    ...mapActions(["deletarTarefa", "getTarefas"]),
  },
  computed: {
    ...mapGetters(["allTarefas"])
  },
  created() {
     this.getTarefas();
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
