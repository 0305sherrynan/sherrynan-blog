<template>
    <div class="message-box">
        <div>
            <img :src="userInfo.coverimg?returnDBImg(userInfo.coverimg):returnDBImg('3mijx63g.png')" alt="" style="width: 50px;height: 50px;border-radius: 50%;">
        </div>
        <text-area :parentid="DataTypeJudgeParentID(userInfo)?userInfo.parentid:undefined"></text-area>
        
        <div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { returnDBImg } from '@/utils/img/imgInVite'
import TextArea from './TextArea.vue'
import {commentApi} from '#/api'
import {DataTypeJudgeParentID} from '@/utils/judge'

interface coverAndNickInterface {
    userInfo: User.get_personal_info | commentApi.getSonComentByid
    
}
/**
 * props
 */
const props = defineProps<coverAndNickInterface>()

</script>

<style scoped lang="less">
.message-box{
    display: flex;
    flex-direction: row;

}

</style>