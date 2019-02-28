<template>
        <div class="goods_list">
          <router-link :to="'/detail/'+item.id" v-for="(item,index) in shoplist" :key="index" class="goods_item">
            <div class="goods_img">
              <img v-lazy="item.img_url" alt="">
            </div>
            <h2 class="goods_title">
              {{item.title}}
            </h2>
            <div class="goods_info">
              {{item.zhaiyao}}              
            </div>
            <div class="goods_price">
                  ￥{{item.sell_price}}
            </div>
            <!-- 单个商品信息结束-> -->
          </router-link>
         <!-- 商品列表结束-> -->
        </div>
</template>
<script>
import axios from "axios";
export default {
    name:"shoplist",
    data(){
        return {
            shoplist:[],
        }
    },
    methods:{
         getGoodList(){
        let _this=this;
        //获取商品列表
        axios({
          url:"http://www.liulongbin.top:3005/api/getgoods",
          params:{
            "pageindex":1
          }
        }).then(result=>{
          if(result.data.status==0){
            _this.shoplist=result.data.message;
          }
        })
      }
    },
    created(){
        this.getGoodList();
    },
    mounted(){
      if(this.$route.params.id){
        this.$el.style.marginTop="1rem"
      }
      
    }
}
</script>
<style scoped>
image[lazy=loading] {
  width: 50px;
  height: 50px;
  margin: auto;
}
.goods_list{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:.2rem;
}
.goods_item{
  display: block;
  width:49%;
  background-color: #eee;
  border-radius:.2rem;
  overflow: hidden;
  margin-top:.1rem;
  padding:.2rem;
}
.goods_img{
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items:center;
}
.goods_img img{
  border-radius:.2rem;
  width:100%;
  height:100%;
}
.goods_title{
  color:#000;
  margin:0;
  font-size: .3rem;
  margin-top:.1rem;
  padding:.1rem;
  background-color: #fff;
  width:100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
}
.goods_info{
  color:#aaa;
  padding:.1rem;
  background-color: #fff;
  width:100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
}
.goods_price{
  color:red;
  font-weight:bold;
  font-size: .3rem;
  padding:.1rem;
  background-color: #fff;
}
    
</style>