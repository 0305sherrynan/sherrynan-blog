<template>
    <div>
        <div class="login">
            <div class="login-left">
                <section class="login-left-title">
                    <h2>Welcome Register</h2>
                    <p>We're so excited to see you again!</p>
                </section>
                <form action="">
                    <div>
                        <span>Email</span>
                        <input type="text">
                    </div>
                    <div>
                        <span>NickName</span>
                        <input type="text">
                    </div>
                    <div>
                        <span>Password</span>
                        <input type="password">
                        <!-- <a href="">Forget your password</a> -->
                    </div>
                    <div class="btnLogin">
                        <span>Sign up</span>
                    </div>
                    <span class="login-left-lastSpan">Does exist the account? <a @click="goToRLogin">Sign in</a></span>
                </form>
            </div>
            <div class="login-right">123</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
// import {registerAccount} from '@/utils/api/user'
// import { userApi } from '@/types/api';
// import Message from '@/libs/zwzUI/message';
import router from '@/router';
// import {useUserStore} from '@/store/user'
import { useRouter } from 'vue-router'
/**
 * 数据
 * accountForm 表单内容
 * userStore
 */
const route = useRouter()
const emit = defineEmits(['clickSignUp'])
// const registerForm = reactive<userApi.registerAccount>({
//     account:'',
//     password:'',
//     nickname:''
// })
// const userStore = useUserStore()
/**
 * 方法
 * clickBtn 点击登录验证
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
    display: inline-block;
    height: 500px;
    // background-color: red;
    // border: 1px solid rgb(0,0,0);
    border-radius: 10px;
    margin: 0 auto;

    >* {
        display: inline-block;

    }

    .login-left {
        background-color: #EADDCA;

        visibility: visible;
        // width: 500px;
        // background-color: rgb(255, 255, 255);
        border-radius: 15px;
        width: 500px;
        // background-color: rgb(255, 255, 255);
        height: 100%;
        border: 1px solid #f6f4f4;

        >.login-left-title {
            >p {
                color: rgb(102, 102, 102);
                font-weight: 550;
            }
        }

        >form {
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
}</style>