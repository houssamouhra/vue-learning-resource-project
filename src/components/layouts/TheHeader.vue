<template>
  <header class="flex justify-center align-center text-5xl bg-[#640032]">
    <img
      src="/src/assets/imgs/logo-uwu.png"
      alt="Vue.js Logo"
      class="w-70 h-40 transition-transform duration-300 hover:scale-105 hover:rotate-10"
    />

    <h1 class="flex justify-center items-center -m-5 text-white">
      {{ title }}
    </h1>
  </header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
header {
  background: linear-gradient(to top, #fdeff9, #ec38bc, #9f2d66, #03001e);
}
</style>
