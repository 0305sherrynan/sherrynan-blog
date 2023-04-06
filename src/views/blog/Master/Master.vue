<template>
    <div>
        <!--背景图和波浪图-->
        <div class="banner" style="animation: header-effect 1s;">
            <!--波浪图 -->
            <div class="wave">
                <img :src="returnIcon('arrow.png')" alt="" class="arrow" @click="scrollToMaster">
                <img :src="returnIcon('wave-1.svg')" alt="">
                <img :src="returnIcon('wave-2.svg')" alt="">
                <img :src="returnIcon('wave-3.svg')" alt="">
                <img :src="returnIcon('wave-4.svg')" alt="">
                <img :src="returnIcon('wave-5.svg')" alt="">
            </div>
        </div>
        <!--下面主体的信息部分-->
        <!--用一个空div 用于跳转-->
        <div ref="showFace"></div>
        <show-face></show-face>
    </div>
</template>

<script setup lang="ts">
import { ref ,nextTick} from 'vue';
import { returnIcon } from '@/utils/img/imgInVite';
import  ShowFace  from '@/components/Master/ShowFace/ShowFace.vue'
/**
 * data
 *  showFace 主体部分的id获取
 */
const showFace = ref<Element | null>(null)

/**
 * methods
 * scrollToMaster 实现页面滑动跳转
 */

const scrollToMaster = ()=>{
        (showFace.value as Element).scrollIntoView({
        block:'start',
        behavior:'smooth'
    })

}

</script>

<style scoped lang="less">
.banner{
    background-image: url('@/assets/img/boat.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    //沾满全屏
    height: 100vh;
}
.wave{
   
.arrow{
    z-index: 999;
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translate(-50%,-50%);
    &:hover{
        cursor: pointer;
    }
}
img{
    &:not(.arrow){
        position: absolute;
        bottom: 0;
        
    }
    &:nth-child(2){
        opacity: 0.5;
        animation: wave-1 5s infinite;
    }
    &:nth-child(3){
        opacity: 0.5;
        animation: wave-2 5s infinite;
    }
    &:nth-child(4){
        opacity: 0.5;
        animation: wave-3 5s infinite;
    }
    &:nth-child(5){
        opacity: 0.5;
        animation: wave-4 5s infinite;
    }
    &:nth-child(6){
        bottom: -1.5vw;
        animation: wave-5 5s infinite;
    }
}
}
</style>