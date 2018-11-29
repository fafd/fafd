<template>
    <div class="city_container">
        <head-top go-back="true" :head-title="cityname">
            <router-link to="/home" slot="changecity" class="change_city">切换城市</router-link>
        </head-top>
        <form class="city_form">
            <div>
                <input type="text" placeholder="输入学校、商务楼、地址" class="city_input input_style" name="city" v-model="inputValue">
            </div>
            <div>
                <input type="submit" @click="postpois" value="提交">
            </div>
        </form>
        <header class="pois_search_history" v-if="historytitle"> 
            搜索历史
        </header>
        <ul class="getpois_ul">
            <li v-for="(item,index) in placelist" @click="nextpage(index,item.geohash)">
                <h4>{{item.name}}</h4>
                <p>{{item.address}}</p>
            </li>
        </ul>
        
    </div>
</template>

<script>
    import headTop from "../../components/head.vue";
    import {currentcity,searchplace} from "../../service/getData.js";
    //import {setStore,getStore,removeStore} from "../../config/mUtils.js";
    export default {
        data(){
            return{
                //当前城市的名字
                cityname:"",

                //当前城市的id名字
                cityid:"",

                //input中搜索地址的值
                inputValue:"",

                //当历史记录的显示跟隐藏
                historytitle:true,

                //搜索城市列表
                placelist:[],

                //搜索过的城市历史列表
                placehistory:[],
            }
        },
        //mounted 初始化数据，dom结构渲染，将数据渲染到dom结构
        mounted(){
            this.cityid=this.$route.params.cityid;
            //console.log(this.$route.params.cityid)
            currentcity(this.cityid).then(res=>{
                this.cityname=res.name;
            })
        },
        methods:{
            postpois:function(){
                //输入值不为空时才发送信息
                if(this.inputValue){
                    //
                    searchplace(this.cityid,this.inputValue).then(res=>{
                        //console.log(res);
                        this.historytitle=false;
                        this.placelist = res;
                        //this.placeNone = res.length? false : true;
                    })
                }
            },
            nextpage:function(ind,ite){
                this.$router.push({name:"msite",query:{geohash:ite}});
            },
        },
        components:{
            headTop,
        },
    }
</script>

<style lang="scss">
    @import "../../style/minx.scss";
    .city_container{
        padding-top: 2.35rem;
    }
    .change_city{
        @include sc(0.7rem,$fc);
        @include ct;
        right: 0.4rem;
    }
    .city_form{
        background-color: #fff;
        padding: 0.3rem 0.5rem 0.5rem 0.5rem;
        border-top:0.01rem solid #EBEBEB;
        border-bottom: 0.01rem solid #EBEBEB;
        div:nth-of-type(1){
            input{
                border: 0.01rem solid #ccc;
                padding: 0 0.5rem;
                @include sc(0.6rem,#A4A4A4);
                @include wh(100%,1.5rem);
            }
        }
        div:nth-of-type(2){
            margin-top: 0.4rem;
            input{
                background-color: $blue;
                @include sc(0.8rem,$fc);
                @include wh(100%,1.5rem);
                border-radius: 0.15rem;
            }
        }
    }
    .pois_search_history{
        padding: 0.3rem 0.5rem;
        @include sc(0.8rem,#666);
    }
    .getpois_ul{
        width: 100%;
        background-color: #fff;
        li{
            @include wh(100%,2.6rem);
            border-bottom: 0.01rem solid #ccc;
            padding: 0.5rem 0.6rem;
            h4{
                @include sc(0.6rem,#333333);
            }
            p{
                @include sc(0.4rem,#999999);
            }
        }
    }
</style>
