<template>
    <div class="category-box">
        <Banner></Banner>

        <div class="category-info">
            <sort-count :sortCountList="sortAndCount" style="margin-top: 30px;width: 860px;"
                @clickSort="specialArticleShouldChange"></sort-count>
            <article-lists :userArticleLists="(specialArticle as Article.Article_all[])"
                :routeChange="routeChange"></article-lists>
        </div>

    </div>
</template>

<script setup lang="ts">
import { getArticleInfoBySort, getArticleSortAndNumber } from '@/utils/api/article'
import { useRouter } from 'vue-router';
import SortCount from "@/components/Category/SortCount.vue";
import Banner from '@/components/Banner/Banner.vue';
import ArticleLists from '@/components/Article/ArticleLists.vue';
import { onBeforeUnmount, reactive, ref, watch, computed, nextTick } from 'vue';
/**
 * data 
 * routeChange 告知子组件路由切换了
 * router 路由
 * getData 获取所有分类及其对应的数量 : 返回的数据
 * sortAndCount 获取所有分类及其对应的数量 : 最终渲染到DOM上的数据
 * dataUnionType  sortAndCount的可能类型
 * isExistData 判断是否有真实数据收到，而非message
 * specialArticle 指定分类的文章详情
 */
const routeChange = ref<boolean>(true)
const router = useRouter()
const { data: getData } = await getArticleSortAndNumber()
let sortAndCount : Article.article_sort[]= []
const isExistData  = ref<boolean>(false)
type dataUnionType = {message: string} | Article.article_sort[]
let specialArticle = reactive<Array<Article.Article_all>>([])
specialArticle = await (await getArticleInfoBySort(router.currentRoute.value.query.sortName as string)).data
/**
 * methods
 * specialArticleShouldChange 子组件sort-count标签被切换 另外一个子组件article-list的数据也要被改变
 * DataTypeJudge
 */
const specialArticleShouldChange = async () => {

    specialArticle = await (await getArticleInfoBySort(router.currentRoute.value.query.sortName as string)).data
    routeChange.value = !routeChange.value

}
const DataTypeJudge = (data:unknown):data is {message:string} =>{
     return (data as {message:string}).message == undefined
}
/**
 * operate
 * 判断是否有内容从而展示不同的内容
 */
 isExistData.value = DataTypeJudge(getData)
 if (isExistData.value == true) sortAndCount = getData as Article.article_sort[]
</script>

<style scoped lang="less">
.category-box {
    .category-info {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 30px;
    }
}
</style>