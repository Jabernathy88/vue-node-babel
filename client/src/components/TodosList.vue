<template>
  <div>
    <h4 class="text-black-50">Current Todo List</h4>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <!-- <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/> -->
    <TodoItem v-bind:todo="todo" />

    </div>
  </div>
</template>

<script>
  import TodoItem from './TodoItem.vue'

  export default {
    name: "TodosList",
    components: {
      TodoItem
    },
    props: ["todos"]
  }
</script>

<style scoped>
</style>