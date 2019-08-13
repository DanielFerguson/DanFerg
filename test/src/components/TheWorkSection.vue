<template>
  <v-container grid-list-lg class="mt-12 px-5">
    <h3 class="display-2 mb-5 text-center font-weight-light">My Work</h3>

    <v-item-group>
      <v-layout wrap>
        <v-flex v-for="(project, index) in projects" :key="index" xs12 sm6 md3>
          <v-item>
            <v-card class="d-flex align-center" ripple height="200">
                    <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                      <v-card-title class="align-end fill-height">{{ project.title }}</v-card-title>
                    </v-img>
            </v-card>
          </v-item>
        </v-flex>
      </v-layout>
    </v-item-group>
  </v-container>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
};
</script>