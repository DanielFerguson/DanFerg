<template>
  <v-container grid-list-lg class="mt-12 px-5">
    <h3 class="display-2 mb-4 text-center font-weight-light">About Me</h3>

    <p>I'm a Software Engineer & Designer, working at the Center of eResearch and Digital Innovation.</p>
    <p>When I'm not working, I am studing at Swinburne University of Technology studing a Bachelor of Computer Science (Professional), majoring in Software Development.</p>
    <p>I have been developing solutions since 2011 when my passions for technology and helping people led me to discover Ruby (on Rails) and fed my interest in creating websites, initially a social media website. Since then, I have progressed to languages including C# (.NET, ASP, Xamarin), Web Stack, PHP, Dart Python (various libraries) and Low Level languages such as C and Assembly (RISC-V), amongst others.</p>

    <h4 class="display-1 mb-4 text-center font-weight-light">My Interests</h4>
    <p class="text-center">
      <span v-for="(interest, index) in interests" :key="index">{{ interest }} </span>
    </p>
  </v-container>
</template>

<script>
export default {
  props: {
    interests: {
      type: Array,
      required: true
    }
  }
};
</script>
