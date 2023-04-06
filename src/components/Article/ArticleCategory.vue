<template>
    <div class="Categories">
        <div>
            <appstore-outlined /><span class="categories-title">Categories</span>
        </div>
        <div v-for="(item, index) in sortAndNumber" :key="index" class="categories-info"
            @click="goToSpecialSortList(item.sortName)">
            <span class="sort-text">{{ item.sortName }}</span>
            <div class="sort-count">{{ item.sortCount }}</div>
        </div>
    </div>
</template>

<script setup lang="ts" >
import { useRouter } from 'vue-router';
/**
 * data 
 * props 
 * route
 */
const props = defineProps<{
    sortAndNumber: Article.article_sort[]
}>()
const route = useRouter()

/**
 * method goToSpecialSortList
 */
const goToSpecialSortList = (sortName: string) => {
    route.push({ name: 'category', query: { sortName } })
}
</script>

<style scoped lang="less">
.Categories {


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

        &:hover {
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
</style>