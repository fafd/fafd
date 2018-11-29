<template>
    <div id='foot_guide'>
        <section class="guide_item">
            <span>外卖</span>
        </section>
        <section class="guide_item">
            <span>搜索</span>
        </section>
        <section class="guide_item">
            <span>订单</span>
        </section>
        <section class="guide_item">
            <span>我的</span>
        </section>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss">
    @import "../style/minx.scss";
    #foot_guide{
        position: fixed;
        left: 0;
        bottom:0;
        @include wh(100%,2rem);
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        background-color: $fc;
        .guide_item{
            @include sc(0.5rem,#DCDCDC);
            line-height: 3rem;
        }
    }
</style>
