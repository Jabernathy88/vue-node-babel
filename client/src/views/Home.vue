<template>
  <b-container fluid class="">
    <b-row class="pt-3 px-3 d-block bg-info text-white">
      <h2 class="">Vue Todo Schedule</h2>
      <p class="text-light font-weight-light pb-2">
        Sample app using: Vue.js, BootstrapVue, JSON API in Node.js &amp; PostgreSQL
      </p>
    </b-row>
  <!-- <img class="vue-logo" alt="Vue logo" src="../assets/logo.png"> -->

  <!-- <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" /> -->
    <AddTodoForm v-on:add-todo="createNewTodo" />
    <TodosList v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </b-container>
</template>

<script>
import AddTodoForm from '@/components/AddTodoForm'
import TodosList from '@/components/TodosList'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    TodosList,
    AddTodoForm
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo(id) {
      axios.delete(`http://localhost:3001/api/todos/${id}`)
        .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
        .catch(err => console.log(err));
    },
    createNewTodo(newTodo) {
      const {title, completed} = newTodo
      axios.post('http://localhost:3001/api/todos', {
        title,
        completed
      })
        .then(res => this.todos = [...this.todos, res.data])
        .catch(err => console.log(err))
      this.todos = [...this.todos]
    }
  },
  created() {
    axios.get('http://localhost:3001/api/todos')
      .then(res => {
        this.todos = res.data
        // console.log('I am created method response:', res.data)
        })
      .catch(err => console.log(err))
  }
}
</script>

<style>
  .vue-logo {
    height: 110px;
  }
</style>
