<template>
  <div class="flex justify-between py-8 px-16">
    <nuxt-link to="/"
      ><h2 class="text-2xl font-bold">Hey! I’m Dan 👋</h2></nuxt-link
    >
    <div class="flex space-x-8 items-center">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link class="hidden sm:block" to="/articles">Articles</nuxt-link>
      <nuxt-link class="hidden sm:block" to="/#projects">Projects</nuxt-link>
      <nuxt-link class="hidden sm:block" to="/#contact">Contact</nuxt-link>
    </div>
  </div>
</template>
