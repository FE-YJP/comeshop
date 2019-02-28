<template>
  <div class="cart">
    <div v-if="cart_show" class="empty">
      <img src="../../assets/cart.png" alt>
    </div>

    <mt-cell-swipe v-for="(item,index) in goodslist" :key="index" class="cart_product">
      <mu-checkbox
        @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"
        color="#FF4081"
        v-model="$store.getters.getGoodsSelected[item.id]"
      ></mu-checkbox>
      <!-- <input
        class="btncheck"
        type="checkbox"
        @click="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"
        v-model="$store.getters.getGoodsSelected[item.id]"
      >-->
      <div class="pro_box">
        <div class="pro_img">
          <img v-lazy="item.thumb_path" alt="商品图片">
        </div>
        <div class="pro_info">
          <h6 class="pro_title">{{item.title}}</h6>
          <div class="pro_detail">
            <a @click.prevent="Remove(item.id,index)">删除</a>
          </div>
          <div class="price_count">
            <span class="pro_price">￥{{item.sell_price}}</span>
            <div class="count_group">
              <v-btn
                :initcount="$store.getters.getGoodsCount[item.id]"
                :goodsid="item.id"
                @toadd="Toadd()"
                @todiv="Todiv()"
              ></v-btn>
            </div>
          </div>
        </div>
      </div>
    </mt-cell-swipe>
    <!-- <p>{{$store.getters.getGoodsSelected}}</p> -->
    <div class="selected">
      <div class="allcheck">
        <mu-checkbox
          @change="selectedAllChanged()"
          color="#FF4081"
          class="checkbox"
          v-model="check"
          label="全选"
        ></mu-checkbox>
      </div>
      <mt-button class="submit_cart" type="danger" @click="submitOrder()">提交订单</mt-button>
      <span class="sumprice">
        总价:
        <span class="red">￥{{$store.getters.getGoodCountAndAmount.amount}}</span>
      </span>
      <span class="sumprice">
        已经勾选
        <span class="red">{{$store.getters.getGoodCountAndAmount.count}}</span>件
      </span>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
import Btn from "./btn";
import axios from "axios";
export default {
  name: "cart",
  data() {
    return {
      check: false,
      title: "购物车",
      cart_show: false,
      //购物车数据
      goodslist: [],
      //总价
      sumprice: 0
    };
  },
  components: {
    "v-btn": Btn
  },
  created() {
    this.getGoodLsit();
  },
  mounted() {
    this.$emit("toparent", this.title);
    this.$parent.showHead = true;
  },
  methods: {
    selectedChanged(id, value) {
      //开关状态存储到store
      console.log(id, value);
      this.$store.commit("updateGoodsSelected", { id, selected: value });
    },
    selectedAllChanged() {
      this.$store.commit("updateAllSelected");
    },
    getGoodLsit() {
      //获取store所有商品ID拼接成逗号分隔字符串
      var idArr = [];
      this.$store.state.car.forEach(item => {
        idArr.push(item.id);
      });
      //如果购物车中没有商品
      if (idArr.length <= 0) {
        this.cart_show = true;
      } else {
        this.cart_show = false;
        axios({
          url:
            "http://www.liulongbin.top:3005/api/goods/getshopcarlist/" +
            idArr.join(",")
        }).then(result => {
          if (result.data.status == 0) {
            this.goodslist = result.data.message;
          }
        });
      }
    },
    Toadd(data) {
      //   console.log("加");
      //   console.log(data);
    },
    Todiv(data) {
      //   console.log("减");
      //   console.log(data);
    },
    Remove(id, index) {
      this.goodslist.splice(index, 1);
      this.$store.commit("removeFromcar", id);
    },
    submitOrder() {
      var _this = this;
      if (localStorage.getItem("user")) {
        MessageBox(
          "系统升级中。。。",
          "系统订单付款功能正在维护,给您带来的不便非常抱歉"
        );
      } else {
        MessageBox.confirm("请先登录").then(action => {
          if (action) {
            _this.$router.push("/person");
          }
        });
      }
    }
  }
};
</script>
<style scoped>
.red {
  color: red;
  font-weight: bold;
}
.btncheck {
  width: 0.3rem;
  height: 0.3rem;
}
.count_group {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pro_price {
  font-size: 0.3rem;
  font-weight: bold;
  height: 1rem;
  text-indent: 0.2rem;
  line-height: 1rem;
  margin-right: 0.3rem;
  color: red;
}
.price_count {
  display: flex;
}
.pro_box {
  display: flex;
  width: 6.5rem;
  margin-left: 0.2rem;
}
.pro_img {
  width: 2rem;
  height: 2rem;
}
.pro_title {
  margin: 0.1rem 0 0.1rem;
  font-size: 0.3rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-indent: 0.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-indent: 0.2rem;
  width: 3rem;
}
.pro_img img {
  width: 100%;
  height: 100%;
}
.pro_detail {
  width: 4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-indent: 0.2rem;
  color: red;
  font-weight: bold;
}
.cart_product {
  font-size: 0.3rem;
  margin: 0.2rem 0;
}

.allcheck {
  height: 1rem;
  line-height: 1rem;
  float: left;
  font-size: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.2rem;
}
.sumprice {
  float: right;
  height: 1rem;
  font-size: 0.3rem;
  line-height: 1rem;
  margin-right: 0.1rem;
}
.submit_cart {
  height: 1rem;
  font-size: 0.3rem;
  float: right;
  background-color: #ff4081;
}
.selected {
  position: fixed;
  width: 100%;
  height: 1rem;
  bottom: 1rem;
  background-color: #fff;
  font-size: 0.3rem;
}
.cart {
  margin-top: 1rem;
  padding-bottom: 1rem;
}
.empty {
  width: 1.45rem;
  height: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.empty img {
  width: 100%;
  height: 100%;
}
</style>