<template>
    <div class="layout">
        <Header />
        <div class="body">
            <Aside />
            <Main />
        </div>
    </div>
</template>
<script>
    import Header from './header'
    import Aside from './aside'
    import Main from './main'
    export default {
        name: 'Layout',
        components: {
            Header,
            Aside,
            Main
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

            .main {
                background: $main-bg;
            }
        }
    }
</style>