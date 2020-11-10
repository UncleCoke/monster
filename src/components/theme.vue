<template>
    <div></div>
</template>

<script>
    import defaultTheme from '@/style/theme/default.js';
    export default {
        data() {
            return {
                theme: {
                    default: {
                        title: 'default',
                        file: defaultTheme
                    }
                }
            }
        },
        created() {
            this.setTheme('default');
        },
        methods: {
            setTheme: function (themeKey) {
                const theme = this.theme[themeKey].file;
                Object.keys(theme).forEach(key => {
                    const value = theme[key]
                    document.documentElement.style.setProperty(key, value)
                })
            }
        }
    }
</script>

<style lang="scss">
</style>