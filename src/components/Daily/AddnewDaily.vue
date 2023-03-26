<template>
    <div class="demo-date-picker">
        <div class="container">
            <div class="block">
                <el-date-picker 
                v-model="submitTime" 
                type="datetime" 
                value-format="YYYY-MM-DD HH:mm:ss"
                placeholder="Pick a week" />
            </div>
        </div>
    </div>
    <v-md-editor v-model="text" height="400px"  :include-level="[2, 3]"></v-md-editor>
    <div class="btn-box">
        <a-button type="primary" @click="submitText">提交</a-button>
        <a-button>重置</a-button>
    </div>
</template>
<script lang="ts" setup>
import { ref ,watch} from 'vue'
import {submitOneDailyInfo} from '@/utils/api/daily'
// import { da } from 'element-plus/es/locale';
import VueMarkdownEditor, { xss } from '@kangc/v-md-editor';

// 调用方法将 markdown 转换成 html 并使用 xss 过滤



/**
 * data
 * submitTime 提交的时间 格式：2023-03-22 21:10:53
 */
let text = ref<string>('')
const submitTime = ref<string>('')
// const formData :Daily.Daily_Exclude_id = 
// watch(text,(newValue,oldValue)=>{
//     console.log(newValue,oldValue)
// })

/**
 * method  
 * submitText 提交单篇daily
 */
const submitText = async()=>{
    const html:string = xss.process(VueMarkdownEditor.vMdParser.themeConfig.markdownParser.render(text.value));
    console.log(html)
    const data = await submitOneDailyInfo(
                {description:html,submittime:submitTime.value})
                console.log(data)
}
</script>


  
<style scoped lang="less">
.demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
}

.demo-date-picker .block {
    padding: 30px 0;
    text-align: left;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
}

.demo-date-picker .block:last-child {
    border-right: none;
}

.demo-date-picker .container {
    flex: 1;
    border-right: solid 1px var(--el-border-color);
}

.demo-date-picker .container .block {
    border-right: none;
}

.demo-date-picker .container .block:last-child {
    border-top: solid 1px var(--el-border-color);
}

.demo-date-picker .container:last-child {
    border-right: none;
}

.demo-date-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}

.btn-box{
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
}
</style>