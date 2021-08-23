<template>
  <h1>Password Generator</h1>
  <generator/>
</template>

<script>
import Generator from './components/Generator.vue';

export default {
  name: 'Password Generator',
  components: {
    Generator,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
