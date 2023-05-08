<!-- <template>
    <div class="middle-box">

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.middle-box {
    width: 1100px;
    height: 1000px;
    margin: 0 auto;
    background-color: black;
    @media screen {
        @media (max-width:1100px) {
            width: 100%;
        }
        
    }
}
</style> -->
<template>
     <Banner></Banner>
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
          <a-menu-item key="1">
            <pie-chart-outlined />
            <span><router-link :to="{name:'focus'}">全部关注</router-link></span>
          </a-menu-item>
          <a-menu-item key="2">
            <desktop-outlined />
            <span>我的粉丝</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0" />
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
           <Suspense>
            <router-view></router-view>
           </Suspense>
          </div>
        </a-layout-content>

      </a-layout>
    </a-layout>
  </template>
  <script lang="ts" setup>
  import Banner from '@/components/Banner/Banner.vue'
  import {
    PieChartOutlined,
    DesktopOutlined,

  } from '@ant-design/icons-vue';
  import { ref } from 'vue';
  
   
        const collapsed = ref<boolean>(false)
        const selectedKeys = ref<string[]>(['1'])
      
    
  
  </script>
  <style scoped>
  :deep(.ant-layout-sider-children){
    background-color: white;
  }
  :deep(.ant-layout-sider-trigger){
    background: #91a1b1;
  }
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(89, 244, 32, 0.3);
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme='light'] .site-layout .site-layout-background {
    background: #fff;
  }
  </style>
  