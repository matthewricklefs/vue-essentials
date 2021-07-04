<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>

    <v-main>
      <br />
      <NewMessage />
      <br />
      <Messages />
    </v-main>
  </v-app>
</template>

<script>
import NewMessage from "./components/NewMessage";
import Messages from "./components/Messages";

export default {
  name: "App",

  components: {
    NewMessage,
    Messages,
  },

  data: () => ({
    //
  }),
};
</script>
