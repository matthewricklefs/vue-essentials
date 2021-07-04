<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn flat to="/">Messages</v-btn>
      <v-btn flat to="/NewMessage">New Message</v-btn>
      <v-spacer />
      <v-btn flat>Login</v-btn>
    </v-app-bar>

    <v-main>
      <br />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
