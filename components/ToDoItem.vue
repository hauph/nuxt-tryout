<template>
  <div class="item--wrapper">
    <label :for="id">{{ label }}</label>

    <div class="btn--wrapper">
        <button class="btn--edit" @click.prevent="edit(label, id)">Edit</button>
        <button class="btn--remove" @click.prevent="remove(id)">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: { required: true, type: String },
    id: { required: true, type: String },
  },
  methods: {
    edit(label, id) {
      this.$router.push(`/edit/${label}/${id}`);
    },
    remove(id) {
      this.$store.commit("removeAToDo", id);
    },
  },
};
</script>

<style lang="scss">
.item--wrapper {
    display: flex;
    
    label {
        flex: 2;
    }
    
    .btn--wrapper {
        button {
            cursor: pointer;
        }
    }
}
</style>