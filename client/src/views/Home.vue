<template>
  <div>
    <b-container fluid class="">
      <b-row class="pt-3 px-3 d-block">
        <h1 class="d-block">Welcome to Vue.js</h1>
        <p class="lead d-block">
          For a guide and recipes on how to configure / customize this project,<br>
          check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
      </b-row>
    <!-- <img class="vue-logo" alt="Vue logo" src="../assets/logo.png"> -->

    <!-- <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" /> -->
    <TodosList v-bind:todos="todos" />
  </b-container>
  </div>

</template>

<script>
// @ is an alias to /src
import TodosList from '@/components/TodosList.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    TodosList
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    // deleteTodo(id) {
    //   axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //     .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
    //     .catch(err => console.log(err));
    // },
    // addTodo(newTodo) {
    //   const {title, completed} = newTodo
    //   axios.post('https://jsonplaceholder.typicode.com/todos', {
    //     title,
    //     completed
    //   })
    //     .then(res => this.todos = [...this.todos, res.data])
    //     .catch(err => console.log(err))
    //   this.todos = [...this.todos]
    // }
  },
  created() {
    axios.get('http://localhost:3001/api/todos')
      .then(res => {
        this.todos = res.data
        console.log('I am created method response:', res.data)
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
