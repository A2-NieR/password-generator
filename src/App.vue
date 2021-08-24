<template>
  <h1>Password Generator</h1>
  <generator />
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
  color: white;
  margin-top: 15%;
}

body {
  background: linear-gradient(
    -45deg,
    #2E3192,
    #1BFFFF
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
