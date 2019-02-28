// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
//引入minit-ui js
import Mint from 'mint-ui';
//引入minit-ui css
import 'mint-ui/lib/style.css';
//引入字体图标
import './iconfont/iconfont.css';
//引入muse-ui
import MuseUI from 'muse-ui';
//引入加载器
import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
import Loading from 'muse-ui-loading';

import 'muse-ui/dist/muse-ui.css';

//引入vuex
import Vuex from "vuex";

Vue.use(Vuex)
//默认全选
var alls = false;
var car = JSON.parse(localStorage.getItem("car") || '[]');
var store = new Vuex.Store({
  state: { //this.$store.state.***
    car: car //购物车中商品的数据用一个数组存储起来，每个元素对象为商品，{p_id:商品的id,p_price:商品的单价,p_count:商品的数量,P_selected:商品是否被选中}
  },
  mutations: { //this.$store.commit("方法名称","按需传递唯一的参数")
    addToCar(state, goodsinfo) {
      //点击加入购物车,如果有更新数据，没有则添加进去
      //假设没有重复添加的商品
      var flag = false;
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true;
        }
      });
      if (!flag) {
        state.car.push(goodsinfo);
      }
      //存到本地存储
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    updataGoodsInfo(state, goodsinfo) {
      //修改商品中的数量值
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count);
          return true;
        }
      });
      localStorage.setItem("car", JSON.stringify(state.car));
    },
    //删除购物车的商品
    removeFromcar(state, id) {
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1);
          return true;
        }
      })

      localStorage.setItem("car", JSON.stringify(state.car));
    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected
          return true;
        }
      })
      localStorage.setItem("car", JSON.stringify(state.car));
    },
    updateAllSelected(state) {
      state.car.forEach(item => {
        item.selected = !alls;
      })
      localStorage.setItem("car", JSON.stringify(state.car));
      alls = !alls;
    },

  },
  getters: { //this.$store.getters.***
    //相当于计算属性
    getAllcount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count;
      });
      return c;
    },
    getGoodsCount(state) {
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.count;
      })
      return o;
    },
    getGoodsSelected(state) {
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.selected;
      });
      return o;
    },
    getGoodCountAndAmount(state) {
      var o = {
        count: 0,
        amount: 0,
      };
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count;
          o.amount += item.price * item.count;
        }
      })
      return o;
    }
  },
})


//使用muse-ui
Vue.use(MuseUI);
//挂载加载器
Vue.use(Loading);

//使用minit-ui
Vue.use(Mint);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //挂载store状态管理对象
  components: {
    App
  },
  template: '<App/>',

});
const loading = Loading({
  // ...options
  overlayColor: 'hsla(0,0%,100%,.9)', // 背景色
  size: 48,
  color: 'primary', // color
  target: document.getElementsByClassName("go")[0] // loading class name
});
setTimeout(() => {
  loading.close();
}, 3000)
