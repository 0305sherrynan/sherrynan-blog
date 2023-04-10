<template>
    <div>
        <Banner></Banner>

        <div class="comment-layout">
            <suspense>
                <comment-area></comment-area>
            </suspense>
            <div style="width:300px;height:500px;background-color: antiquewhite;"></div>
        </div>

    </div>
</template>

<script setup lang="ts">
import Banner from '@/components/Banner/Banner.vue'
import CommentArea from './components/CommentArea.vue'
</script>

<style scoped lang="less">
.comment-layout {
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: space-evenly;
}
</style>