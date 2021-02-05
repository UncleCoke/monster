<template>
    <div class="header">
        <div class="title">怪兽学院</div>
        <Theme />
    </div>
</template>

<script>
    import Theme from '@/components/theme'
    export default {
        name: 'Header',
        components: {
            Theme
        },
        data() {
            return {

            }
        }
    }
</script>
<style lang="scss" scoped>
    .header {
        @include flex-between();
        height: $header-height;
        padding:0 $header-padding;
        background: var(--header-bg);
        color:#fff;

        .title{
            font-size:24px;
            font-weight:bold;
        }
    }
</style>