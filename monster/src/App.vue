<template>
    <div id="app">

    </div>
</template>

<script>
    import {testApi} from "./api/test";

    export default {
        name: 'app',
        mounted() {
            testApi({
                name: 'monster'
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
