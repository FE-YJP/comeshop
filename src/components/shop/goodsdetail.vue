<template>
  <div class="goodsdetail">
    <mt-header fixed :title="title" class="header">
      <a @click="back()" slot="left">
        <mt-button icon="back" class="arrow"></mt-button>
      </a>
    </mt-header>
    <h3 class="good_title" v-cloak>
      {{detail.title}}
      <br>
      <span class="good_price" v-cloak>￥{{goodprice}}</span>
    </h3>

    <div class="good_content">
      <!-- 商品轮播图 -->
      <mt-swipe :auto="4000" class="good_swipe">
        <mt-swipe-item v-for="(item,index) in goodimg" :key="index">
          <img v-lazy="item.src" alt>
        </mt-swipe-item>
      </mt-swipe>
      <div class="detail_content" v-html="detail.content"></div>
    </div>
    <div class="shop_cart">
      <router-link to="/cart" class="cart_gouwuche">
        <span class="iconfont icon-gouwuche gouwuche"></span>
        <span class="cart_count">{{$store.getters.getAllcount}}</span>
      </router-link>
      <div>
        <mu-button color="secondary" @click="addShopCar()">加入购物车</mu-button>
        <mu-button color="primary" @click="buy()">立即购买</mu-button>
      </div>
    </div>
   
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "goodsdetail",
  data() {
    return {
      title: "来购",
      detail: {},
      goodimg: [],
      goodprice: "",
      shuld: false
    };
  },
  created() {
    this.getdetail();
    this.getgoodimg();
    this.getgoodprice();
  },
  mounted() {},
  methods: {
    addShopCar() {
      let _this = this;
      //添加到购物车
      let goodsinfo = {
        id: _this.$route.params.id,
        count: 1,
        price: _this.goodprice,
        selected: true
      };
      //调用mutation方法添加数据到购物车
      _this.$store.commit("addToCar", goodsinfo);
    },
    getdetail() {
      let _this = this;
      axios({
        url:
          "http://www.liulongbin.top:3005/api/goods/getdesc/" +
          _this.$route.params.id
      }).then(result => {
        if (result.data.status == 0) {
          _this.detail = result.data.message[0];
          // console.log(_this.detail);
        }
      });
    },
    getgoodimg() {
      let _this = this;
      axios({
        url:
          "http://www.liulongbin.top:3005/api/getthumimages/" +
          _this.$route.params.id
      }).then(result => {
        if (result.data.status == 0) {
          // console.log(result.data.message);
          _this.goodimg = result.data.message;
        }
      });
    },
    getgoodprice() {
      let _this = this;
      axios({
        url:
          "http://www.liulongbin.top:3005/api/goods/getinfo/" +
          _this.$route.params.id
      }).then(result => {
        if (result.data.status == 0) {
          // console.log(result.data.message);
          _this.goodprice = result.data.message[0].sell_price;
        }
      });
    },
    back() {
      this.$router.go(-1);
    },
    buy() {
      let _this = this;
      //添加到购物车
      let goodsinfo = {
        id: _this.$route.params.id,
        count: 1,
        price: _this.goodprice,
        selected: true
      };
      //调用mutation方法添加数据到购物车
      _this.$store.commit("addToCar", goodsinfo);
      this.$router.push("/cart");
    }
  }
};
</script>
<style>
.header {
  height: 1rem;
  font-size: 0.4rem;
}
.cart_gouwuche {
  position: relative;
}
.cart_count {
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  background-color: #ff4081;
  position: absolute;
  right: -0.5rem;
  top: -0.3rem;
  line-height: 0.6rem;
  text-align: center;
  border-radius: 50%;
  color: #fff;
}
.good_price {
  color: red;
  font-weight: bold;
  font-size: 0.3rem;
}
.good_swipe {
  height: 6rem;
  flex-shrink: 0;
  padding: 0.2rem;
  width: 100%;
}
.good_swipe img {
  width: 100%;
  height: 100%;
}
.good_title {
  margin-top: 1rem;
  font-size: 0.3rem;
  font-weight: normal;
  text-align: center;
}
.detail_content {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.gomeImgLoad {
  width: 100%;
  display: block;
}
.shop_cart {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
}
.goodsdetail {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100vh;
  width: 100%;
}
.good_content {
  display: flex;
  overflow: auto;
  height: 100%;
  width: 100%;
  flex: 1;
  flex-direction: column;
}
.good_content p {
  box-sizing: border-box;
  padding: 0.1rem;
  text-indent: 2em;
}
.good_content table {
  width: 100%;
}
.good_content table td {
  display: flex;
  flex-direction: column;
}
.good_content img {
  width: 100%;
}
.gouwuche {
  font-size: 0.5rem;
  margin-left: 0.3rem;
}
</style>