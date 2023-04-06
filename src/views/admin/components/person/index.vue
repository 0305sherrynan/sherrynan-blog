<template>
    <a-card style="width: 100%" :tab-list="tabListNoTitle" :active-tab-key="noTitleKey"
        @tabChange="(key: string) => onTabChange(key, 'noTitleKey')">
        <div>
            <div class="basicInfo" v-show="noTitleKey == 'infomation'">
                <div class="left-cover">
                    <div @click="uploadCover" v-if="!isUploadCover">
                        <span v-if="!formData.coverimg">上传封面</span>
                        <img :src="returnDBImg(formData.coverimg as string)" alt="" v-else>
                    </div>
                    <img :src="coverSrc" alt="" v-else>
                    <input type="file" name="" id="" accept="image/*" ref="fileRef" style="display: none;"
                        @change="handleFileChange">
                </div>
                <div class="right-form">
                    <a-form :model="formData" ref="formRef">
                        <a-form-item label="昵称" name="nickname"><a-input type="text"
                                v-model:value="formData.nickname"></a-input></a-form-item>
                    </a-form>
                </div>
                <div v-show="noTitleKey == 'infomation'" class="basic-btn"><a-button type="primary" @click="submitForm">提交</a-button></div>
            </div>
            
            <div class="modifyPassword" v-show="noTitleKey == 'password'">
                <a-form :model="formDataPas" ref="formPasRef" :rules="rules"  >
                    <a-form-item label="旧密码" name="oldpas" has-feedback><a-input type="text"
                            v-model:value="formDataPas.oldpas"></a-input></a-form-item>
                    <a-form-item label="新密码" name="newpas" has-feedback ><a-input type="text"
                            v-model:value="formDataPas.newpas"></a-input></a-form-item>
                    <a-form-item label="确认密码" name="newagainpas" has-feedback><a-input type="text"
                            v-model:value="formDataPas.newagainpas"></a-input></a-form-item>
                </a-form>
                <div><a-button type="primary" @click="submitFormpas">修改密码</a-button></div>
            </div>

        </div>
        
        <template #tabBarExtraContent>
            <a href="#">More</a>
        </template>
    </a-card>
</template>
<script lang="ts" setup>
import { HomeOutlined } from '@ant-design/icons-vue';
import { reactive, ref, toRaw } from 'vue';
import { getPersonInfo, modifyPersonInfo,modifyPasInfo } from '@/utils/api/user'
import { message } from 'ant-design-vue';
import { returnDBImg } from '@/utils/img/imgInVite'
import type { Rule } from 'ant-design-vue/es/form'
import { assert } from '@vue/compiler-core';


/**
 * formRef 修改信息的表单ref
 * formPasRef 修改密码的表单ref
 * personalInfo 获取用户的信息
 * formDatainterface 表单接口
 * formData 表单信息 一开始初始值为请求后的用户数据
 * formDataPasinterface 修改密码的表单接口
 * formDataPas 表单信息 密码修改
 * rules 密码修改表单的rules validatePass ...
 * 
 */
const personalInfo = await getPersonInfo()
const formRef = ref<HTMLFormElement>()
interface formDatainterface {
    nickname: string
    password: string
    coverimg: string | null
    email: string

}
interface formDataPasinterface {
    oldpas: string
    newpas: string
    newagainpas: string
}
const formDataPas = reactive<formDataPasinterface>({
    oldpas: '',
    newpas: '',
    newagainpas: ''
})
const formData = reactive<formDatainterface>({
    ...personalInfo.data
})
const fileRef = ref<HTMLInputElement>()
const isUploadCover = ref<boolean>(false)
const upLoadFile = ref<File>()
const coverSrc = ref<string>('')
let validatePass = async (_rule: Rule, value: string) => {
      if (value === '') {
        return Promise.reject('Please input the password');
      } else {
        console.log(formData.password)
        if (value !== formData.password) {
        //   formRef.value.validateFields('checkPass');
        return Promise.reject('密码错误')
        }
        return Promise.resolve();
      }
    };
let validatePass2 = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('Please input the password');
    } else {
        const length = value.length
        if (length > 30)
            return Promise.reject('请输入小于长度为30的密码')
    }
    return Promise.resolve();
}
let validatePass3 = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('Please input the password again');
    } else {
        if (value !== formDataPas.newpas)
            return Promise.reject('请确认两次数据相同')
    }
    return Promise.resolve();
}
const rules: Record<string, Rule[]> = {
        oldpas: [{ required: true, validator: validatePass, trigger: 'change' }],
        newpas: [{ validator: validatePass2, trigger: 'change' }],
        newagainpas: [{ validator: validatePass3, trigger: 'change' }],
    };

const tabList = [
    {
        key: 'tab1',
        tab: 'tab1',
    },
    {
        key: 'tab2',
        tab: 'tab2',
    },
];
const contentList = {
    tab1: 'content1',
    tab2: 'content2',
};
/**
 * data
 * noTitleKey 当前激活的card的key
 * tabListNoTitle tab标题和key信息
 */
const noTitleKey = ref('infomation');
const tabListNoTitle = [
    {
        key: 'infomation',
        tab: '修改信息',
    },
    {
        key: 'password',
        tab: '修改密码',
    },
];
const key = ref('tab1');

/**
 * method
 * onTabChange 切换tab
 * uploadCover 点击上传图片
 * resetFormdata 重置表单 
 * handleFileChange
 * submitForm 提交修改信息后的表单
 * submitFormpas 提交修改密码后的表单
 */
const onTabChange = (value: string, type: string) => {
    if (type === 'key') {
        key.value = value;
    } else if (type === 'noTitleKey') {
        noTitleKey.value = value;
    }
};

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
const resetFormdata = (): void => {
    formRef.value?.resetFields()

}
const submitForm = async () => {
    let reader = new FileReader()
    if (upLoadFile.value) {
        reader.readAsDataURL(upLoadFile.value);
    }
     reader.addEventListener("load",  async function () {
        // IMGUrl = reader.result
        const cover = reader.result?.toString().replace(/^data:image\/\w+;base64,/, '')
        formData.coverimg = await cover as string
        // formDataToRaw = toRaw(formData)
        // console.log(formDataToRaw.coverimg)
    }, false);
    //注意一定要在loadend添加请求，不然load里面监听的函数内部尚未完成，便发起请求，导致数据不全
    reader.addEventListener("loadend",function (){
        // console.log('toraw',formDataToRaw)
         modifyPersonInfo(formData).then(() => {
        message.success('修改成功')
    }).catch((err) => {
        message.error(err)
    })
    })
  

    //重置表单
    // resetFormdata()
}
const submitFormpas = async() => {
    // console.log(13213)
    await modifyPasInfo({newPas:formDataPas.newpas}).then(() => {
        message.success('修改密码成功')
    }).catch((err) => {
        message.error(err)
    })
}


</script>
<style scoped lang="less">
.modifyPassword{
    width: 70%;
    display: flex;
    justify-content: space-around;
}
.basicInfo {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    .left-cover {
        display: flex;
        // text-align: center;
        justify-content: center;
        align-items: center;
        // align-content: center;
        width: 30%;
        // background-color: blue;
        font-size: 20px;
        color: black;
        line-height: 20px;

        &:hover {
            cursor: pointer;
        }

        img {
            width: 140px;
            height: 140px;
        }
    }

    .right-form {
        width: 30%;
        display: flex;
        align-items: center;
        // background-color: red;

    }
    .basic-btn{
        width: 50%;
    }
}
</style>
  
  