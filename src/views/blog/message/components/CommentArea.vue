<template>
    <div class="comment-area">
        <send-message :userInfo="coverAndNick"></send-message>
        <show-message :parentCom="allCommentInfo" ></show-message>
    </div>
</template>

<script setup lang="ts">
import SendMessage from '@/components/Comment/SendMessage.vue'
import ShowMessage from '@/components/Comment/ShowMessage.vue'
import { getParentCom } from '@/utils/api/comment'
import { getPersonInfo } from '@/utils/api/user'

/**
 * coverAndNick 头像和昵称获取 后续改从storage获取
 * messageAll 获取所有的主留言内容
 */

const a =  getPersonInfo()
const b =  getParentCom() 
const [{data:coverAndNick},{data:allCommentInfo}] =  await Promise.all([a,b])

</script>

<style scoped lang="less">
.comment-area {
    width: 100%;
   height: 1000px;
    padding: 0 30px;
}
</style>