<template>
  <div class="container">
    <div class="app__title">
      <h1 class="title">Todo List</h1>
    </div>

    <div class="container__inner">
      <h2 id="list-summary">{{ listSummary }}</h2>

      <NuxtLink to="/create" class="btn--create"> + Create task</NuxtLink>

      <ul>
        <li v-for="item in toDoItems" :key="item.id">
          <to-do-item :label="item.label" :id="item.id"></to-do-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ToDoItem from "../components/ToDoItem.vue";

export default {
  components: {
    ToDoItem,
  },
  computed: {
    toDoItems() {
      return this.$store.getters["getToDoItems"];
    },
    listSummary() {
      const toDoLength = this.$store.getters["getToDoItems"].length;
      return `There ${toDoLength <= 1 ? 'is' : "are"} ${toDoLength} todo${toDoLength <= 1 ? '' : "s"}.`;
    },
  },
};
</script>

<style lang="scss">
.container {
  .app__title {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .title {
      font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
      display: block;
      font-weight: 300;
      font-size: 50px;
      color: #35495e;
      letter-spacing: 1px;
    }
  }

  .container__inner {
    width: 50%;
    margin: 0 auto;

    .btn--create {
      display: block;
      text-decoration: none;
      color: grey;
    }

    ul {
      padding: 0;

      li {
        list-style: none;
        margin: 10px 0;
      }
    }
  }
}
</style>
