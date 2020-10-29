<template>
  <div id="app">
    <el-button type="primary" @click="change"></el-button>
  </div>
</template>

<script>
import {mapGetters,mapActions} from '@/store/helper/theme'
  export default {
    name: 'app',
    computed:{
      ...mapGetters(['primaryColor'])
    },
    methods: {
      change(){
        console.log('click');
        document.documentElement.style.setProperty('--color-primary',this.primaryColor);
      }
    }
  }
</script>

<style lang="scss">

</style>