<template>
  <v-container>
    <v-app-bar
      app
      color="primary lighten-4"
      flat
    >
      <v-tabs
        centered
        class="ml-n9"
        color="primary darken-2"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer
      app
      color="primary lighten-4"
    >
      <v-row class="px-10">
        <v-col cols="auto" class="mr-auto">
          Copyright &copy; 2022 Gaston Areco
        </v-col>
        <v-col cols="auto">
          All rights reserved
        </v-col>
      </v-row>
    </v-footer>

    <AlertSnackbar></AlertSnackbar>
  </v-container>
</template>

<script>
import AlertSnackbar from '@/components/AlertSnackbar';

export default {
  components: {
    AlertSnackbar
  },
  data() {
    return {
      links: [
        'Home',
        'Other page'
      ]
    };
  }
};
</script>
