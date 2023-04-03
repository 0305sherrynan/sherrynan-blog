<template>
    <div>
        <div class="login">
            <div class="login-left">
                <section class="login-left-title">
                    <h2>Welcome Register</h2>
                    <p>We're so excited to see you again!</p>
                </section>
                <a-form class="form" :model="registerForm" :rules="rules" ref="formRef" name="custom-validation"
                    @finish="validateSuccess" @finishFailed="validateError">
                    <div>
                        <span>Email </span>
                        <a-form-item name="email" has-feedback><a-input v-model:value="registerForm.email" type="text"
                                placeholder="请输入邮箱"></a-input></a-form-item>
                    </div>
                    <div>
                        <span>Password</span>
                        <a-form-item name="password" has-feedback ref="formRef"><a-input v-model:value="registerForm.password" type=""
                                placeholder="请输入最大长度为30的密码"></a-input></a-form-item>

                    </div>
                    <div>
                        <span>NickName</span>
                        <a-form-item name="nickname" has-feedback><a-input v-model:value="registerForm.nickname" type="text"
                                placeholder="请输入最大长度为30的密码"></a-input></a-form-item>

                    </div>
                    <!-- <div class="btnLogin"> -->
                    <a-button type="primary" html-type="submit">Sign Up</a-button>
                    <!-- <span>Log in</span> -->
                    <!-- <div @click="testGetBtn"> test</div> -->
                    <!-- </div> -->
                    <span class="login-left-lastSpan">Does exist the account? <a @click="goToRLogin">Sign in</a></span>
                </a-form>
            </div>
            <div class="login-right">123</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted,ref } from 'vue';

import { useRouter } from 'vue-router'
import type { Rule } from 'ant-design-vue/es/form'
import { judgeEmailRegisted, registerAccount } from '@/utils/api/user'
import { message } from 'ant-design-vue';
import {randomId} from '@/utils/random/randomId'
/**
 * 数据
 * formRef
 * registerForm 表单内容
 * userStore
 * rules 表单规则 validatePass
 */
const formRef = ref<HTMLFormElement>()
const reg = {
    emailRe: /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
}
const route = useRouter()
const emit = defineEmits(['clickSignUp'])
const registerForm = reactive<User.verify_register_user>({
    user_id: '',
    password: '',
    nickname: '',
    email: ''
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
let validatePass3 = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('Please input the nickname');
    } else {
        const length = value.length
        if (length > 20) {
            // console.log(value)
            return Promise.reject('请输入小于长度为20的昵称')
        }
    }
    return Promise.resolve();
};
const rules: Record<string, Rule[]> = {
    email: [{ required: true, validator: validatePass, trigger: 'change' }],
    password: [{ validator: validatePass2, trigger: 'change' }],
    nickname: [{ validator: validatePass3, trigger: 'change' }],
};
// const userStore = useUserStore()
/**
 * 方法
 * validateSuccess 验证成功的回调
 */
const goToRLogin = () => {
    route.push({
        name: "entrance",
        params: {
            operate: 'login'
        }
    })
    emit('clickSignUp')
}
const validateSuccess = async () => {
    console.log(registerForm)
    const { data: data } = await judgeEmailRegisted(registerForm.email)
    if (data.message == 'error'){
        message.warning('该邮箱已被注册！')
        formRef.value?.resetFields()
    }
    else {
        const { data: data } = await registerAccount(Object.assign(registerForm,{user_id:randomId(8)}))
        if (data.message == 'success') {
            message.success('成功注册')
            route.push({
                name: "entrance",
                params: {
                    operate: 'register'
                }
            })
            emit('clickSignUp')
        }
    }
    // console.log(data)
}
const validateError = () => {

}
// const  clickBtn =async ()=>{
//     const data = await registerAccount(registerForm)
//     console.log(data)
//     if (data.code == true) {
//         Message.success('注册成功！即将前往登录页面')
//         // const reallyObj = data.data
//         // const
//         //pinia设置user
//         // userStore.$patch({
//         //     user:data.data
//         // })
//         router.push('/login')
//     }else{
//         Message.error('注册失败！检查是否已经注册')
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