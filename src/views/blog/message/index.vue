<template>
    <div>
        <Banner></Banner>

        <div class="comment-layout">
            <div class="leftComment">
                <comment-area></comment-area>
            </div>
            <div class="rightTip">
                <span>小Tips：</span>
                <span>有什么想和博主说的，或者想要交流的都可以留言</span>
                <span>欢迎大家畅所欲言</span>
                <span>记得文明交流哦~</span>
                <span>
                    联系邮箱：2642198391@qq.com
                </span>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Banner from '@/components/Banner/Banner.vue'
import LoadingComponent from '@/components/Loading/index.vue'

const CommentArea = defineAsyncComponent(
    {
        // 加载函数() => 

        loader: () => import('./components/CommentArea.vue'),

        // 加载异步组件时使用的组件
        loadingComponent: LoadingComponent,
        // 展示加载组件前的延迟时间，默认为 200ms
        delay: 200,

        // 加载失败后展示的组件
        errorComponent: LoadingComponent,
        // 如果提供了一个 timeout 时间限制，并超时了
        // 也会显示这里配置的报错组件，默认值是：Infinity
        timeout: 3000,
        suspensible: false,
    }
)

</script>

<style scoped lang="less">
.comment-layout {
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: space-evenly;

    .leftComment {
        width: 500px;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    .rightTip {
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        width: 300px;

        align-self: flex-start;
        display: flex;
        flex-direction: column;
        padding: 20px;

        >* {

            // margin-top: 15px;
            &:not(:first-child) {
                margin-top: 8px;
            }

            &:first-child {
                font-size: 14px;
                --tw-text-opacity: 1;
                color: rgba(0, 153, 255, var(--tw-text-opacity));
            }

            &:last-child {
                --tw-text-opacity: 1;
                color: rgba(255, 127, 80, var(--tw-text-opacity));
            }
        }
    }
}
</style>