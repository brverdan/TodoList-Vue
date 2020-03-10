<template>
  <v-container class="width-50">
    <v-app-bar color="deep-purple accent-4" dark>
      <v-toolbar-title>DETALHES DA TAREFA</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon :to="{name:'toDo'}">
        <v-icon>reply</v-icon>
      </v-btn>
    </v-app-bar>
    <v-card class="mx-auto" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Título da Tarefa: {{todoDetails.tituloTarefa}}</v-list-item-title>
          <v-card-text class="text">Descrição da tarefa: {{todoDetails.descricaoTarefa}}</v-card-text>
          <v-card-text class="text">Prioridade da tarefa: {{todoDetails.status}}</v-card-text>
          <v-card-text class="text">Está completa? {{estaRealizada()}} </v-card-text>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoDetails",

  data: () => ({}),
  methods: {
      estaRealizada() {
          if (this.todoDetails.realizada) {
              return "Sim"
          } else {
              return "Não"
          }
      }
  },
  computed: {
    ...mapGetters(["listaTarefas"]),
    todoDetails: function() {
        return this.listaTarefas[this.$route.params.id]
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
.text {
    font-size: 1.1em;
}
</style>