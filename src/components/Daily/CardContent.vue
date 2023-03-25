<template>
    <div class="root-cardcon">
        <div class="centent">
           <p v-html="dailyLists.description"> </p>
        </div>
        <div class="time">
            <p>{{ formatDateTime(dailyLists.submittime) }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import {formatDateTime} from '@/utils/time/index'
//获取daily信息 

/**
 * data
 * props 父组件daily.vue传来的用户daily数据
 */
const props = defineProps<{
    dailyLists:Daily.Daily_all
}>()

console.log(formatDateTime(props.dailyLists.submittime))
/**
 * operate
 */
// const  data =  await getDailyInfo()
</script>

<style scoped lang="less">
.root-cardcon{
    width: 100%;
    height: 100%;
    .centent{
        color: #90aba0;
        margin-bottom: 10px;
    }
    .time{
        border-top: 1px dashed rgba(196, 203, 215,0.85);
    }
}
</style>