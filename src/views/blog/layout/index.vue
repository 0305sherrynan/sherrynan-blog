<script setup lang="ts">
import { onBeforeMount, onMounted, ref, watch } from 'vue'
// import Header from '@/components/Header/Header.vue'
import { returnImg ,returnIcon} from '@/utils/img/imgInVite'
import Master from '@/views/blog/Master/Master.vue'
import {getDailyInfo} from '@/utils/api/daily'
import { da } from 'element-plus/es/locale'
import { useRouter } from 'vue-router'
import { useScoll } from '@/hooks/useScroll'
import { defineAsyncComponent } from 'vue'

/**
 * data
 * nowScrollPos 引入hook 当前滚动的距离
 * hiddenHead 用于决定是否挂载隐藏header样式
 * hiddenRocket 用于决定是否显示右下方火箭（用于跳转到上头）
 */
let {nowScrollPos} = useScoll()
let hiddenHead = ref<boolean>(false)
let hiddenRocket = ref<boolean>(false)
const router = useRouter()

const Header = defineAsyncComponent(() => 
  import('@/components/Header/Header.vue')
)
/**
 * methods 
 * turnTop 用于跳转到最顶部 
 */

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
 * watch  nowScrollPos 监视当前的滚动条距离顶部的距离 
 */

watch(nowScrollPos,(newValue,oldValue)=>{
  newValue>50?hiddenHead.value = true:hiddenHead.value = false
  newValue>100?hiddenRocket.value = true:hiddenRocket.value = false

}
)

</script>

<template>
  <Header class="header"  v-show="!hiddenHead"></Header>
  <router-view ></router-view>
  <div style="position: fixed;bottom: 59px;right: 36px;" v-show="hiddenRocket" @click="turnTop">
      <img :src="returnIcon('rocket.svg')" alt=""  style="width: 52px;height: 47px;">
  </div>
</template>

<style scoped lang="less">
.hiddenStyle{
  background-color: rgba(255,255,255,0.5);
}
.header{
 
  position: fixed;
  top: 0;
  z-index: 999;

}
</style>
