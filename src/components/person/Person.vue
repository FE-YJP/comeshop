<template>
  <div class="container_person">
    <div class="header">
      <h1 class="header_title">
        个人中心
        <a class="kefu" @click="Showkefu()">
          <span class="iconfont icon-tubiao- kefuicon"></span>
        </a>
      </h1>
      <mt-button v-if="denglu" class="btn" type="primary" @click="tap()">登录</mt-button>
      <h5 v-if="dengchu" class="username">{{username}}</h5>
      <mt-button v-if="dengchu" class="btn" type="primary" @click="layout()">登出</mt-button>
    </div>
    <div class="content">
      <router-link to="/order">
        <span class="iconfont icon icon-dingdan"></span>
        <span>全部订单</span>
      </router-link>
      <router-link to="/editor">
        <span class="iconfont icon icon-dizhi"></span>
        <span>我的地址</span>
      </router-link>
      <router-link to="/message">
        <span class="iconfont icon icon-xiaoxi"></span>
        <span>我的消息</span>
      </router-link>
      <router-link to="/safe">
        <span class="iconfont icon icon-anquan"></span>
        <span>账户安全</span>
      </router-link>
      <router-link to="/advice">
        <span class="iconfont icon icon-yijianfankui"></span>
        <span>意见反馈</span>
      </router-link>
      <router-link to="/aboutus">
        <span class="iconfont icon icon-guanyuwomen"></span>
        <span>关于我们</span>
      </router-link>
    </div>
    <mt-popup class="pop" v-model="showkefu">
      <img src="../../assets/kefu.png" alt>
    </mt-popup>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";

export default {
  name: "Person",
  data() {
    return {
      title: "个人中心",
      showkefu: false,
      denglu: true,
      dengchu: false,
      username: ""
    };
  },
  methods: {
    tap() {
      this.$router.push("/login");
    },
    layout() {
      this.denglu = true;
      this.dengchu = false;
      MessageBox("提示", "登出成功");
      localStorage.removeItem("user");
    },
    Showkefu() {
      this.showkefu = true;
    }
  },
  mounted() {
    this.$emit("toparent", this.title);
    this.$parent.showHead = false;
    if (localStorage.getItem("user")) {
      this.denglu = false;
      this.dengchu = true;
      this.username = localStorage.getItem("user");
    }
  }
};
</script>
<style scoped>
.username {
  color: #fff;
  text-align: center;
  margin: 0;
  margin-bottom: -1rem;
}
.pop {
  overflow: hidden;
  border-radius: 0.5rem;
}
.container_person {
  height: 100vh;
}
.header {
  height: 4.6rem;
  background: url("../../assets/p.png") no-repeat;
  background-size: cover;
}
.header_title {
  position: relative;
  margin: 0;
  padding: 0.2rem 0;
  color: #fff;
  font-size: 0.35rem;
  font-weight: normal;
  text-align: center;
}
.btn {
  background-color: #5b89ff;
  display: block;
  margin: 1.2rem auto;
  border-radius: 0.25rem;
  border: 1px solid #fff;
  width: 1.4rem;
  height: 0.65rem;
  font-size: 0.25rem;
}
.kefu {
  width: 0.5rem;
  position: absolute;
  right: 0.2rem;
  display: block;
  top: 0.2rem;
  padding-right: 0.2rem;
}
.kefuicon {
  color: #fff;
  font-size: 0.4rem;
}
.content {
  display: flex;
  flex-wrap: wrap;
}
.content a {
  text-decoration: none;
  color: #000;
  font-size: 0.2rem;
  width: 33.33%;
  height: 1.4rem;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
}
.icon {
  font-size: 0.5rem;
  color: #5b8cff;
  margin-bottom: 0.1rem;
}
</style>
