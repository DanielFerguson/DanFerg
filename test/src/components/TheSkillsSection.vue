<template>
  <v-container grid-list-lg class="mt-12 px-5">
    <h3 class="display-2 mb-4 text-center font-weight-light">My Skills</h3>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="(item, index) in tabs" :key="index">{{ item.title }}</v-tab>
    </v-tabs>

    <v-container grid-list-md>
      <v-layout row wrap align-center class="text-center">
        <v-flex v-for="(tab, index) in tabs[tab]" :key="index" xs12 md4>
          <v-item>{{ tab }}</v-item>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tab: null
    };
  }
};
</script>