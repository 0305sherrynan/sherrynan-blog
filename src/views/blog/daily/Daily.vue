<template>
    <div>
        <Banner></Banner>
        <Suspense>
            <div class="timerecord-outbox">
                <time-record class="wrap"></time-record>
            </div>
            <template #fallback></template>
        </Suspense>
    </div>
</template>

<script setup lang="ts">
import TimeRecord from '@/components/Daily/TimeRecord.vue'
import Banner from '@/components/Banner/Banner.vue';
</script>

<style scoped lang="less">
// .root{
//     width: 100px;
// }
.wrap{
    position: relative;
    z-index: 10;
    //中间的竖线
    &::after{
        content: '';
        position: absolute;
        // top: 50vh;
        width: 5px;
        height: 100%;
        background-color: rgb(204, 204, 204);
        z-index: -1;
    }
}
.timerecord-outbox{
    background-image: url('@/assets/img/ideaBrian.jpg');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>