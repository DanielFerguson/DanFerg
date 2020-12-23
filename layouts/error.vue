<template>
  <div class="h-screen w-screen flex flex-col items-center justify-center">
    <h1 class="text-5xl font-bold leading-10 mb-8">
      <span class="bg-gradient-to-r font-black from-teal-300 to-purple-300 px-2"
        >Uh oh! 😬</span
      >
    </h1>
    <h2 class="text-4xl font-bold">This is embarrassing...</h2>
    <p class="text-center text-lg">
      We checked again and again, <br class="sm:hidden" />
      this page just doesn't seem to exist!
    </p>

    <NuxtLink
      to="/"
      class="inline-block px-6 py-4 mt-8 text-2xl font-bold text-white bg-gray-900 rounded-full hover:shadow-lg transition-shadow duration-75 ease-in-out"
    >
      Try again? ❤️
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error" // you can set a custom layout for the error page
};
</script>
