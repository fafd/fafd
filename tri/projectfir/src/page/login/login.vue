<template>
    <div class="loginContainer">
        <head-top :head-title="loginWay?'登录':'密码登录'" goBack="true"></head-top>
        <!--登录-->
        <form class="loginForm" v-if="loginWay">
            <section class="input_container phone_number">
                <input type="text" placeholder="账号密码随便输入">
            </section>
        </form>
        <!--密码登录-->
        <form class="loginForm" v-else>
            <section class="input_container">
                <input type="text" placeholder="账号">
            </section>
            <section class="input_container">
                <!--显示输入的密码-->
                <input type="text" placeholder="密码" v-if="!showPassword">
                <!--隐藏输入的密码-->
                <input type="password" placeholder="密码" v-else>
                <div class="button_switch" :class="{change_to_text: showPassword}">
                    <div class="circle_button" @click="changePassWordType" :class="{trans_to_right: showPassword}"></div>
                    <span>abc...</span>
                </div>
            </section>
            <section class="input_container">
                <input type="text" placeholder="验证码" maxlength="4">
                <div class="img_change_img">
                    <img :src="captchaCodeImg" >
                    <div @click="getCaptchaCode" class="change_img">
                        <p>看不清</p>
                        <p>换一张</p>
                    </div>
                </div>
            </section>
        </form>
        <section>
            <p class="login_tips">温馨提示:未注册过得账号,登录时将自动注册</p>
            <p class="login_tips">注册过得账户可凭账号密码登录</p>
        </section>
        <section class="loginbtn">
            <div class="login_container">登录</div>
            <router-link :to="'forget'" class="to_forget">重置密码?</router-link>
        </section>
        <foo></foo>
    </div>
</template>
<script>
    import headTop from "../../components/head.vue";
    import foo from "../../components/foot.vue";
    import {getcaptchas} from "../../service/getData.js";
    
    export default {
        data(){
            return{
                loginWay: false, //登录方式，默认短信登录
                captchaCodeImg:null,//验证码图片
                showPassword:false,//隐藏密码

            }
        },
        components:{
            headTop,foo,
        },
        //created钩子函数，获取data中的数据，dom结构还未渲染
        created(){
            this.getCaptchaCode();
        },
        methods:{
            async getCaptchaCode(){
                let res=await getcaptchas();
                this.captchaCodeImg = res.code;
            },
            //点击时，密码是显示还是隐藏
            changePassWordType:function(){
                this.showPassword=!this.showPassword;   
            }
        },
        
    }
</script>
<style lang="scss">
    @import "../../style/minx.scss";
    .loginForm{
        background-color: #fff;
        padding-top: 2.35rem;
        .input_container{
            display: flex;
            justify-content: space-between;
            padding: 0.35rem 0.45rem;
            input{
                @include sc(0.8rem,#000);
                border-bottom: 1px solid #F6F6F6;
            }
            
        }
    }
    .button_switch{
        @include wh(1.8rem, .7rem);
        background-color: #ccc;
        display: flex;
        justify-content: space-between;
        position: relative;
        border-radius: 15%;
        .circle_button{
            @include wh(1rem,1rem);
            border-radius: 50%;
            background-color: #F1F1F1;
            position: absolute;
            top:-0.2rem;
            left: -0.2rem;
            transition: all 0.3s;
        
        }
        span{
            @include sc(0.2rem,$fc);
        }
        .trans_to_right{
            transform: translateX(1.2rem);
        }
    }
    .change_to_text{
        background-color: #4CD964;
    }
    .img_change_img{
        display: flex;
        justify-content: space-between;
        .change_img{
            p:nth-of-type(1){
                @include sc(0.3rem,#666);
            }
            p:nth-of-type(2){
                @include sc(0.3rem,$blue);
            }
        }
    }
    
    .login_tips{
        @include sc(0.3rem,#FF0000);
        padding: 0.3rem 0.45rem;
    }
    .loginbtn{
        padding: 0 0.45rem;
        margin-top: 0.3rem;
        .login_container{
            @include sc(0.8rem,$fc);
            background-color: #4CD964;
            @include wh(100%,2rem);
            line-height: 2rem;
            text-align: center;
            @include borderRadius(0.15rem);
        
        }
        .to_forget{
            margin-top: 0.4rem;
            @include sc(0.6rem,$blue);
            float: right;
        }
    }
    
</style>


