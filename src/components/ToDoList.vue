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
          <th>
            Tarefas:
          </th>
          <th class="status">Status:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tarefa, index) in tarefas" :key="index">
          <td>
            <v-row>
              <v-col>
                <v-expansion-panels>
                  <v-expansion-panel :class="tarefa.realizada == true ? 'success' : tipoDePrioridade(tarefa.status)">
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
              <v-col>
                <v-checkbox v-model="tarefa.realizada" class="mx-2" label="Success"></v-checkbox>
              </v-col>
            </v-row>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <!-- <v-expansion-panels>
      <v-expansion-panel class="success">
        <v-expansion-panel-header disable-icon-rotate>
          Item
          <template v-slot:actions>
            <v-icon>mdi-check</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="error">
        <v-expansion-panel-header disable-icon-rotate>
          Item
          <template v-slot:actions>
            <v-icon>mdi-alert-circle</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="warning">
        <v-expansion-panel-header disable-icon-rotate>
          Item
          <template v-slot:actions>
            <v-icon>mdi-alert-circle</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels> -->
  </v-container>
</template>

<script>
export default {
  name: "TodoList",

  data: () => ({
    success: false,
    tarefas: [
      {
        tituloTarefa: "aaaaaa",
        descricaoTarefa: "sasasasa",
        status: "Baixa Prioridade",
        realizada: false
      },
      {
        tituloTarefa: "bbbbbbb",
        descricaoTarefa: "sasasasa",
        status: "Média Prioridade",
        realizada: false
      },
      {
        tituloTarefa: "bbbbbbb",
        descricaoTarefa: "sasasasa",
        status: "Alta Prioridade",
        realizada: false
      },
    ]
  }),
  methods: {
    tipoDePrioridade: function(status) {
      if (status == "Alta Prioridade") {
        return "error"
      } 
      else if (status == "Média Prioridade") {
        return "warning"
      }
      else {
        return ""
      }
    }
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
