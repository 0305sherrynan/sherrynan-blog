<template>
    <div class="addarti-root">
        <div class="basicInfo">
            <div class="left-cover">
                <div @click="uploadCover" v-if="!isUploadCover"><span>上传封面</span></div>
                <img :src="coverSrc" alt="" v-else>
                <input type="file" name="" id="" accept="image/*" ref="fileRef" style="display: none;"
                    @change="handleFileChange">
            </div>
            <div class="right-form">
                <a-form :model="formData" ref="formRef"> 
                    <a-form-item label="标题" name="title"><a-input type="text" v-model:value="formData.title" ></a-input></a-form-item>
                    <a-form-item label="简述" name="description"><a-input type="text" v-model:value="formData.description" ></a-input></a-form-item>
                    <a-form-item label="分类" name="sort">
                        <a-select ref="select" v-model:value="formData.sort" style="width: 120px">
                            <a-select-option value="html">html</a-select-option>
                            <a-select-option value="javascript">javascript</a-select-option>
                            <a-select-option value="css">css</a-select-option>
                            <a-select-option value="vue">vue</a-select-option>
                            <a-select-option value="leetcode">leetcode</a-select-option>
                        </a-select></a-form-item>
                    <a-form-item label="时间" name="time"> 
                            <el-date-picker v-model="formData.time" type="datetime"
                            value-format="YYYY-MM-DD HH:mm:ss"  /></a-form-item>
                </a-form>
            </div>
        </div>
        <div class="vitalInfo">
            <v-md-editor v-model="formData.info" height="400px"></v-md-editor>
        </div>
        <div class="btn-box">
            <a-button type="primary" @click="submitForm">提交</a-button>
            <a-button></a-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import VueMarkdownEditor, { xss } from '@kangc/v-md-editor';
import {submitOneArticleInfo} from '@/utils/api/article';
import { randomId } from '@/utils/random/randomId';

/**
 * data
 * fileRef 绑定input type ：file 框
 * isUploadCover 是否已经上传完毕图片
 * upLoadFile 上传后的input文件
 * formRef 绑定form表单
 * formDatainterface 表单数据的接口
 * formData 表单数据
 */
const fileRef = ref<HTMLInputElement>()
const isUploadCover = ref<boolean>(false)
const upLoadFile = ref<File>()
const coverSrc = ref<string>('')

const formRef = ref<HTMLFormElement>()
interface formDatainterface {
    title: string
    description: string
    time: string
    info: string
    sort: string
    cover:string
}
const formData = reactive<formDatainterface>({
    title: '',
    description: '',
    time: '',
    info: '',
    sort: '请选择',
    cover:''
})
/**
 * method
 * uploadCover 点击上传
 * resetFormdata 重置表单 
 * handleFileChange
 * submitForm 提交表单
 */
const handleFileChange = async (e: Event) => {
    const files = (e.target as HTMLInputElement).files
    if (files) {
        isUploadCover.value = true
        upLoadFile.value = files[0]
        coverSrc.value = await URL.createObjectURL(upLoadFile.value)

    }
}
const uploadCover = (): void => {
    fileRef.value?.click()
}
const resetFormdata = ():void => {
    formRef.value?.resetFields()
    formData.info = ''
}
const submitForm = async()=>{
    let reader = new FileReader()
    if (upLoadFile.value) {
    reader.readAsDataURL(upLoadFile.value);
    }
    reader.addEventListener("load", function () {
         const cover = reader.result?.toString().replace(/^data:image\/\w+;base64,/, '')
         formData.cover = cover as string
         console.log(cover)
  }, false);
    const  infoHTML =  xss.process(VueMarkdownEditor.vMdParser.themeConfig.markdownParser.render(formData.info))
    console.log(formData,infoHTML)
    const data = await submitOneArticleInfo(Object.assign(formData,{info:infoHTML,article_id:randomId(-10)}))
    //重置表单
    resetFormdata()
}
</script>

<style scoped lang="less">
.addarti-root {
    width: 100%;

    .basicInfo {
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: row;

        .left-cover {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30%;
            font-size: 20px;
            color: black;
            line-height: 20px;
            &:hover{
                cursor: pointer;
            }
            >img {
                width: 140px;
                height: 140px;
            }
        }

        .right-form {
            width: 70%;

        }
    }

    .vitalInfo {}
}
</style>