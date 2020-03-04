<template>
  <v-container class="height-100 d-flex align-center">
    <v-row class="justify-center">
      <v-col cols="7">
        <v-app-bar color="deep-purple accent-4" dark>
          <v-toolbar-title>Adicionar Tarefa</v-toolbar-title>
        </v-app-bar>
        <v-simple-table>
            <v-col cols="12" class="align-center">
              <v-text-field label="Título da Tarefa" type="email" required></v-text-field>
              <v-textarea auto-grow rows="1" rows-height="2" clearable label="Descrição da tarefa"></v-textarea>
              <v-select :items="prioridades" label="Prioridade" outlined></v-select>
              <v-btn big color="primary" :to="{ name: 'toDo'}">Salvar</v-btn>
            </v-col>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    prioridades: ["Alta Prioridade", "Média Prioridade", "Baixa Prioridade"]
  })
};
</script>
<style scoped>
.height-100 {
    height: 80%;
}
</style>
