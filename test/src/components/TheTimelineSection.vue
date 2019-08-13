<template>
  <v-container grid-list-lg class="mt-12 px-5">
    <h3 class="display-2 mb-4 text-center font-weight-light">What I've Been Up To</h3>

    <v-timeline>
      <v-timeline-item v-for="(event, index) in events" :key="index" :icon="event.icon" fill-dot>
        <span slot="opposite">{{ event.opposite }}</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{ event.title }}</v-card-title>
          <v-card-text v-if="event.text">{{ event.text }}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      required: true
    }
  }
};
</script>
