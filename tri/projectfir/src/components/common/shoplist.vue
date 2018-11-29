<template>
    <div id="shop_list">
        <div>这是shoplist.vue的页面</div>
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
    //引入的后端接口
    import {shopList} from "../../service/getData.js";
    import {mapState} from 'vuex';
    export default {
        data(){
            return{
                offset:"50",

            }
        },
        computed:{
            ...mapState([
			    'latitude','longitude'
		    ]),
        },
        //props:["restaurantCategoryId"],
        mounted(){
            console.log(this.restaurantCategoryId);
            shopList(this.latitude,this.longitude,this.offset).then(res=>{
                console.log(res);
                
            })
        }
    }
</script>

<style>

</style>
