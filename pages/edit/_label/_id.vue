<template>
  <ToDoForm
    title="Edit your task"
    :label="label"
    :id="id"
    submitBtn="Edit"
  ></ToDoForm>
</template>

<script>
import ToDoForm from "../../../components/ToDoForm.vue";

export default {
  components: { ToDoForm },
  data() {
    return {
      label: this.$route.params.label,
      id: this.$route.params.id,
    };
  },
};
</script>

<style>
</style>
