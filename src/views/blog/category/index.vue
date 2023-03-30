<template>
    <div class="category-box">
        <Banner></Banner>
        
        <div class="category-info">
            <sort-count :sortCountList="sortAndCount" style="margin-top: 30px;width: 860px;" @clickSort="specialArticleShouldChange"></sort-count>
            <article-lists :userArticleLists="(specialArticle as Article.Article_all[])" :routeChange = "routeChange"></article-lists>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import {getArticleInfoBySort,getArticleSortAndNumber} from '@/utils/api/article'
import { useRouter } from 'vue-router';
import SortCount from "@/components/Category/SortCount.vue";
import Banner from '@/components/Banner/Banner.vue';
import ArticleLists from '@/components/Article/ArticleLists.vue';
import { onBeforeUnmount, reactive, ref, watch ,computed, nextTick} from 'vue';
/**
 * data 
 * routeChange 告知子组件路由切换了
 * router 路由
 * sortAndCount 获取所有分类及其对应的数量
 * specialArticle 指定分类的文章详情
 */
const routeChange = ref<boolean>(true)
const router = useRouter()
const {data:sortAndCount} = await getArticleSortAndNumber()
let specialArticle = reactive<Array<Article.Article_all>>([])
specialArticle = await (await getArticleInfoBySort(router.currentRoute.value.query.sortName as string)).data
// console.log(Data)

/**
 * methods
 * specialArticleShouldChange 子组件sort-count标签被切换 另外一个子组件article-list的数据也要被改变
 */
const specialArticleShouldChange = async()=>{
    
    specialArticle = await (await getArticleInfoBySort(router.currentRoute.value.query.sortName as string)).data
    routeChange.value = !routeChange.value
    
}
/**
 * operate
 */
</script>

<style scoped lang="less">
.category-box{
.category-info{
    // text-align: center;
    // margin: 0 auto;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
}
}
</style>