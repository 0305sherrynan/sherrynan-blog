<template>
    <div class="sf-box">
        <div class="sf-img">
            <img :src="data.coverimg?returnDBImg(data.coverimg):returnImg('generalHead.svg')" alt="">
            <div class="sf-info">
            <span>{{ data.nickname }}</span>
            <span>{{ data.signature }}</span>
        </div>
        </div>

        <div class="sf-btn">
            <a-button @click="cancelFocusClick" v-if="isFocus">已关注</a-button>
            <a-button  @click="focusClick" v-else>未关注</a-button>
            <button @click="thrp">test</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { fansApi } from '@/types/api'
import { returnImg,returnDBImg } from '@/utils/img/imgInVite'
import {getFocusById,cancelFocus,postFocusUser} from '@/utils/api/fans'
import { ref } from 'vue'
import { fa } from 'element-plus/es/locale'
import { debounce } from '@/utils/debounce'
import { message } from 'ant-design-vue'

import {throttle} from '@/utils/throttle/index'
const a = throttle(1000,()=>{console.log(1)})
const thrp = ()=>{
  a()
}
/**
 * data
 * cancelThenFuc focusBtnDebounce 防抖器完成后的回调函数
 * cancelBtnDebounce focusBtnDebounce 两个防抖器
 */
const props = defineProps<{
    focusList:fansApi.getCurrentUserFocus
}>()
const isFocus = ref<boolean>(true)
const {data} = await getFocusById(props.focusList.negative)

const cancelThenFuc = ()=> {
    isFocus.value = false
    message.success('取消关注成功')
}
const focusThenFuc = ()=> {
    isFocus.value = true
    message.success('关注成功')
}
const cancelBtnDebounce = debounce(500,cancelFocus,cancelThenFuc)
const focusBtnDebounce = debounce(500,postFocusUser,focusThenFuc)

/**
 * methods
 * cancelFocusClick 取消关注
 * focusClick 关注
 */
const cancelFocusClick = ()=> {
     cancelBtnDebounce(props.focusList.negative)
}
const focusClick = ()=> {
     focusBtnDebounce(props.focusList.negative)
}
</script>

<style scoped lang="less">
.sf-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 0;
    border-bottom: 1px solid var(--line_regular);
    .sf-img{
        display: flex;
        flex-direction: row;
        >img{
            border-radius: 50%;
            width: 80px;
            height: 80px;
        }
    }
    .sf-info{
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        // align-content: space-around;
        justify-content: center;
        >span{
            &:first-child{
                font-size: 16px;
                color: rgb(251, 114, 153);
            }
            &:nth-child(2){
                font-size: 12px;
                color: #6d757a;;
            }
        }
    }
}
</style>