<template>
    <div>
        <Banner></Banner>
        <div class="articlelist-box">
            <article-lists :user-article-lists="userArticleLists"></article-lists>
            <div class="right-info">
                <div class="Categories">
                    <div>
                    <appstore-outlined /><span class="categories-title">Categories</span>
                    </div>
                    <div v-for="(item, index) in sortAndNumber" :key="index" class="categories-info" @click="goToSpecialSortList(item.sortName)"> 
                        <span class="sort-text">{{ item.sortName }}</span>
                        <div class="sort-count">{{ item.sortCount }}</div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Banner from '@/components/Banner/Banner.vue';
import { getArticleInfo, getArticleSortAndNumber } from '@/utils/api/article'
import { articleApi } from '#/api'
import { useRouter } from 'vue-router';
import ArticleLists from "@/components/Article/ArticleLists.vue";

import {
    UserOutlined,
    TagOutlined,
    ClockCircleOutlined,
    AppstoreOutlined

} from '@ant-design/icons-vue';
//需要获取到对应user_id的所有article数据
/**
 * userArticleLists 用户数据获取 
 * sortAndNumber 获取用户文章分类后的类别和对应数量
 * route 使用路由
 */

const { data: userArticleLists } = await getArticleInfo()
const { data: sortAndNumber } = await getArticleSortAndNumber()
const route = useRouter()
/**
 * methods
 * goToArticleDetail 实现路由跳转至文章详情 携带参数query
 * goToSpecialSortList 跳转到特殊分类的文章列表
 */

const goToSpecialSortList = (sortName:string)=>{
    route.push({name:'category',query:{sortName}})
}
</script>

<style scoped lang="less">
.articlelist-box {

    display: flex;
    flex-direction: row;
    justify-content: center;
    // margin-top: 50px;
    // overflow: auto;
    // margin-bottom: 50px;
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

        .Categories {
            // border: 1px solid #e8e8e8;
            // border-radius: 6px;

            .categories-title {
                margin-left: 10px;
                font-weight: 500;
                font-size: 17px;
            }

            .categories-info {
                margin-top: 15px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
               padding: 7px;
                align-items: center;
                border: 1px solid #e8e8e8;
                border-radius: 6px;
                &:hover{
                    cursor: pointer;
                }   

                .sort-text {
                    font-size: 20px;
                }

                .sort-count {
                    width: 25px;
                    height: 25px;
                    color: white;
                    background-color: #bb7205;
                    border-radius: 15%;
                    text-align: center;

                }
            }

        }
    }
}</style>