<template>
  <div class="container-fluid">
    <vue-typed-js
      :strings="descriptions"
      :typeSpeed="typeSpeed"
      :backSpeed="backSpeed"
      :startDelay="startDelay"
      :backDelay="backDelay"
    >
      <h1>
        I'm a
        <span class="typing"></span>
      </h1>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descriptions: ["Developer", "Designer", "Engineer", "Entrepreneur"],
      typeSpeed: 50,
      backSpeed: 25,
      startDelay: 1200,
      backDelay: 1500
    };
  }
};
</script>

<style lang="scss" scoped></style>
