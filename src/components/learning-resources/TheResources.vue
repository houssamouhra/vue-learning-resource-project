<template>
  <base-card class="border-none">
    <div class="flex items-center justify-center">
      <tab-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
      >
        Stored Resources</tab-button
      >
      <tab-button
        @click="setSelectedTab('add-resources')"
        :mode="addResButtonMode"
        >Add Resources</tab-button
      >
    </div>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import AddResources from "./AddResources.vue";
import StoredResources from "./StoredResources.vue";
import TabButton from "../UI/TabButton.vue";
export default {
  components: { TabButton, StoredResources, AddResources },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The Official Vue.js Documentation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.com",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);
    },
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resources" ? null : "flat";
    },
  },
};
</script>
