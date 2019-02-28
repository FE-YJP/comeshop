<template>
  <div class="shop">
      <mt-swipe class="banner" :auto="4000">
        <mt-swipe-item :key="index" v-for="(item,index) in imgs">
          <a class="img" href="/">
            <img v-lazy="item.src" alt="手机">
          </a>
        </mt-swipe-item>
        
      </mt-swipe>
      <div class="go">
        <h3>
          逛一逛
        </h3>
        <div class="typeList">
          <!-- 分类商品链接 -->
            <router-link :to="'/shoplist/'+1" tag="div">
              <linktype :title="phone" :info="phoneinfo" :url="phoneimg"></linktype>
            </router-link>
            <router-link :to="'/shoplist/'+1" tag="div">
              <linktype :title="beauty" :info="beautyinfo" :url="beautyimg"></linktype>
            </router-link>
            <router-link :to="'/shoplist/'+1" tag="div">
              <linktype :title="computer" :info="computerinfo" :url="computerimg"></linktype>
            </router-link>
            <router-link :to="'/shoplist/'+1" tag="div">
              <linktype :title="life" :info="lifeinfo" :url="lifeimg"></linktype>
            </router-link>
        </div>


      </div>
      <div class="go">
        <h3>
          新品推荐
        </h3>
        <!-- 商品列表 -->
        <shoplist></shoplist>

      </div>
  
  </div>
</template>

<script>
import linktype from './linktype/linktype'
import axios from "axios"
//购物列表组件
import shoplist from "./shop/shoplist"
export default {
  name: 'Shop',
  data(){
  return {
     title:"来购",
     phone:"手机",
     phoneimg:"http://gfs17.gomein.net.cn/T126LTBT_T1RCvBVdK_800_pc.jpg",
     phoneinfo:"iphoneX新品上市",
     beauty:"美妆",
     beautyimg:"http://s02.lmbang.com/M00/51/A0/eQ519FQcFzeABOr6AAGZ6CTG5zg816.jpg",
     beautyinfo:"精品美妆",
     computer:"电脑",
     computerimg:"http://pic21.nipic.com/20120611/6608733_204338751000_2.jpg",
     computerinfo:"让你吃鸡吃到吐",
     life:"生活用品",
     lifeimg:"http://image.99ys.com/2014/1110/20141110122513678.jpg",
     lifeinfo:"不求最贵但求最好",
     imgs:'',
    }
  },
  created(){
      this.getlistdata();
  },
  mounted() {
   
    
  },
  methods: {
      getlistdata(){
          let _this=this;
          _this.$emit("toparent",_this.title);
          _this.$parent.showHead=true;
          axios({
            url:"http://www.liulongbin.top:3005/api/getthumimages/43",
          }).then(function(data){
            if(data.data.status==0){
              _this.imgs=data.data.message;
            }
          });
      }
  },
  components:{
    'linktype':linktype,
    'shoplist':shoplist,
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.img img{
  width:100%;
  height:100%;
}
.typeList{
  display: flex;
  flex-wrap: wrap;
}

.go{
  background-color: #fff;
  margin-top:0.2rem;
  height:auto;
  font-size: 0.26rem;
  padding-top:.2rem;
}
.go h3{
  height:.54rem;
  margin:0;
  padding: 0;
  font-weight: normal;
  position: relative;
  text-indent: .4rem;
  line-height:.54rem;
}
.go h3:before{
  content:"";
  display: block;
  position: absolute;
  width:0.05rem;
  height:.3rem;
  left:.15rem;
  top:.13rem;
  background-color: #4378FF;
}
.banner{
  margin-top:1rem;
  height:3.5rem;
  flex-shrink:0;
}
.shop{
  height:100vh;
  display: flex;
  flex-direction: column;
}
</style>
