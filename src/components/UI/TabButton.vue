<template>
  <button
    :type="type"
    :class="mode"
    class="tab-btn px-6 py-3 text-lg rounded-xl cursor-pointer"
  >
    <slot></slot>
  </button>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["type", "mode"],
};
</script>

<style scoped>
.flat {
  background-color: transparent;
  color: #1d1d1d;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #fbcfe8;
}
</style>
