<template>
  <div class="index">
    <mt-header fixed v-if='showHead' :title="title" class="title"></mt-header>
    <section>
     
      <router-view @toparent="getdata"></router-view>
      
    </section>
    <footer>
      <router-link to="/shop">
      <span class="iconfont icon-shangcheng footer_nav"></span>
      <span class="footer_bar">
        商城
      </span>
      </router-link>
      <router-link class="cart_link" to="/cart">
      <span class="iconfont icon-gouwuche footer_nav"></span>
      <span class="cart_count">{{$store.getters.getAllcount}}</span>
      <span class="footer_bar">
        购物车
      </span>
      </router-link>
      <router-link to="/person">
       <span class="iconfont icon-wode footer_nav"></span>
      <span class="footer_bar">
        我的
      </span>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
  return {
     title:"来购",
     showHead:true
  }
  },
  methods: {
    getdata(data){
          this.title=data;
    },
    
  },
  components:{

  },
  mounted() {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cart_count{
    display: block;
    width:.6rem;
    height: .6rem;
    background-color:#FF4081;
    position:absolute;
    right:-0.5rem;
    top:-0.3rem;
    line-height:.6rem;
    text-align: center;
    border-radius: 50%;
    color:#fff;
}
.cart_link{
  position:relative;
}
.router-link-active {
  color:#02adea;
}
html,body{
  height: 100%;
}
body{
  margin: 0;
  padding: 0;
  background-color: #F7F7F7;
  font-family: "微软雅黑"
}
img{
  width:100%;
  height:100%;
}
.index{
  height:100vh;
  display: flex;
  flex-direction: column;
}
.title{
  background-color: #F9F9F9;
  color:#3C4455;
  height:1rem;
  font-size: .4rem;
  flex-shrink: 0;
}
header,footer{
  flex-shrink: 0;
  height:1rem;
  background-color: #F9F9F9;
  font-size: .3rem;
  text-align: center;
  color:#949797;
}
footer{
  display:flex;
  justify-content: space-around;
  align-items: center;
}
.footer_nav{
  font-size: .4rem;
}
.footer_bar{
  font-size: .2rem;
}
footer a{
  color:#949797;
  text-decoration: none;
  display: flex;
  flex-direction:column;
}
section{
  flex:1;
  overflow: auto;
}
.mintui-back{
      font-size: .4rem;
}
.mint-swipe-indicator{
  width:.1rem;
  height: .1rem;
}
</style>
