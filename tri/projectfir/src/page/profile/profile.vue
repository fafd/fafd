<template>
    <div class="profile_page">
        <head-top go-back="true" head-title="我的"></head-top>
        <nav class="profile_nav">
            <img src="" alt="" class="privateImage">
            <router-link :to="userInfo&&userInfo.user_id?'/profile':'/login'" class="profile-link">
                <div>
                    <p>登录/注册</p>
                    <p>暂无绑定手机号</p>
                </div>
                <div>
                    >
                </div>
            </router-link>
        </nav>
        <section class="info-data">
            <ul>
                <router-link :to="'/balance'" tag="li" class="info-data-link">
                    <!--parseInt()将括号里面的内容转化成数字 
                        .toFixed()保留几位小数的意思
                    -->
                    <span class="info-data-top"><b>{{parseInt(RMB).toFixed(2)}}</b>元</span>
                    <span class="info-data-bottom">我的余额</span>
                </router-link>
                <router-link :to="'/benifit'" tag="li" class="info-data-link">
                    <span class="info-data-top"><b>{{count}}</b>个</span>
                    <span class="info-data-bottom">我的优惠</span>
                </router-link>
                <router-link :to="'/point'" tag="li" class="info-data-link">
                    <span class="info-data-top"><b>{{pointNumber}}</b>分</span>
                    <span class="info-data-bottom">我的积分</span>
                </router-link>
            </ul>
        </section>
        <section class="profile-1reTe">
            <ul>
                <!--我的订单 其跳转的页面是我的balance.vue页面-->
                <router-link :to="'/balance'" tag="li" class="myorder">
                    <!--aside是用于放置小图标的-->
                    <aside></aside>
                    <div class="myorder-div">
                        <span>我的订单</span>
                        <span>></span>
                    </div>
                </router-link>
                <!--积分商城 其跳转的页面是我的point.vue页面-->
                <router-link :to="'/point'" tag="li" class="myorder">
                    <!--aside是用于放置小图标的-->
                    <aside></aside>
                    <div class="myorder-div">
                        <span>积分商城</span>
                        <span>></span>
                    </div>
                </router-link>
                <!--饿了么会员卡 其跳转的页面是我的benifit.vue页面-->
                <router-link :to="'/benifit'" tag="li" class="myorder">
                    <!--aside是用于放置小图标的-->
                    <aside></aside>
                    <div class="myorder-div">
                        <span>饿了么会员卡</span>
                        <span>></span>
                    </div>
                </router-link>
            </ul>
        </section>
        <!--会员中心和下载App 这里所有的跳转的路径都需要更改-->
        <section class="profile-1reTe">
            <ul>
                <router-link :to="'/benifit'" tag="li" class="myorder">
                    <!--aside是用于放置小图标的-->
                    <aside></aside>
                    <div class="myorder-div">
                        <span>会员中心</span>
                        <span>></span>
                    </div>
                </router-link>
                <router-link :to="'/benifit'" tag="li" class="myorder">
                    <!--aside是用于放置小图标的-->
                    <aside></aside>
                    <div class="myorder-div">
                        <span>下载饿了么APP</span>
                        <span>></span>
                    </div>
                </router-link>
            </ul>
        </section>
        <foo></foo>
    </div>
</template>
<script>
    import headTop from "../../components/head.vue";
    import foo from "../../components/foot.vue";
    import {mapState, mapMutations} from 'vuex';
    export default {
        data(){
            return{
                RMB:"0",
                count:"0",
                pointNumber:"0",
            }

        },
        computed:{
            //引入数据
            ...mapState([
                "userInfo"
            ])
        },
        methods:{
            //不同的用户对应的图片头像不同
            ...mapMutations([
                'SAVE_AVANDER'
            ]),
        },
        components:{
            headTop:headTop,
            foo,
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../style/minx.scss";
    .profile_nav{
        padding:2rem 0.3rem 0.3rem 0.8rem;
        @include wh(100%,6.2rem);
        background-color: $blue;
        display: flex;
        .privateImage{
            @include wh(20%,3.7rem);
            display: inline-block;
        }
        .profile-link{
            display: inline-block;
            display: flex;
            justify-content: space-between;
            padding-left: 0.4rem;
            @include wh(74%,3.7rem);
            div:nth-of-type(1){
                padding: 1rem 0rem;
                p{
                    color: $fc;
                    @include sc(0.8rem,$fc);
                }
                p:nth-of-type(2){
                    @include sc(0.6rem,$fc);
                }
            }
            div:nth-of-type(2){
                color: $fc;
                @include sc(0.8rem,$fc);
                line-height: 3.6rem;
            }
        }
    }
    .info-data{
        @include wh(100%,3.5rem);
        background-color: $fc;
        padding: 0.6rem 1rem 0.2rem 1rem;
        ul{
            display: flex;
            justify-content: space-between;
            .info-data-link{
                @include wh(25%,2.5rem);
                span{
                    @include sc(0.6rem,#666666);
                    display: block;
                    text-align: center;
                }
                .info-data-top{
                    margin-bottom: 0.1rem;
                }
            }
            .info-data-link:nth-of-type(1){
                span{
                    b{
                        @include sc(1.2rem,#FF9900);
                    }
                }
            }
            .info-data-link:nth-of-type(2){
                span{
                    b{
                        @include sc(1.2rem,#FF5F3E);
                    }
                }
            }
            .info-data-link:nth-of-type(3){
                span{
                    b{
                        @include sc(1.2rem,#6AC20B);
                    }
                }
            }
        }
    }
    .profile-1reTe{
        margin-top: 0.4rem;
        margin-bottom: 0.4rem;
        background-color: $fc;
        ul{
            
            .myorder{
                @include wh(100%,1.7rem);
                display: flex;
                justify-content: space-between;
                padding: 0 0.8rem;
                .myorder-div{
                    display: flex;
                    justify-content: space-between;
                    @include wh(90%,1.7rem);
                    line-height: 1.8rem;
                    border-bottom: 0.01rem solid #F5F5F5;
                    span{
                        @include sc(0.8rem,#666);
                    }
                    span:nth-of-type(2){
                        color:#D0D0D0;
                    }
                    
                }
                aside{
                    @include wh(8%,1.7rem);
                }
                
            }
        }
        
    }

</style>


