<template>
  <div class="todo-item pb-1" v-bind:class="{'is-complete':todo.completed}">
    <b-input-group>
      <b-input-group-prepend is-text>
        <input type="checkbox" aria-label="Checkbox for following text input">
      </b-input-group-prepend>
      <!-- add the title as placeholder -->
        <b-form-input class="w-50" v-bind:placeholder="todo.title"></b-form-input>
        <b-form-input type="date"></b-form-input>
      <b-input-group-append class="">
        <b-button variant="outline-danger">x</b-button>
      </b-input-group-append>

      
      <!-- <input type="checkbox" v-on:change="markComplete" />
      {{todo.title}}
      <b-button @click="$emit('del-todo', todo.id)" class="del">x</b-button> -->
    </b-input-group>

    
  </div>
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
