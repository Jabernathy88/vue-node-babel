<template>
  <div class="todo-item pb-1" v-bind:class="{'is-complete':todo.completed}">
    <b-form-row class="pb-1">
      <b-input-group size="sm">
        <b-input-group-prepend is-text class="">
          <input type="checkbox" aria-label="Checkbox for following text input" v-on:change="markComplete">
        </b-input-group-prepend>
        <b-input-group-text class="w-50">{{todo.title}} </b-input-group-text>
        <b-input-group-append class="">
          <b-button variant="outline-danger" @click="$emit('del-todo', todo.id)" class="del"><i class="fas fa-times"></i></b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-row>
  </div>

</template>
 
<script>
import axios from 'axios'

export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      console.log("I am PATCH request:", this.todo.id)
      axios.patch(`http://localhost:3001/api/todos/${this.todo.id}`, {
        completed: !this.todo.completed
      })
        .then(res => this.todo = res.data)
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  .is-complete {
    text-decoration: line-through;
  }
</style>
