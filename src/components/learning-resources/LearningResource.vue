<template>
  <li>
    <base-card>
      <header class="flex justify-between items-center">
        <h3 class="text-[1.25rem] mx-[0] my-2 font-semibold">{{ title }}</h3>
        <delete-button @click="deleteResource(id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </delete-button>
      </header>
      <p class="mx-[0] my-2">{{ description }}</p>
      <nav>
        <a
          class="no-underline text-[#ce5c00] active:text-[#c89300] hover:text-[#c89300]"
          :href="link"
          target="_blank"
          >View Resource</a
        >
      </nav>
    </base-card>
  </li>
</template>

<script>
import DeleteButton from "../UI/DeleteButton.vue";
export default {
  components: { DeleteButton },
  props: ["id", "title", "description", "link"],
  inject: ["deleteResource"],
};
</script>
