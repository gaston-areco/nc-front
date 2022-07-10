<template>
  <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="10"
      class="elevation-2 d-flex flex-column justify-space-between"
  ></v-data-table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    headers: {  type: Array, default: () => [] },
    items: { type: Array, default: () => [] }
  },
};
</script>
