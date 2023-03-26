<template>
    <div>
        <Banner></Banner>
        <div class="articlelist-box">
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
            <div class="right-info">
                <div class="Categories">
                    <!-- <div> -->
                    <appstore-outlined /><span class="categories-title">Categories</span>
                    <!-- </div> -->
                    <div v-for="(item, index) in sortAndNumber" :key="index" class="categories-info">
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
 */
const goToArticleDetail = (article_id:string)=>{
    route.push({name:'article-detail',query:{article_id}})
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

    .right-info {
        width: 200px;
        height: 200px;
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