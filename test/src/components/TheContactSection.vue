<template>
  <v-container grid-list-lg class="mt-12 px-5">
    <h3 class="display-2 mb-4 text-center font-weight-light">Contact Me</h3>

    <p class="text-center">
      Got a killer idea? Want to work with me?
      <br />Drop us a line!
    </p>

    <h4 class="display-1 text-center font-weight-light">hi@danferg.com</h4>

    <p class="mt-5 text-center">Or find me elsewhere</p>
    <v-item-group>
      <v-container grid-list-md>
        <v-layout row wrap align-center class="text-center">
          <v-flex v-for="link in links" :key="link.alt" xs12 md4>
            <v-item>
              <a :href="link.linkto" target="_blank">
                <img :src="link.img" :alt="link.alt" />
              </a>
            </v-item>
          </v-flex>
        </v-layout>
      </v-container>
    </v-item-group>
  </v-container>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  }
};
</script>
