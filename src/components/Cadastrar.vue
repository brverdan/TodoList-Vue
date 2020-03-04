<template>
  <v-container class="height-100 d-flex align-center">
    <v-row class="d-flex justify-center">
      <v-col cols="3">
          <v-app-bar color="deep-purple accent-4" dark>
          <v-toolbar-title>Novo Usuário</v-toolbar-title>
        </v-app-bar>
        <v-col cols="12" class="form">
          <v-form>
            <v-text-field label="E-mail" required></v-text-field>
            <v-text-field label="Senha" required type="password"></v-text-field>
            <v-text-field label="Confirmar senha" required type="password"></v-text-field>
            <v-row class="justify-space-around">
              <v-btn color="secondary" class="btn" dark :to="{ name: 'home' }">Cadastrar</v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({})
};
</script>
<style scoped>
.btn {
  width: 40%;
  margin-left: 1%;
}
.height-100 {
  height: 100%;
}
.form {
  background-color: white;
}
h2 {
  text-align: center;
  color: white;
}
</style>
