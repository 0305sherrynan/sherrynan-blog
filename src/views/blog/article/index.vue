<template>
    <div>
        <Banner></Banner>
        <div class="articlelist-box" v-if="isExistData">
            <article-lists :user-article-lists="userArticleLists"></article-lists>
            <div class="right-info">
                <article-category :sort-and-number="sortAndNumber"></article-category>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Banner from '@/components/Banner/Banner.vue';
import { getArticleInfo, getArticleSortAndNumber } from '@/utils/api/article'

import ArticleLists from "@/components/Article/ArticleLists.vue";
import ArticleCategory from '@/components/Article/ArticleCategory.vue';

import { ref } from 'vue';
/**
 * getData 用户数据获取 ： 可能不符合条件
 * userArticleLists 用户数据获取  ：最终符合条件
 * dataUnionType   userArticleLists 的可能类型
 * getDataSort 获取用户文章分类后的类别和对应数量  ： 可能不符合条件
 * sortAndNumber 获取用户文章分类后的类别和对应数量  ：最终符合条件
 * route 使用路由
 * isExistData 用户是否有文章

 */

const { data: getData } = await getArticleInfo()
let userArticleLists: Article.Article_all[] = []
type dataUnionType = Article.Article_all | { message: string }
const { data: getDataSort } = await getArticleSortAndNumber()
let sortAndNumber: Article.article_sort[] = []
const isExistData = ref<boolean>(false)

/**
 * methods
 * goToArticleDetail 实现路由跳转至文章详情 携带参数query
 * goToSpecialSortList 跳转到特殊分类的文章列表
 * DataTypeJudge 判断数据是否有，没有的话是返回message
 */


const DataTypeJudge = (data: unknown): data is { message: string } => {
    return (data as { message: string }).message == undefined
}
/**
 * operate 
 * 判断是否有内容从而展示不同的内容
 */
isExistData.value = DataTypeJudge(getData)
if (isExistData.value == true) {
    userArticleLists = getData as Article.Article_all[]
    sortAndNumber = getDataSort as Article.article_sort[]
}


</script>

<style scoped lang="less">
.articlelist-box {

    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 50px;

    >* {

        border-radius: 6px;
    }



    .right-info {
        width: 200px;
        height: 100%;
        border: 1px solid #e8e8e8;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 8px 0px;


    }
}
</style>