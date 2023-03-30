<template>
            <div class="left-list" >
                <div v-for="(item, key) in userArticleLists" :key="key" @click="goToArticleDetail(item.article_id)">
                    <h2>{{ item.title }}</h2>
                    <div class="bottom-info">
                        <div><user-outlined style="margin-right: 9px;"/><span>{{ item.user_id }}</span></div>
                        <div><tag-outlined style="margin-right: 9px;"/><span>{{ item.time }}</span></div>
                        <div><clock-circle-outlined style="margin-right: 9px;"/><span>{{ item.sort }}</span></div>
                    </div>
                </div>
            </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
const route = useRouter()
const props = defineProps<{
    userArticleLists: Array<Article.Article_all>,
        routeChange?:boolean
}>()
let userArticleLists = reactive<Array<Article.Article_all>>([])

userArticleLists = props.userArticleLists

/**
 * operate
 * 当父组件完成数据更新后，告知该组件，也该更新数据
 */
watch(()=>props.routeChange,(newVal, oldVal)=>{
    userArticleLists = props.userArticleLists
          console.dir(userArticleLists)
})
/**
 * methods
 * goToArticleDetail 实现路由跳转至文章详情 携带参数query
 */
const goToArticleDetail = (article_id:string)=>{
    route.push({name:'article-detail',query:{article_id}})
}
</script>

<style scoped lang="less">
    .left-list {
        width: 810px;
        // height: 200px;
        margin-right: 40px;
        
        >* {
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 8px 0px;
            margin-top: 30px;
            padding: 20px;
            border: 1px solid #e8e8e8;
            border-radius: 6px;

            &:hover {
                cursor: pointer;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 16px 0px;
            }
        }

        .bottom-info {
            display: flex;
            flex-direction: row;
            color: rgb(127, 127, 127);
            font-size: 20px;

            >* {
                margin-right: 20px;
            }
        }
    }
</style>