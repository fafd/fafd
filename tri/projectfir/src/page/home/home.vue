<template>
    <div>
        <head-top signin-up='home'>
            <span slot='logo' class="head_logo" @click="reload">ele.me</span>
        </head-top>
        <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位城市:</span>
                <span>定位不准时,请在城市列表中选择</span>
            </div>
            <router-link :to="'/city/'+guessCityid" class="guessCity">
                <span>{{guessCity}}</span>
                <span>点击</span>
            </router-link>
        </nav>
        <section id="hot_city_container">
            <h4 class="city_title">热门城市</h4>
            <!--clear类名用于清除浮动-->
            <ul class="city_list_ul clear">
                <!--
                <router-link v-for="item in hotcity" tag="li" :to="'/city/' + item.id" class="ellipsis" :key="item.id">
                    {{item.name}}
                </router-link>-->
                <router-link v-for="item in hotcity" tag="li" :to="'/city/' + item.id" class="ellipsis" :key="item.id">
                    {{item.name}}
                </router-link>

            </ul>
        </section>
        <section id="group_city_container">
            <ul class="letter_classify"> 
                <!--"(value,key,index) in sortroupcity 取的sortgroupcity中的值、键、下标" -->
                <li v-for="(value,key,index) in sortgroupcity" :key="key" class="letter_classify_li">
                    <h4 class="city_title">
                        {{key}}
                        <span v-if="index==0">(按字母排序)</span>
                    </h4>
                    <ul class="city_list_ul clear">
                        <router-link v-for="item in value" tag="li" :to="'/city/' + item.id" class="ellipsis" :key="item.id">{{item.name}}</router-link>
                    </ul>
                </li>
            </ul>
        </section>
  
    </div>
</template>
<script>
import headTop from "../../components/head.vue";
import {groupcity,hotcity} from "../../service/getData.js";
export default {
    data() {
        return {
            guessCity: "长沙",
            guessCityid: "",
            hotcity:[],
            groupcity:{},//所有城市
        };
    },
    components: {
        headTop
    },
    mounted(){
        //.then代表成功的回调函数
        //当前城市
        // cityGuess().then(res=>{
        //     this.guessCity=res;
        //     console.log(res);
        // })
        //获取热门城市
        hotcity().then(res=>{
            this.hotcity=res;
            console.log(res);
        })
        //获取所有城市
        groupcity().then(res=>{
            //console.log(res);
            this.groupcity=res;
        })
    },
    methods: {
    //点击图标刷新页面
        reload: function() {
            window.location.reload();
        },
    },
    computed:{
        
        //获取的的数据按照字母A-Z的排序
        sortgroupcity(){
            let sortobj={};
            for(var i=65;i<90;i++){
                if(this.groupcity[String.fromCharCode(i)]){
                    sortobj[String.fromCharCode(i)]=this.groupcity[String.fromCharCode(i)];
                }
            }
           // console.log(sortobj);
            return sortobj;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../style/minx.scss";
.head_logo {
    left: 0.4rem;
    @include ct;
    @include sc(0.8rem, $fc);
}
.city_nav {
   border-bottom: 1px solid #e7e7e7;
   background-color: $fc;
   padding-top: 2.3rem;
   .city_tip {
        @include fj;
        line-height: 1.2rem;
        padding: 0 0.6rem;
        text-align: center;
        span:nth-of-type(1) {
        @include sc(0.55rem, #666);
        }
        span:nth-of-type(2) {
        font-weight: 900;
        @include sc(0.475rem, #9f9f9f);
        }
        border-bottom: 1px solid #ededed;
    }
    .guessCity {
        @include fj;
        padding: 0.5rem 0.45rem;
        span:nth-of-type(1) {
            @include sc(0.8rem, $blue);
        }
        span:nth-of-type(2) {
            @include sc(0.8rem, #9b9b9b);
        }
   }
}
#hot_city_container {
   background-color: $fc;
   margin-top: 0.3rem;
}
.city_title {
   @include sc(0.55rem, #666);
   padding: 0.5rem 0.45rem;
}
.city_list_ul {
   list-style-type: none;
    .ellipsis {
        float: left;
        @include sc(0.6rem, $blue);
        text-align: center;
        border-top: 1px solid #EAEAEA;
        border-right:1px solid #EAEAEA; 
        @include wh(25%,2rem);
        padding: 0.5rem 0;
    }
}
#group_city_container{
    .letter_classify_li{
        margin-top:0.4rem;
        background-color: #fff;
        .city_title{
            span{
                @include sc(0.4rem,#B5B5B5);
            }
        }
        .city_list_ul{
            .ellipsis{
                color:#666;
            }
        }
    }
}
</style>


