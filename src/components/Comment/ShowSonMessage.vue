<template>
    <div v-show="DataTypeJudge(SonCommentByParentID)">
        <div v-for="(item, index) in (SonCommentByParentID as commentApi.getSonComentByid[])" class="showmes-box">
            <single-message :singleInfo="{item,index,parentOrSon:false,rootParentID:props.parentID}"></single-message>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getSonComByParentID } from '@/utils/api/comment'
import { DataTypeJudge } from '@/utils/judge'
import { commentApi } from '@/types/api'
import { ref } from 'vue'
import SingleMessage from './SingleMessage.vue'
/**
 * data
 * isShowComment 是否显示准备评论
 * SonCommentByParentID 获取对应parentid下的所有留言
 */

const props = defineProps<{
    parentID: string
}>()
const { data: SonCommentByParentID } = await getSonComByParentID(props.parentID)
const isShowComment = ref<number>(-1)

/**
 * method
 * isShowComBox
 */
const isShowComBox = (key: any) => {
    if (isShowComment.value != -1) {
        isShowComment.value = -1
    }
    else isShowComment.value = key
}
</script>

<style scoped lang="less">
.showmes-box {
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
        margin-top: 10px;
    }

    .reply-span {
        display: inline-block;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>