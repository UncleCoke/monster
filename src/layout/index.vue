<template>
    <div class="layout">
        <Header />
        <div class="body">
            <div class="aside"></div>
            <div class="main"></div>
        </div>
    </div>
</template>
<script>
    import Header from './header'
    export default {
        name: 'layout',
        components: {
            Header
        },
        data() {
            return {

            }
        }
    }
</script>
<style lang="scss" scoped>
    .layout {
        height: 100%;

        .body {
            display: flex;
            height:calc(100% - #{$header-height});

            .aside {
                width: $aside-width;
                background: $aside-bg;
            }

            .main {
                background: $main-bg;
            }
        }
    }
</style>