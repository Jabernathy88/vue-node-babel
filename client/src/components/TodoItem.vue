<template>
  <b-form-row class="todo-item pb-1" v-bind:class="{'is-complete':todo.completed}">
    <b-input-group size="sm">
      <b-input-group-prepend is-text class="">
        <input type="checkbox" aria-label="Checkbox for following text input">
      </b-input-group-prepend>
        <b-form-input class="w-25 border-right-0" v-bind:placeholder="todo.title"></b-form-input>
        <b-input-group-addon is-text class="border-left-0 d-none d-md-flex">
          <i class="fas fa-calendar-day"></i>
        </b-input-group-addon>
        <b-form-input v-bind:id="'todo.id'" type="date" class="bg-light text-black-50"></b-form-input>
      <b-input-group-append class="">
        <b-button variant="outline-danger"><i class="fas fa-times"></i></b-button>
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
    // markComplete() {
    //   this.todo.completed = !this.todo.completed;
    // }
  }
}
</script>

<style scoped>
  /* .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    borderius: 50%;
    cursor: pointer;
    float: right;
  } */
</style>
