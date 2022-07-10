<template>
    <v-snackbar
        v-model="active"
        :color="color"
    >
      {{ title }}

      <template v-slot:action="{ attrs }">
        <v-btn
            text
            v-bind="attrs"
            @click="closeSnackbar"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AlertSnackbar',
  computed: {
    active() {
      return !!this.$store.state.commons.snackbar
    },
    title() {
      return this.$store.getters['commons/getProp']('snackbar.title', this.$store.state.commons)
    },
    color() {
      return this.$store.getters['commons/getProp']('snackbar.color', this.$store.state.commons)
    },
  },
  watch: {
    active(value) {
      if (value) {
        setTimeout(() => {
          this.closeSnackbar();
        }, 2000);
      }
    },
  },
  methods: {
    ...mapActions({
      closeSnackbar: 'commons/closeSnackbar'
    })
  }
}
</script>

<style lang="sass" scoped>

</style>
