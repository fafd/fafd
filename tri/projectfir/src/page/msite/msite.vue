<template>
    <div>
        <head-top signin-up="miste" >
            <router-link class="link-search" :to="'/home'" slot="search">搜索</router-link>
            <router-link class="msite_title" :to="'/home'" slot="search">
                <span>{{msiteTitle}}</span>
            </router-link>
        </head-top>
        <mt-swipe class="msite_nav" :auto="6000">
            <mt-swipe-item  class="swiper-wrapper-container">
                <div class="swiper-wrapper" v-for="food in foodTypes">
                    <router-link :to="{path:'/food',query:{geohash:geo,title:food.title,restaurant_category_id:getCategoryId(food.link)}}" class="link_to_food">
                        <img :src="imgBaseUrl + food.image_url">
                        <span>{{food.title}}</span>
                    </router-link>
                </div>
            </mt-swipe-item>
            <mt-swipe-item class="swiper-wrapper-container">
                <div class="swiper-wrapper" v-for="food1 in foodTypes1">
                    <router-link :to="{path:'/food',query:{geohash:geo,title:food1.title,restaurant_category_id:getCategoryId(food1.link)}}" class="link_to_food">
                        <img :src="imgBaseUrl + food1.image_url">
                        <span>{{food1.title}}</span>
                    </router-link>
                </div>
            </mt-swipe-item>
        </mt-swipe>
        <section class="shop_list_container">
            <div class="shop_header">
                <span>附近商家</span>
            </div>
            <shop-list></shop-list>
        </section>
        
    </div>
</template>

<script>
    //需要引入的组件
    import headTop from "../../components/head.vue";
    import shopList from "../../components/common/shoplist.vue";
    //调用俄后台接口
    import {msiteFoodTypes,msiteAddress,cityGuess} from "../../service/getData.js";
    //保存geohash
    import {mapMutations} from "vuex";
    
    export default {
        data(){
            return{
                foodTypes: [], //食品分类列表
                foodTypes1:[],//用于接收到第2页的食物列表
                //msite页面的标题
                msiteTitle:"请选择的地址....",
                imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
                //city页面传过来的geohash地址
                geo:"",
                //hasGetData : false,

            }
        },
        components:{
            headTop,
            shopList,
        },
        methods:{
            search:function(){

            },
            ...mapMutations([
    		'RECORD_ADDRESS', 'SAVE_GEOHASH'
            ]),
            //获取restaurant_category_id
            getCategoryId:function(url){
                //获取的urlData是一个字符串的json对象
                const urlData=decodeURIComponent(url).split("=")[1].replace("&target_name","");
                // /restaurant_category_id/gi 正则表达式的写法，g代表全局匹配，i代表不区分大小写
                if(/restaurant_category_id/gi.test(urlData)){
                    return JSON.parse(urlData).restaurant_category_id.id;
                }else{
                    return "";
                }

            }
        },
        async beforeMount(){
            if(!this.$route.query.geohash){
                const address=await cityGuess();
                this.geo = address.latitude + ',' + address.longitude;

            }else{
                this.geo=this.$route.query.geohash;
            }
            let res=await msiteAddress(this.geo);
            this.msiteTitle=res.name;
            //console.log(res.name);
            // 记录当前经度纬度
            this.RECORD_ADDRESS(res);
            //保存geohash到vuex
            this.SAVE_GEOHASH(this.geo);

            
        },
        mounted(){
            //食品列表
            //console.log(this.geo);
            msiteFoodTypes(this.geo).then(res=>{
                //console.log(res);
                for(var i=0;i<res.length/2;i++){
                    this.foodTypes.push(res[i]);
                    //console.log(this.foodTypes);
                }
                for(var j=res.length/2;j<res.length;j++){
                    this.foodTypes1.push(res[j]);
                }
            })
            
        }
    }
</script>

<style lang="scss">
    @import "../../style/minx.scss";
    .link-search{
        left: 0.4rem;
        @include ct;
        @include sc(0.8rem, $fc);
    }
    .msite_title{
        @include center;
        span{
            display: block;
            @include sc(0.8rem, $fc);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 6rem;
        }
    }
    /*mint-ui定义的样式会产生效果，而自定义类名的样式不产生效果*/
    .mint-swipe{
        height: 8.4rem;
        margin-top:2.05rem;
        padding: 0rem 0.8rem 0.4rem 0.8rem;
        background-color: #fff;
        z-index:1;
    }
    .mint-swipe-item{
        @include wh(100%,4rem);
    }
    .swiper-wrapper{
        display: flex;
        justify-content: space-between;
        @include wh(3.5rem,4rem);
        display: inline-block;
        text-align: center;
        .link_to_food{
            text-align: center;
            @include wh(3.2rem,4rem);
            display: block;
            img{
                @include wh(2.5rem,2.5rem);
            }
            span{
                @include wh(3.2rem,4rem);
                @include sc(0.4rem,#8C8C8C);
                display: block;
            }
        }
    }
    .shop_header{
        margin-top: 0.6rem;
        padding-left: 1rem;
        background-color: #fff;
        span{
            @include wh(100%,1.4rem);
            @include sc(0.4rem,#999);
            display: inline-block;
        }
    }
    
</style>
