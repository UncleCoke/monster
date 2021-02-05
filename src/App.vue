<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
  import Layout from '@/layout';
  export default {
    name: 'app',
    components:{
      Layout
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
  }
</style>