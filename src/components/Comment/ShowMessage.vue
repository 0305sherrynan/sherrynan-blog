<template>
    <div class="showmes-big-box">
        <h2 style="font-weight: 600;">全部留言</h2>
        <div class="showmes-box" v-for="(item, index) in props.parentCom" :key="index">
            <single-message :singleInfo="{item,index,parentOrSon:true}">
                <template #sonMessage>
                    <Suspense>
                        <show-son-message :parentID="item.id"></show-son-message>
                    </Suspense>
                </template>
            </single-message>

        </div>
    </div>
</template>

<script setup lang="ts">
import SingleMessage from './SingleMessage.vue'
import ShowSonMessage from './ShowSonMessage.vue'

/**
 * 
 * allCommentInfo 所有的评论内容 先做一级的 后续做多级
 * isShowComment 是否显示准备评论
 */
interface allCommentInfo {
    parentCom: Array<Comment.getParentComent>
}
const props = defineProps<allCommentInfo>()

</script>

<style scoped lang="less">
.showmes-big-box {
    margin-top: 60px;
}

.showmes-box {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}

</style>