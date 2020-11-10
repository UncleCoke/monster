<template>
  <div id="app">
    <theme></theme>
  </div>
</template>

<script>
  import theme from '@/components/theme'
  export default {
    name: 'app',
    components:{
      theme
    }
  }
</script>

<style lang="scss">
  #app{
    width:100%;
    height:100%;
    background:var(--bg-color)
  }
</style>