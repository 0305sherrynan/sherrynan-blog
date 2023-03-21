<template>
    <div>
        <div class="daily-banner" style="animation: header-effect 1s;">

        </div>
        <time-record class="wrap"></time-record>
    </div>
</template>

<script setup lang="ts">
import TimeRecord from '@/components/Daily/TimeRecord.vue'
</script>

<style scoped lang="less">
.daily-banner{
    width: 100%;
    height: 50vh;
    background: url('@/assets/img/sky.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.wrap{
    position: relative;
    z-index: 10;
    &::after{
        content: '';
        position: absolute;
        // top: 50vh;
        width: 5px;
        height: 100%;
        background-color: rgb(130, 201, 220);
        z-index: -1;
    }
}
</style>