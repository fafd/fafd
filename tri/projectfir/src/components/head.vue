<template>
    <header id="head_top" class="clear">
        <!--用于放置ele.com-->
        <slot name="logo"></slot>
        <!--用于放置搜索标志的-->
        <slot name="search"></slot>
        <section v-if="goBack" @click="change" class="head_goback">
            <span>返回</span>
        </section>
        <section class="head_login" v-if="signinUp" >
            <router-link :to="userInfo?'/profile':'/login'">
                <span class="login_span">登录 | 注册</span>
            </router-link>
                
        </section>
        <section v-if="headTitle"  class="title_head ellipsis">
            <span class="title_text">{{headTitle}}</span>
        </section>
        <slot name="msite-title"></slot>
        <slot name="changecity"></slot>   
    </header>
        
</template>
<script>
import {mapState,mapActions} from "vuex";
export default {
    data(){
        return{
            //headTitle:"密码登录",
        }
    },
    mounted(){
        this.getUserInfo();
    },
    computed:{
        //引入数据
        ...mapState([
            'userInfo'
        ]),
    },
    //组件之间的传值是通过props的
    props:["goBack","signinUp","headTitle"],
    methods:{
        //引入方法
        ...mapActions([
            'getUserInfo'
        ]),
        change:function(){
            //返回上一组件
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped lang="scss">
    @import "../style/minx.scss";
    #head_top{
        padding: 0.5rem 0.6rem 0rem 0.6rem; 
        @include wh(100%,1.95rem);
        background-color: $blue;
        position: fixed;
        left: 0;
        top: 0;
        z-index:200;
    }
    .head_goback{
        span{ 
            @include sc(0.8rem,#fff);
            @include ct;
        }
        
    }
    .head_login{
        .login_span{
            right: 0.4rem;
            @include ct;
            @include sc(0.6rem, $fc);
        }
    }

    .title_head{
        .title_text{
            @include sc(0.8rem,#fff);
            @include center;
        }
    }
    
</style>


