<template>
    <el-affix :offset="10" target="body">
        <Transition name="head">
            <div class="header-box">
                <el-menu class="right-box">
                    <el-menu-item>Sherrynan</el-menu-item>
                </el-menu>
                <el-menu mode="horizontal" class="right-box">
                    <el-menu-item><router-link :to="{ name: 'master' }">首页</router-link><span></span></el-menu-item>
                    <el-menu-item><router-link :to="{ name: 'daily' }">日常RECORD</router-link></el-menu-item>
                    <el-menu-item><router-link :to="{ name: 'admin' }" target="_blank">ADMIN</router-link></el-menu-item>
                    <el-menu-item><router-link :to="{ name: 'article' }">文章</router-link></el-menu-item>
                    <el-menu-item>关于作者</el-menu-item>

                    <el-sub-menu index="2" class="personal-drop-down">
                        <template #title>
                            <img :src="returnImg('brian.png')" class="personal-img" alt="">
                        </template>
                        <el-menu-item><router-link
                                :to="{ name: 'entrance', params: { operate: 'login' } }">登录</router-link></el-menu-item>
                        <el-menu-item>个人中心</el-menu-item>
                        <el-menu-item>前往后台</el-menu-item>
                        <el-menu-item @click="exitAccount">退出</el-menu-item>
                    </el-sub-menu>

                </el-menu>
            </div>
        </Transition>
    </el-affix>
</template>

<script setup lang="ts">
import { StorageHandler, StorageType } from '@/libs/storage';
import { returnImg } from '@/utils/img/imgInVite'
import router from '@/router';


/**
 * methods
 * exitAccount 退出账号
 */
const exitAccount = () => {
    const storage = new StorageHandler()
    //清除token
    storage.remove(StorageType.Local, 'token')
    router.push({ name: 'entrance', params: { operate: 'login' } })

}
</script>

<style scoped lang="less">
.header-box {
    width: 100%;
    display: flex;

    justify-content: space-between;
}

//定义hover时候的动画
:deep(.el-sub-menu__title:hover) {
    background-color: transparent !important;
}

.right-box {
    :deep(.el-menu-item) {
        &:hover {
            background-color: transparent;
            color: #88add3 !important;
        }

        &::after {
            content: '';
            position: absolute;
            left: -100%; //藏在左下角
            bottom: 0;
            width: 100%;
            height: 6px;
            transition: all 0.3s;
            background-color: transparent;

        }

        &:hover::after {
            background-color: #88add3;
            transform: translateX(100%);
        }

    }
}

/**
    下拉框
*/
.personal-drop-down {

    margin: 0 20px;

    .personal-img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }
}
</style>