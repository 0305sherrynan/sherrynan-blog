<template>
    <div class="authorcard-box">
        <div class="authorcard-cover"><img :src="returnDBImg('tjr1gu84.png')" alt=""></div>
        <div class="author-info-box">
            <img :src="returnDBImg(replyedInfo.coverimg)" alt="" style="width: 48px;height: 48px;border-radius: 50%;">
            <div class="author-info-right-box">
                <div class="author-info-nickname-box">
                    <span>{{ replyedInfo.nickname }}</span>
                </div>
                <div class="author-info-signa-box">
                    <span>{{ replyedInfo.signature }}</span>
                </div>
                <div class="author-two-btn-box">
                    <a-button type="primary" @click="focusUser" >关注</a-button>
                    <!-- <a-button type="normal" @click="focusUser" v-else>已关注</a-button> -->
                    <a-button>发信息</a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { postFocusUser,focusVerify } from '@/utils/api/fans'
import { returnDBImg } from '@/utils/img/imgInVite'
import { message } from 'ant-design-vue'

interface propsInterface {
    replyedInfo: {
        user_id: string
        nickname: string
        coverimg: string
        gender: string
        signature: string
    }
}

const props = defineProps<propsInterface>()



/**
 * method
 * focusUser 关注 or 取消关注
 */
const focusUser = async()=>{
    let messageState:string = ''
    try {
        const {data:{message:verify}} = await focusVerify(props.replyedInfo.user_id)
        if (verify == '未关注'){
            console.log('ing')
            const {data:{message}} =  await postFocusUser(props.replyedInfo.user_id)
            messageState = message
        }

    } catch (error) {
        
    }finally{
        if (messageState == '关注成功') message.success('关注成功')
        else if  (messageState == '关注失败') message.error('关注失败')
        else message.warn('你已经关注了')
    } 
}
</script>

<style scoped lang="less">
.authorcard-box {
    border-radius: 10px;
    border: 1px solid #e8e8e8;
    background-color: white;
    border-radius: 5px;
    width: 400px;
    height: 250px;

    // z-index: -999;
    .authorcard-cover {
        width: 100%;
        height: 36%;

        >img {
            width: 100%;
            height: 100%;
        }
    }

    .author-info-box {
        display: flex;
        flex-direction: row;
        padding: 7px;
        >img {
            margin-left: 11px;
            width: 50px;
            height: 50px;
        }

        .author-info-right-box {
            padding: 10px;
            >*{
                &:not(:first-child){
                    padding: 10px 0;
                }
            }
            .author-info-nickname-box {
                span {
                    font-size: 19px;
                    font-weight: 500;
                }

            }

            .author-info-signa-box {
                color: rgb(148, 153, 160);
                font-weight: 600;
            }


            .author-two-btn-box {

                // overflow: hidden;
                >* {
                    &:last-child {
                        color: rgb(105, 109, 116);
                        margin-left: 9px;
                    }
                }

                >button {
                    width: 100px;
                    height: 31px;
                    font-weight: 600;

                    &:first-child {
                        background-color: rgb(0, 174, 236);
                    }

                    border-radius: 5px;
                }

            }
        }

    }

}</style>