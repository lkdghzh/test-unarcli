<template>
  <div>
    <h1></h1>
    <router-link :to="{ name: 'Test'}">ROUTE TO TEST</router-link>
  </div>
</template>

<script>
export default {
  name: "Scaffold",
  data() {
    return {
      msg: 'Scaffold',
    };
  },
  created() {
    // console.log(this.$router)
  },
};
</script>
