<template>
    <div>
        <img :src="returnDBImg(singleInfo.item.coverimg)" alt=""
            :class="{ parentImg: singleInfo.parentOrSon, sonImg: !singleInfo.parentOrSon }">
    </div>
    <div class="person-box">
        <div class="person-span-box">
            <span class="person-nickname">{{ singleInfo.item.nickname }}</span>
            <div class="author-box">
                <span class="person-reply" @mouseenter="mouseOverEvent"  @mouseleave="mouseOutEvent" v-if="(singleInfo.item as commentApi.getSonComentByid).replyid">回复 @{{ replyedInfo.nickname }}</span>
                <author-card  class="authorCard" @mouseenter="mouseOverEvent" @mouseleave="mouseOutEvent" :replyedInfo="replyedInfo" v-if="isShowReplyAuthor"></author-card>
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
import { reactive, ref } from 'vue';
import { commentApi } from '#/api'
import { DataTypeJudgeReplyid } from '@/utils/judge';
import { getReplyedInfo } from '@/utils/api/comment';
import { getDailInfoByID } from '@/utils/api/detailinfo';


/**
 * isShowComment 是否显示评论区
 * isShowReplyAuthor 是否显示被回复者的个人信息
 * replyedInfo 被回复者的信息
 */


interface propsInterface {
    singleInfo: { item: Comment.getParentComent | commentApi.getSonComentByid, index: number, parentOrSon: boolean,rootParentID?:string }
}
const props = defineProps<propsInterface>()
const isShowComment = ref<number>(-1)
const isShowReplyAuthor = ref<boolean>(false)
let replyedInfo:any = {}
//有replyid（为回复对方的留言），则获取被回复者的信息
if (!DataTypeJudgeReplyid(props.singleInfo.item))  {
    //获得核心的信息
    console.log(props.singleInfo.item.info,(props.singleInfo.item as commentApi.getSonComentByid).replyid)
   const keyInfo = await getReplyedInfo({replyid:(props.singleInfo.item as commentApi.getSonComentByid).replyid})
   console.log(keyInfo)
   const detailInfo = await getDailInfoByID((props.singleInfo.item as commentApi.getSonComentByid).replyid)
   console.log(detailInfo)
   replyedInfo = Object.assign({},keyInfo.data,detailInfo.data)

}




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
    console.log('out')
    isShowReplyAuthor.value = true
}
const mouseOutEvent = () => {
    console.log('out')
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
        bottom: 0px;
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
        
        color: #00a1d6;
        &:hover{
            color: #f25d8e;
            cursor: pointer;
        }
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