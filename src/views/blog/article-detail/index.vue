<template>
    <div>
        <Banner></Banner>
        <div class="detail-box">
           
                <Suspense>
                    <async-article></async-article>
                </Suspense>
        </div>
    </div>
</template>

<script setup lang="ts">
import Banner from '@/components/Banner/Banner.vue';

import AsyncArticle from './AsyncArticle.vue'


</script>

<style scoped lang="less">
.detail-box{
    // padding: ;
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: center;


}
</style>