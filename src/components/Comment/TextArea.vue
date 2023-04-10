<template>
    <div class="inputInfo-box">
        <div class="row-box">
            <textarea name="" id="" cols="30" rows="2" placeholder="写下你的评论" v-model="textOutput"></textarea>
            <a-button type="primary" style="margin-left: 20px;height: 50px;border-radius: 6px;" @click="submitComment">发布</a-button>
        </div>
        <div class="emoji-btn-box">

        </div>
        <div class="emoji-big-box">
            <button @click="openEmoji" style="width: 80px;margin-top: 20px;">Emoji表情</button>
            <Picker :data="emojiIndex" title="Pick your emoji…" emoji="point_up" @select="showEmoji" v-show="isOpenEmoji"
                class="emoji-box"></Picker>
        </div>

    </div>
</template>

<script setup lang="ts">
import 'emoji-mart-vue-fast/css/emoji-mart.css'
import { Picker, EmojiIndex } from 'emoji-mart-vue-fast/src'
import data from 'emoji-mart-vue-fast/data/all.json'
import { ref } from 'vue';
import { submitCom, submitSonCom } from '@/utils/api/comment'
import { randomId } from '@/utils/random/randomId'
import { currentTime } from '@/utils/time/index'
interface coverAndNickInterface {

    parentObj?: string  // 如果是通过点击评论区的父评论进行回复 则需要传入父评论的id
    rootParentObj?:string //通过点击子回复进行回复 则传入最顶层的父评论的id
}
/**
 * emojiIndex 表情包相关
 * props
 * textOutput 表情输出的内容
 * isOpenEmoji 是否打开emoji
 */
let emojiIndex = new EmojiIndex(data)
const props = defineProps<coverAndNickInterface>()
const textOutput = ref<string>('')
const isOpenEmoji = ref<boolean>(false)

/**methods
 * showEmoji
 * openEmoji 打开/关闭emoji表情
 * submitComment 提交评论
 */


const showEmoji = (emoji: any) => {
    isOpenEmoji.value = false
    textOutput.value = textOutput.value + emoji.native
}
const openEmoji = (): void => {
    isOpenEmoji.value = !isOpenEmoji.value
}
const submitComment = async () :Promise<void> => {
    //若为主动评论（父评论），则提交数据到父表
    if (props.parentObj == undefined) {
        let data = {
            id: randomId(8),
            info: textOutput.value,
            time: currentTime()
        }

        await submitCom(data)
        return 
    }
    //若为回复  情况一 ：回复父评论 则提交到子表
     if (props.rootParentObj == undefined) {
        let data = {
            id: randomId(8),
            info: textOutput.value,
            time: currentTime(),
            parentid: props.parentObj,
            replyid: '1q'
        }
        await submitSonCom(data)
    }

}
</script>

<style scoped lang="less">
.inputInfo-box {
    position: relative;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    width: 400px;

    .row-box {
        display: flex;
        flex-direction: row;
    }

    .emoji-big-box {
        position: relative;

        .emoji-box {
            position: absolute;
            top: 20px;
            left: 80px;
            z-index: 999;
        }
    }

    .emoji-btn-box {
        display: inline-block;
        // position: absolute;
        bottom: -50px;
        right: 0;


    }

}
</style>