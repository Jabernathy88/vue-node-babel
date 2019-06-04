<template>
  <b-form-row class="todo-item pb-1" v-bind:class="{'is-complete':todo.completed}">
    <b-input-group size="sm">
      <b-input-group-prepend is-text class="">
        <input type="checkbox" aria-label="Checkbox for following text input" v-on:change="markComplete">
      </b-input-group-prepend>
        <b-form-input class="w-25 border-right-0" v-bind:placeholder="todo.title"></b-form-input>
      <b-input-group-append class="">
        <b-button variant="outline-danger" @click="$emit('del-todo', todo.id)" class="del"><i class="fas fa-times"></i></b-button>
      </b-input-group-append>
      <!-- <input type="checkbox" v-on:change="markComplete" />
      {{todo.title}}
      <b-button @click="$emit('del-todo', todo.id)" class="del">x</b-button> -->
    </b-input-group>
  </b-form-row>
</template>
 
<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
}
</script>

<style scoped>
</style>
