<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmErr">
    <template #default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <br />
      <p>
        Please check all inputs and make sure you enter at least a few
        characters into each input field.
      </p>
    </template>
    <template #actions>
      <tab-button @click="confirmErr">Okay</tab-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" type="text" name="title" v-model="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          v-model="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" type="url" name="link" v-model="linkInput" />
      </div>
      <div>
        <tab-button type="submit">Add Resource</tab-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ["addResource"],
  data() {
    return {
      titleInput: "",
      descInput: "",
      linkInput: "",
      inputIsInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.titleInput;
      const enteredDesc = this.descInput;
      const enteredUrl = this.linkInput;

      if (
        enteredTitle.trim() === "" ||
        enteredDesc.trim() === "" ||
        enteredUrl.trim() === ""
      ) {
        this.inputIsInvalid = true;
        return;
      }
      this.addResource(enteredTitle, enteredDesc, enteredUrl);
    },
    confirmErr() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #a882c2;
  background-color: #f0e6eb;
}

.form-control {
  margin: 1rem 0;
}
</style>
