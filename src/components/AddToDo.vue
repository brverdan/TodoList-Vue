<template>
  <v-container class="height-100 d-flex align-center">
    <v-row class="justify-center">
      <v-col cols="7">
        <v-app-bar color="deep-purple accent-4" dark>
          <v-toolbar-title>Adicionar Tarefa</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn icon :to="{name:'toDo'}">
            <v-icon>reply</v-icon>
          </v-btn>
        </v-app-bar>
        <v-simple-table>
          <v-col cols="12" class="align-center">
            <v-text-field label="Título da Tarefa" type="text" v-model="tituloTarefa" required></v-text-field>
            <v-textarea
              auto-grow
              rows="1"
              rows-height="2"
              clearable
              label="Descrição da tarefa"
              v-model="descricaoTarefa"
              required
            ></v-textarea>
            <v-select :items="prioridades" label="Prioridade" outlined required v-model="status"></v-select>
            <v-btn big color="primary" @click="submit()">Salvar</v-btn>
          </v-col>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddToDo",

  data: () => ({
    tituloTarefa: "",
    descricaoTarefa: "",
    prioridades: ["Alta Prioridade", "Média Prioridade", "Baixa Prioridade"],
    status: ""
  }),
  methods: {
    ...mapActions(["adicionarTarefa"]),
    submit() {
      let tudo = {
        id: 45,
        tituloTarefa: this.tituloTarefa,
        descricaoTarefa: this.descricaoTarefa,
        status: this.status
      };
      if (tudo.tituloTarefa && tudo.descricaoTarefa && tudo.status !== "") {
        this.adicionarTarefa(tudo);
        this.$router.replace("/");
      } else {
        alert("Preencha todos os dados.");
      }
    }
  }
};
</script>
<style scoped>
.height-100 {
  height: 80%;
}
</style>
