<template>
    <div class="root">
        <div v-for="(item, key) in dailyLists.data" class="row-box"
            style="background-color: ; margin-bottom: 20px;width: 100%;">
            <div v-if="key % 2 == 0 ? 1 : 0" class="left-box">
                <card-content :dailyLists="item" class="card-content"></card-content>
            </div>
            <div class="center-box">
                <div></div>
            </div>
            <div v-if="key % 2 == 0 ? 0 : 1" class="right-box">
                <card-content :dailyLists="item" class="card-content"></card-content>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import CardContent from './CardContent.vue';
import { getDailyInfo } from '@/utils/api/daily'
/**
 * data
 * leftOrRight 判断是左边该出现还是右边
 */
const dailyLists = await getDailyInfo()
console.log(dailyLists)
</script>

<style scoped lang="less">
.root {
    margin: 0 auto;
    width: 1000px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
}

.row-box {
    position: relative;

    &:last-child {
        margin-top: 60px;
    }

    >div:not(.center-box) {
        width: 400px;
        background-color: #4a5a5f;
    }

    .left-box {
        border-radius: 9px;
        padding: 20px;
        float: left;
        position: relative;

        &::after {
            display: block;
            position: absolute;
            width: 0;
            height: 0;
            right: -10px;
            top: 7px;
            content: '';
            border-left: 10px solid #4a5a5f;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
        }

    }

    .right-box {
        border-radius: 9px;
        padding: 20px;
        float: right;
        position: relative;

        &::after {
            display: block;
            position: absolute;
            width: 0;
            height: 0;
            left: -10px;
            top: 7px;
            content: '';
            border-right: 10px solid #4a5a5f;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
        }

    }

    .center-box {
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        div {
            z-index: 2;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 5px solid rgb(91, 70, 209);
            background-color: white;
        }
    }

}</style>