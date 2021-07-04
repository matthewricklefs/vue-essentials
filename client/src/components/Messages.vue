<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-list dense>
        <v-toolbar dark>
          <v-toolbar-title>MESSAGES</v-toolbar-title>
        </v-toolbar>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(message, i) in messages" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="message"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messages: ["hello", "hi", "its working"],
    };
  },
  async created() {
    this.messages = await axios.get("http://localhost:3000/messages".data);
  },
};
</script>
