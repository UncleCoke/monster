<template>
    <div class="aside">
        <el-scrollbar style="height:100%;width:100%;">
            <div class="menu-box">
                <el-menu default-active="2" class="el-menu-monster">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </div>
        </el-scrollbar>
    </div>
</template>
<script>
    export default {
        name: 'Aside',
        data() {
            return {

            }
        }
    }
</script>
<style lang="scss" scoped>
    .aside {
        width: $aside-width;
        background: $aside-bg;

        .menu-box {
            width: 100%;
            height: 100%;
            padding: $aside-padding;
        }
    }
</style>