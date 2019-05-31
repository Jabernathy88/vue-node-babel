<template>
  <b-form-row @submit="createNewTodo" >
    <b-form-group class="w-100" description="Create a new task and schedule when it's due.">
      <b-input-group prepend="Title">
        <b-form-input type="text" v-model="title" name="title" placeholder=" Name your next task!" />
      </b-input-group>
      <b-form-row class="mt-1">
        <!-- <b-col cols="8" sm="5" md="4">
          <b-input-group class="" prepend="Due">
            <b-form-input v-bind:id="'todo.id'" type="date" class=""></b-form-input>
          </b-input-group>
        </b-col > -->
        <b-col cols="3" sm="3" md="2">
          <b-button block class="" type="submit" variant="outline-success" >
            Submit
          </b-button>
        </b-col>
      </b-form-row>
      <!-- custom datepicker
      <datepicker></datepicker> -->
    </b-form-group>
  </b-form-row>  
</template>

<script>
  import Datepicker from 'vuejs-datepicker'

  export default {
    name: "AddTodoForm",
    data() {
      return {
        title: ''
      }
    },
    components: {
      Datepicker
    },
    methods: {
      createNewTodo(e) {
        e.preventDefault();
        const newTodo = {
          title: this.title,
          completed: false
        }
        // send up to parent
        this.$emit('add-todo', newTodo); 

        this.title = '';
      }
    }
  }
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>
