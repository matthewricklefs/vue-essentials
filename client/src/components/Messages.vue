<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-list dense>
        <v-toolbar dark>
          <v-toolbar-title>MESSAGES</v-toolbar-title>
        </v-toolbar>

        <v-list-item v-for="(message, i) in $store.state.messages" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="message"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch("getMessages");
  },
};
</script>
