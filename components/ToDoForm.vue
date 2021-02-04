<template>
  <div class="container">
    <div class="app__title">
      <h1 class="title">{{ title }}</h1>
    </div>
        
    <div class="container__inner">
        <form v-on:submit.prevent="onSubmit">
            <input
                type="text"
                id="todo-input"
                name="todo"
                autocomplete="off"
                v-model.lazy.trim="labelName"
            />
            <button class="btn--submit" type="submit">{{ submitBtn }}</button>
            <button class="btn--cancel"><NuxtLink to="/">Cancel</NuxtLink></button>
        </form>
    </div>
  </div>
</template>

<script>
import uniqueId from "lodash.uniqueid";

export default {
  props: {
    title: { required: true, type: String },
    submitBtn: { required: true, type: String },
    label: { required: true, type: String },
    id: { default: "", type: String },
  },
  methods: {
    onSubmit() {
      if (this.labelName === "") {
        return;
      }
      let data = {
        item: {
          id: this.submitBtn == "Edit" ? this.itemId : uniqueId("todo-"),
          label: this.labelName,
        },
        type: this.submitBtn == "Edit" ? "edit" : "add",
      };
      this.$store.commit("setNewToDo", data);
      this.$router.push("/");
    },
  },
  data() {
    return {
      labelName: this.label,
      itemId: this.id,
    };
  },
};
</script>

<style lang="scss" scoped>
form {
    text-align: center;

    input {
        width: 50%;
    }

    .btn--cancel, .btn--submit {
        cursor: pointer;
    }

    .btn--cancel {
        a {
            text-decoration: none;
            color: black
        }
    }
}
</style>
