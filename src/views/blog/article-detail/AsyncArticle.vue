<template>
    <!-- <span v-html=""></span> -->
    <div class="left-article">
        <v-md-preview-html :html="articleDetails[0].info" preview-class="github-markdown-body"></v-md-preview-html>
    </div>
    <div class="right-toc">
        <!-- <div v-for="">
            <a ></a>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import { getArticleInfo ,getArticleByArticleid} from '@/utils/api/article'
import { useRouter } from 'vue-router';

/**
 * data
 * articleDetails 获取文章
 * tocTitle 导航的标题
 * router 获取路由
 */


const router = useRouter()
const { data: articleDetails } = await getArticleByArticleid(router.currentRoute.value.query.article_id as string)
const tocTitle = articleDetails[0].title
// console.log(router.currentRoute.value.query.article_id)

console.log(articleDetails)
</script>

<style scoped>
    .left-article{
        border: 1px solid #ebeef5;
        width: 700px;
       
        margin-right: 50px;
        border-radius: 8px;
        padding: 20px;
    }
    .right-toc{
        border: 1px solid #ebeef5;
        width: 300px;
        height: 1000px;
        border-radius: 8px;
    }
</style>