<template>
  <div class="test">
    <h1></h1>
    <router-link :to="{ name: 'Scaffold'}">ROUTE TO SCAFFOLD</router-link>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      msg: "TEST"
    };
  },
  created() {
    /*eslint no-console: "off"*/
    console.log(this.$router);
  }
};
</script>

<style scoped>
.test {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
