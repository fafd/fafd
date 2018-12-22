<template>
    <div class="food_container">
        <head-top go-back="true"  :head-title="headTitle"></head-top>
        <section class="sort_container">
            <!--分类-->
            <section class="sort_item">
                <div>
                    <span class="sort_item_header" @click="chooseType">分类</span>
                    <ul>
                        <li v-for="(item,ind) in foodcategory" class="category_left_li" @click="selectCategory(item.id)">
                            <span>{{item.name}}+{{item.id}}</span>
                            <span>
                                <span>{{item.count}}</span>
                                <span>></span>
                            </span>
                            <ul>
                                <li class="category_right_li" >
                                     
                                </li>
                            </ul>
                        </li>
                    </ul>


                </div>
            </section>
            <!--筛选-->
            <section class="sort_item">
                <div>
                    <span class="sort_item_header" @click="chooseType">筛选</span>

                </div>
            </section>
            <!--排序-->
            <section class="sort_item">
                <div>
                    <span class="sort_item_header" @click="chooseType">排序</span>

                </div>
            </section>

        </section>


    </div>
</template>

<script>
import headTop from "../../components/head";
//foodCategory category种类列表、foodDelivery获取food页面的配送方式、foodActivity获取food页面的商家属性活动列表
import {foodCategory,foodDelivery,foodActivity} from "../../service/getData.js";
//
import {mapState} from "vuex";
export default {
    data(){
        return{
            geohash:"",//接收从msite页面传过来的geohash参数
            headTitle:"",//接收从msite页面传过来的title参数
            restaurant_category_id:"",//接收从msite页面传过来的restaurant_category_id参数
            foodcategory:null,
        }
    },
    components:{
        headTop,
    },
    computed:{
        ...mapState(["latitude", "longitude"])
    },
    async mounted(){
        //获取从msite页面传过来的参数
        this.geohash=this.$route.query.geohash;
        this.headTitle=this.$route.query.title;
        this.restaurant_category_id=this.$route.query.restaurant_category_id;
        let res1=await foodCategory(this.latitude,this.longitude);
        this.foodcategory=res1;
        console.log(res1[0].sub_categories[0]);

    },
    methods:{
        chooseType:function(){

        },
        selectCategory:function(id){
            //console.log(id);
        }
    }

}
</script>

<style lang="scss">
    @import "../../style/minx.scss";
    .food_container{
        padding-top: 1.95rem;
    }
    .sort_container{
        display: flex;
        justify-content: space-between;
        /*.sort_item:nth-of-type(3){
            
        }*/
    }
    .sort_item{
        width:33.3%;
        .sort_item_header{
            display: block;
            @include wh(100%,1.5rem);
            line-height: 1.5rem;
            text-align: center;
            @include sc(0.4rem,#333333);
            background-color: $fc;
        }

    }
    .category_left_li{
        @include wh(7.8rem,1.7rem);
        padding:0rem 0.2rem 0rem 0.8rem;
        display: flex;
        justify-content: space-between;
        background-color: #F1F1F1;
        line-height:1.7rem;
        span{
            @include sc(0.4rem,#333);
            display: inline-block;
        }
        span:nth-of-type(2){
            @include wh(35%,1.7rem);
            display: flex;
            justify-content: space-between;
            padding: 0.35rem 0rem;
            line-height: 1.7rem;
            span:nth-of-type(1){
                background-color: #ccc;
                @include sc(0.4rem,$fc);
                display: inline-block;
                border-radius: 1rem;
                padding: 0rem 0.2rem 0.15rem 0.15rem;
                height: 1rem;
                line-height: 1rem;
            }
            span:nth-of-type(2){
                @include sc(0.4rem,#ccc);
                display: inline-block;
                height: 1rem;
                line-height: 1rem;
                padding: 0rem 0.2rem 0.15rem 0.15rem;
            }
        }
    }
</style>
