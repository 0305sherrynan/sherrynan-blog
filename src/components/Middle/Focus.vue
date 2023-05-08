<template>
    <div class="focus-box">
        <div class="tag-span">
            全部关注
        </div>
        <div v-if="(data instanceof Array)">
            <div v-for="(item) in data" :key="item.negative">
                <single-focus :focusList="item"></single-focus>
            </div>
           
        </div>
        <div v-else>{{ data.message }}</div>
    </div>
</template>

<script setup lang="ts">

import { getFocus } from '@/utils/api/fans'
import SingleFocus from './SingleFocus.vue'
/**
 * data
 * focusList 关注列表
 */
const {data} = await getFocus()
console.log(data)
// if (data instanceof Array) 
</script>

<style scoped lang="less">
.focus-box{
    padding: 10px;
    .tag-span{
        font-size: 18px;
        color: black;
        border-bottom:1px solid var(--line_regular);
    }
}
</style>