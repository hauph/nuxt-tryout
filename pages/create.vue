<template>
  <to-do-form
    title="What is your new task?"
    :label="label"
    id=""
    submitBtn="Add"
  ></to-do-form>
</template>

<script>
import ToDoForm from "../components/ToDoForm.vue";

export default {
  components: { ToDoForm },
  data() {
    return {
      label: "",
    };
  },
};
</script>

<style>
</style>
