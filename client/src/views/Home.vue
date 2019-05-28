<template>
  <div>
    <b-container fluid class="">
      <b-col cols="4" class="text-center">
      </b-col>
      <b-col>
        <h1>Welcome to Vue.js</h1>
        <p class="lead">
          For a guide and recipes on how to configure / customize this project,<br>
          check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
      </b-col>
    <!-- <img class="vue-logo" alt="Vue logo" src="../assets/logo.png"> -->
  </b-container>

  <b-container>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </b-container>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style>
  .vue-logo {
    height: 110px;
  }
</style>
