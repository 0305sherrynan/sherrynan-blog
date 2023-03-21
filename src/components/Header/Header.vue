<template>
    <!-- <div class="root"> -->
        <el-affix :offset="10" target="body">
            <Transition name="head">
                <div class="header-box">
                    <el-menu class="right-box">
                        <el-menu-item>Sherrynan</el-menu-item>
                    </el-menu>
                    <el-menu mode="horizontal" class="right-box">
                        <el-menu-item><router-link to="/">首页</router-link><span></span></el-menu-item>
                        <el-menu-item><router-link :to="{name:'daily'}">记录</router-link></el-menu-item>
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
    <!-- </div> -->
</template>

<script setup lang="ts">
import { returnImg } from '@/utils/img/imgInVite'
</script>

<style scoped lang="less">

.root{
}
.header-box{
    width: 100%;
    display: flex;
    
    justify-content: space-between;
}
//定义hover时候的动画
/deep/.el-sub-menu__title:hover{
    background-color: transparent !important;
}


.right-box{
    /deep/.el-menu-item {
    &:hover{
        background-color: transparent ;
        color: #88add3 !important;
    }

    &::after {
        content: '';
        position: absolute;
      left: -100%; //藏在左下角
      bottom: 0;
      width: 100%;
      height: 6px;
        transition: all 0.3s;
        background-color: transparent;
        
    }

    &:hover::after {
        background-color: #88add3;
        transform: translateX(100%);
        // animation: hover_border 0.6s;
        /* 让样式在动画结束后维持在结束位置 */
        // animation-fill-mode: forwards;
    }

}
}
/**
    下拉框
*/
.personal-drop-down {
    
    margin: 0 20px;

    .personal-img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }
}</style>