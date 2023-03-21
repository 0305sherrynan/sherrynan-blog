<template>
    <div class="root">
        <!-- <div>123</div> -->
        <div class="left-box">
            <div class="info-card">
                <img :src="returnImg('brian.png')" alt="">
                <span>Sherrynan</span>
                <div class="info-data">
                    <div>
                        <span>文章</span>
                        <span>1</span>
                    </div>
                    <div>
                        <span>获赞</span>
                        <span>2</span>
                    </div>
                </div>
                <div class="button-bat "><span>我是谁</span></div>
                <div class="button-linear"><span>前端笔记</span></div>
            </div>
        </div>
        <div class="right-box">
            <div class="welcome-ad">
                <img :src="returnIcon('laba.png')" alt="">
                <span>欢迎来到我的博客！一起学习前端</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { returnImg, returnIcon } from '@/utils/img/imgInVite';



</script>

<style scoped lang="less">
.root {
    display: flex;
    justify-content: space-between;
    // 使用传统盒子模型 让padding算入width 不用自行计算width-content=padding了
    box-sizing: border-box;
    padding: 55px;
    // overflow: hidden;
    width: 100%;
    height: 1000px;
    background-color: white;

    /**
    左侧盒子
     */
    .left-box {

        width: 300px;
        height: 300px;

        .info-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 8%;
            width: 100%;
            height: 100%;
            background: linear-gradient(-45deg, #e8d8b9, #eccec5, #a3e9eb, #bdbdf0, #eec1ea);
            background-size: 200% 200%;
            // opacity: 0;
            padding: 20px;
            text-align: center;

            >img {
                width: 103px;
                height: 100px;
                border-radius: 50%;
            }

            .info-data {
                display: flex;
                width: 100%;
                justify-content: space-evenly;

                >div {
                    // background-color: red;
                    text-align: center;

                    span {
                        display: block;
                    }
                }
            }

            .me-btn {
                font-size: 27px;
                line-height: 52px;
            }
        }
    }

    .right-box {
        order-radius: 8%;
        width: 800px;
        height: 300px;

        // background-color: red;
        .welcome-ad {
            display: flex;
            display: flex;
            // justify-items: center;
            align-items: center;
            width: 100%;
            height: 170px;
            border-radius: 1%;
            border: 2px dashed #cfcfcf;

            img {
                width: 30px;
                height: 30px;
                animation: moreBigMoreSmall 1s infinite;
                margin: 0 20px;
            }

            span {
                color: #bdbdf0;
            }
        }


    }
}
</style>