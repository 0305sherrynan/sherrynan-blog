<script setup lang="ts">
// import { fa, tr } from 'element-plus/es/locale';
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import Header from '@/components/Header/Header.vue';
import { returnImg ,returnIcon} from '@/utils/img/imgInVite';
import Master from '@/views/blog/Master/Master.vue';
import {getDailyInfo} from '@/utils/api/daily'
import { da } from 'element-plus/es/locale';
 
/**
 * data
 * nowScrollPos 当前滚动的距离
 * hiddenHead 用于决定是否挂载隐藏header样式
 * hiddenRocket 用于决定是否显示右下方火箭（用于跳转到上头）
 */
let nowScrollPos = ref<number>(0)
let hiddenHead = ref<boolean>(false)
let hiddenRocket = ref<boolean>(false)

/**
 * methods 
 * scrollHandler 监听scroll事件
 * turnTop 用于跳转到最顶部 
 */
const scrollHandler = ()=>{
  window.addEventListener('scroll',()=>{
    // console.log( document.body.scrollTop)
    //不要用document.body.scrollTop获取 DTD问题
    nowScrollPos.value = document.documentElement.scrollTop
    
  })
}
const turnTop = async()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
    })
   const data = await getDailyInfo()
   console.log(data)
}

/**
 * operate 
 * onMounted  挂载scroll事件
 * onBeforeMount 卸载scroll事件
 * watch  nowScrollPos 监视当前的滚动条距离顶部的距离 
 */

onMounted(()=>{
  scrollHandler()
})
onBeforeMount(()=>{
  window.removeEventListener('scroll',()=>{})
})
watch(nowScrollPos,(newValue,oldValue)=>{
  newValue>50?hiddenHead.value = true:hiddenHead.value = false
  newValue>100?hiddenRocket.value = true:hiddenRocket.value = false

}
)

</script>

<template>
  <Header class="header"  v-show="!hiddenHead"></Header>
  <router-view></router-view>
  <div style="position: fixed;bottom: 59px;right: 36px;" v-show="hiddenRocket" @click="turnTop">
      <img :src="returnIcon('rocket.svg')" alt=""  style="width: 52px;height: 47px;">
  </div>
</template>

<style scoped lang="less">
.hiddenStyle{
  background-color: rgba(255,255,255,0.5);
}
.header{
  // float: right;
  position: fixed;
  top: 0;

}
</style>
