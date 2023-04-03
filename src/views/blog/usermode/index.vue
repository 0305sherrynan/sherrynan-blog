<template>
    <div class="login-regi-root">
        <Transition name="login">
            <Login v-show="operateFace == 'login'" @clickSignUp="changeOperateFace"></Login>
        </Transition>
        <Transition name="regi">
            <Register v-show="operateFace == 'register'" @clickSignUp="changeOperateFace"></Register>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import Login from './components/Login.vue';
import Register from './components/Register.vue'
import {useRouter} from 'vue-router'
import { ref, watch } from 'vue';
/**
 * data 
 * route
 * operateFace 切换login和register
 */ 
const route = useRouter()
const operateFace = ref(route.currentRoute.value.params.operate)
/**
 * method 
 * changeOperateFace
 */
// watch(()=>route.currentRoute.value.params.operate,(newVal:string,oldVal)=>{
//     operateFace.value = newVal
// })
// watch(operateFace,(newVal,oldVal)=>{
//     route.currentRoute.value.params.operate = newVal
// })
const changeOperateFace = ()=>{
    if (operateFace.value == 'login')  operateFace.value   = 'register'
    else    operateFace.value  = 'login'
    console.log(operateFace.value)
    // operateFace.value = 'register'
}
console.log(operateFace.value)
</script>

 <style scoped lang="less">
.login-regi-root{
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url('@/assets/img/R-C.jpg');
    background-size: 100vw 100vh;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    >*{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}

.login-enter-from{
    // translate: 100px 100px;
}
.login-enter-active{
    transition:  1s ease;
}
.login-leave-active{
    transition:  1s ease;
}
.login-leave-to{
    opacity: 0;
    translate:  -300px 0;
}

.regi-enter-from{
    translate: 500px 0;
    opacity: 0;
}
.regi-enter-to{
    // translate: 100px 100px;
    
}
.regi-enter-active{
    transition:  1s ease;
}
.regi-leave-active{
    transition:  1s ease;
}
.regi-leave-to{
    opacity: 0;
    translate:  -300px 0;
}
</style>