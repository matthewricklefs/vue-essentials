<template>
  <v-app>
    <v-app-bar app color="primary"> </v-app-bar>

    <v-main>
      <NewMessage />
      <br />
      <Messages />
    </v-main>
  </v-app>
</template>

<script>
import Messages from "./components/Messages";
import NewMessage from "./components/NewMessage";

export default {
  name: "App",

  components: {
    Messages,
    NewMessage,
  },

  data: () => ({
    //
  }),
};
</script>
