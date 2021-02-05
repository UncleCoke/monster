<template>
    <el-popover placement="top" width="230">
        <div class="themes">
            <div :key="index" @click="setTheme(themeKey)" class="theme-item"
                v-for="(themeValue, themeKey, index) in theme">
                <div :style="themeValue.style" class="theme-icon"></div>
                <p>{{themeValue.title}}</p>
            </div>
        </div>
        <i class="iconfont  iconsecai icon-color"  slot="reference"></i>
    </el-popover>
</template>

<script>
    import infoTheme from '@/style/theme/info.js';
    import dangerTheme from '@/style/theme/danger.js';
    import primaryTheme from '@/style/theme/primary.js';
    import successTheme from '@/style/theme/success.js';
    import warnTheme from '@/style/theme/warn.js';
    export default {
        data() {
            return {
                theme: {
                    info: {
                        file: infoTheme,
                        style: {
                            backgroundColor: '#909399'
                        },
                    },
                    danger: {
                        file: dangerTheme,
                        style: {
                            backgroundColor: '#F56C6C'
                        },
                    },
                    primary: {
                        file: primaryTheme,
                        style: {
                            backgroundColor: '#409EFF'
                        },
                    },
                    success: {
                        file: successTheme,
                        style: {
                            backgroundColor: '#67C23A'
                        },
                    },
                    warn: {
                        file: warnTheme,
                        style: {
                            backgroundColor: '#E6A23C'
                        },
                    }
                }
            }
        },
        created() {
            this.setTheme('info');
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

<style lang="scss" scoped>
    .themes {
        @include flex-center();
        .theme-item {
            @include flex-center();
            flex-direction: column;
            margin: 0 8px;
            cursor: pointer;

            .theme-icon {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                margin-bottom: 4px;
            }
        }
    }

    .icon-color{
        color:#fff;
        font-size:36px;
    }
</style>