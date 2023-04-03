<template>
    
    <div class="login">
        <div class="login-left">
            <section class="login-left-title">
                <h2>Welcome Login</h2>
                <p>We're so excited to see you again!</p>
            </section>
            <a-form class="form"  :model="userForm" :rules="rules" ref="formRef" name="custom-validation"
            @finish="validateSuccess" @finishFailed="validateError">
                <div>
                    <span>Email or phone number</span>
                    <a-form-item name="email" has-feedback><a-input v-model:value="userForm.email" type="text"
                            placeholder="请输入邮箱"></a-input></a-form-item>
                </div>
                <div>
                    <span>Password</span>
                    <a-form-item name="password" has-feedback><a-input v-model:value="userForm.password" type="password"
                            placeholder="请输入最大长度为30的密码"></a-input></a-form-item>
                    <a href="">Forget your password</a>
                </div>
                <!-- <div class="btnLogin"> -->
                    <a-button type="primary" html-type="submit">Submit</a-button>
                    <!-- <span>Log in</span> -->
                    <!-- <div @click="testGetBtn"> test</div> -->
                <!-- </div> -->
                <span class="login-left-lastSpan">Don't have an account?<a @click="goToRegister">Sign up</a></span>
            </a-form>
        </div>
        <div class="login-right">123</div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { verifyLoginInfo } from '@/utils/api/user'
import { userApi } from '@/types/api';
import type { Rule } from 'ant-design-vue/es/form'
import { da } from 'element-plus/es/locale';
import { message } from 'ant-design-vue';
import {StorageHandler,StorageType} from '@/libs/storage'

/**
 * 数据
 * emit 
 * userForm 表单内容
 * userStore
 * rules 验证规则 validatePass
 */
const storage = new StorageHandler()
const emit = defineEmits(['clickSignUp'])
const reg = {
    emailRe: /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
}
const route = useRouter()
const userForm = reactive<User.verify_login_user>({
    email: '',
    password: ''
})
watch(()=>userForm,(newo,od)=>{
    console.log(newo)
})
let validatePass = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('Please input the email');
    } else {
        if (!reg.emailRe.test(value)) {
            // console.log(value)
            return Promise.reject('请输入正确的邮箱格式')
        }
    }
    return Promise.resolve();
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
};
const rules: Record<string, Rule[]> = {
    email: [{ required: true, validator: validatePass, trigger: 'change' }],
    password: [{ validator: validatePass2, trigger: 'change' }],
    //   age: [{ validator: checkAge, trigger: 'change' }],
};
/**
 * 方法
 * clickBtn 点击登录验证
 * validateSuccess 点击登录 验证成功的回调函数
 * validateError 点击登录 验证失败的回调函数
 */

const goToRegister = () => {
    route.push({
        name: "entrance",
        params: {
            operate: 'register'
        }
    })
    emit('clickSignUp')
}

const validateSuccess = async() =>{

    const {data:data} = await verifyLoginInfo(userForm)
    // const result = data.data
    // console.log(data)
    if (data.message == 'error') message.error('账号或者密码错误！')
    else{
        message.success('验证成功')
        storage.setItem(StorageType.Local,'token',data.token)
        route.push({
            name:'master'
        })
    }
    
}
const validateError = ()=>{
    console.log('error')
}

// const  clickBtn =async ()=>{
//     const data = await getUserInfo(accountForm)
//     // console.log(data.data)
//     if (data.code == true) {
//         Message.success('登录成功，即将跳转')
//         //pinia设置user
//         userStore.$patch({
//             user:data.data
//         })
//         //token 存入本地
//         await userStore.saveUserInfo(userStore.user)
//         storageHandler.setItem(StorageType.Local,'token',userStore.user.token)
//         router.push('/')
//     }else{
//         Message.error('账号或密码错误')
//     }
// }

// onMounted(()=>{
//     console.log(getUserInfo(accountForm))
// })
</script>

<style scoped lang="less">
div:has(.login) {
    text-align: center;
}

.login {
    // width: 1000px;
    visibility: visible;
    // display: inline-block;
    // height: 100vh;
    // background-color: red;
    // border: 1px solid rgb(0,0,0);
    // background-image: url('@/assets/img/R-C.jpg');
    // background-size: 100vw 100vh;

    // border-radius: 10px;
    margin: 0 auto;

    >* {
        display: inline-block;

    }

    .login-left {
        text-align: center;
        background-color: #EADDCA;

        visibility: visible;
        width: 500px;
        // background-color: rgb(255, 255, 255);
        border-radius: 15px;
        // height: 100%;
        border: 1px solid #f6f4f4;

        >.login-left-title {
            >p {
                color: rgb(102, 102, 102);
                font-weight: 550;
            }
        }

        >.form {
            >div {
                margin-top: 20px;
                padding: 0px 38px 0 38px;

                span {

                    display: block;
                    text-align: left;
                    color: rgb(102, 102, 102)
                }

                input {
                    width: 416px;
                    height: 40px;
                    border: 2px solid #e6e6e6;
                    border-radius: 11px;
                }

                >a {
                    text-align: left;
                    display: block;
                    text-decoration: underline;
                    color: #111111;
                    font-weight: 600;

                }
            }

            >.btnLogin {
                width: 424px;
                height: 49px;
                // border: 2px solid #e6e6e6;
                border-radius: 34px;
                background-color: #c3c3c3;
                margin: 0 auto;
                margin-top: 30px;
                padding: 0;

                &:hover {
                    // background-color: blue;
                    background-color: #E5AA70;
                    cursor: pointer;
                }

                span {
                    position: relative;
                    top: 50%;
                    text-align: center;
                    transform: translateY(-50%);
                    /* vertical-align: middle; */
                    font-size: 19px;
                    color: rgb(255, 255, 255);
                }
            }
        }

        .login-left-lastSpan {
            margin-top: 54px;
            display: block;

            a {
                text-decoration: underline;
                color: rgb(0, 0, 0);
                font-weight: 550;
            }
        }
    }

    .login-right {
        display: none;
        width: 500px;
        height: 100%;
    }
}
</style>