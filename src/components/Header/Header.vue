<template>
    <div>
        <el-affix :offset="0">
            <Transition name="head">
                <div class="header-box">
                    <el-menu>
                        <el-menu-item><span>Sherrynan</span></el-menu-item>
                    </el-menu>
                    <el-menu mode="horizontal" class="right-box">
                        <el-menu-item>首页<span></span></el-menu-item>
                        <el-menu-item>记录</el-menu-item>
                        <el-menu-item>文档</el-menu-item>
                        <el-menu-item>关于作者</el-menu-item>

                        <el-sub-menu index="2" class="personal-drop-down">
                            <template #title>
                                <img :src="returnImg('brian.png')" class="personal-img" alt="">
                            </template>
                            <el-menu-item>登录</el-menu-item>
                            <el-menu-item>个人中心</el-menu-item>
                            <el-menu-item>前往后台</el-menu-item>
                            <!-- <el-menu-item></el-menu-item> -->
                        </el-sub-menu>

                    </el-menu>
                </div>
            </Transition>
        </el-affix>
    </div>
</template>

<script setup lang="ts">
import { returnImg } from '@/utils/img/imgInVite'
</script>

<style scoped lang="less">
.header-box{
    display: flex;
    
    justify-content: space-between;
    // >*{
    //     display: inline-block;
    // }
    >.right-box{
        // position: absolute;
        // right: 0;
    }
}
@keyframes hover_border {
    0% {
        content: '';
        position: absolute;
        display: inline-block;
        margin: 0 auto;
        // margin-left: -5px;
        bottom: 0;
        left: 0;
        height: 10px;
        width: 0;
        background-color: #a89d9e;
    }

    100% {
        content: "";
        margin: 0 auto;
        position: absolute;
        display: flex;
        //  margin-left: -5px;
        //  bottom: auto;
        //  right: auto;
        bottom: 0;
        left: 0;
        height: 10px;
        width: 100%;
        background-color: #a89d9e;
    }
}
.el-menu{
    border: none;
}
.el-menu--horizontal {
    border-bottom: none !important;
}

.el-menu-item {
    margin: 0 20px !important;
    // border: none !important;
    // border-bottom: none !important;
    padding: 0;
    color: #88add3 !important;

    &::after {
        content: '';
    }

    &:hover::after {
        // transform: translateX(100%);
        animation: hover_border 0.6s;
        /* 让样式在动画结束后维持在结束位置 */
        animation-fill-mode: forwards;
    }

}

//将menu-item的hover、focus修改
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background-color: transparent;
    color: #88add3;
}

.el-menu--horizontal>.el-menu-item.is-active {
    background-color: transparent;
    border-bottom: none;
    color: #88add3 !important;
}

.personal-drop-down {
    margin: 0 20px;

    .personal-img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }
}</style>