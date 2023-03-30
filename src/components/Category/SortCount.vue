<template>
    <div class="sortcount-box">
        <div v-for="(item, index) in props.sortCountList" class="each-box" :class="{clickBox:nowClick==item.sortName}" :key="index" @click="goToSpecialSortList(item.sortName)">
            <span>{{ item.sortName }}</span>
            <div>{{ item.sortCount }}</div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
/**
 * data
 * route 路由
 * nowClick 当前所点击的div的sortname
 * propsType 父组件传来的参 的数据接口
 * props 父组件传来的参
 * emits 向父组件触发的事件
 */
const route = useRouter()
let nowClick = ref<string>()
interface propsType {
    sortName: string
    sortCount: number
}
const props = defineProps<{
    sortCountList: Array<propsType>
}>()

const emits = defineEmits(['clickSort'])
/**
 * methods
 * goToSpecialSortList  切换指定sort并添加指定样式
 */
 const goToSpecialSortList = async(sortName:string)=>{
    nowClick.value = sortName
    await route.push({name:'category',query:{sortName}})
    emits('clickSort')
}
</script>

<style scoped lang="less">
.clickBox{
    background-color: pink;
}
.sortcount-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    .each-box {
        width: 100px;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        border: 1px solid #e8e8e8;
        margin-right: 15px;
        &:hover{
            cursor: pointer;
        }
        // &:active{
        //     background-color: pink;
        // }
        // [key]{
        //     background-color: pink;
        // }
        >div {
            width: 25px;
            height: 25px;
            color: white;
            background-color: #bb7205;
            border-radius: 15%;
            text-align: center;
        }
    }
}
</style>