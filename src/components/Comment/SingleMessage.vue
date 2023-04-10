<template>
    <div>
        <img :src="returnDBImg(singleInfo.item.coverimg)" alt=""
            :class="{ parentImg: singleInfo.parentOrSon, sonImg: !singleInfo.parentOrSon }">
    </div>
    <div class="person-box">
        <div class="person-span-box">
            <span class="person-nickname">{{ singleInfo.item.nickname }}</span>
            <div class="author-box">
                <span class="person-reply" @mouseover="mouseOverEvent" @mouseout="mouseOutEvent">回复 @{{ (singleInfo.item as
                    commentApi.getSonComentByid).replyid }}</span>
                <author-card  class="authorCard" :authorID="(singleInfo.item as commentApi.getSonComentByid).replyid" v-show="isShowReplyAuthor"></author-card>
            </div>

        </div>

        <span class="person-info">{{ singleInfo.item.info }}</span>
        <div>
            <span>{{ singleInfo.item.time }}</span>
            <div class="reply-span" @click="isShowComBox(singleInfo.index)">
                <message-outlined />
                <span>回复</span>
            </div>
        </div>
        <text-area v-show="isShowComment == singleInfo.index" :parentObj="singleInfo.item.id" :rootParentObj="singleInfo.rootParentID"></text-area>
        <slot name="sonMessage"></slot>
    </div>
</template>

<script setup lang="ts">
import { returnDBImg } from '@/utils/img/imgInVite'
import TextArea from './TextArea.vue'
import AuthorCard from '../Author/AuthorCard.vue'
import {
    MessageOutlined
} from '@ant-design/icons-vue';
import { ref } from 'vue';
import { commentApi } from '#/api'


/**
 * isShowComment 是否显示评论区
 * isShowReplyAuthor 是否显示被回复者的个人信息
 */


interface propsInterface {
    singleInfo: { item: Comment.getParentComent | commentApi.getSonComentByid, index: number, parentOrSon: boolean,rootParentID?:string }
}
const props = defineProps<propsInterface>()
const isShowComment = ref<number>(-1)
const isShowReplyAuthor = ref<boolean>(false)




/**
 * method
 * isShowComBox 切换 打开/关闭评论区
 * mouseOverEvent  ‘@’的人 鼠标移动至此
 * mouseOutEvent 移出‘@’的人
 */
const isShowComBox = (key: any) => {
    if (isShowComment.value != -1) {
        isShowComment.value = -1
    }
    else isShowComment.value = key
}
const mouseOverEvent = () => {
    isShowReplyAuthor.value = true
}
const mouseOutEvent = () => {
    isShowReplyAuthor.value = false
}
</script>

<style scoped lang="less">
.parentImg {
    width: 48px;
    height: 48px;
    border-radius: 50%;
}

.sonImg {
    width: 24px;
    height: 24px;
    border-radius: 50%;
}

.author-box {
    position: relative;
    display: flex;
    flex-direction: row;

    .authorCard {
        position: absolute;
        bottom: 20px;
        left: 20px;
    }
}

.person-span-box {
    position: relative;
    display: flex;
    flex-direction: row;
}

.person-box {
    position: relative;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    width: 400px;



    >* {
        margin-top: 5px;
    }

    .person-info {
        font-size: 15px;
        font-weight: 600;
    }

    .person-nickname {
        font-weight: 500;
        color: #61666d;
    }

    .person-reply {
        margin-left: 5px;
    }

    .reply-span {
        display: inline-block;
        margin-left: 20px;

        >* {
            padding: 3px;
        }

        &:hover {
            cursor: pointer;
        }
    }
}</style>