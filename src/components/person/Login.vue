<template>
  <div class="login">
    <mt-header :title="title" class="header">
      <a @click="back()" slot="left">
        <mt-button icon="back" class="arrow"></mt-button>
      </a>
    </mt-header>
    <form class>
      <div class="form-group">
        <span class="iconfont icon-shouji icon"></span>
        
        <input type="text" class="phone" v-model="phone" placeholder="请输入本人真实手机号">
      </div>
      <div class="form-group">
        <span class="iconfont icon-suo icon"></span>
        
        <input type="password" class="password" v-model="password" placeholder="请输入6-12位密码">
      </div>
      <div class="form-group">
        <mt-button class="btn" type="primary" size="large" @click="tap()">登录</mt-button>
      </div>
      <div class="box">
        <router-link to="/regist">快速注册 |</router-link>
        <router-link to="/password">忘记密码</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";

export default {
  name: "Login",
  data() {
    return {
      title: "登录",
      phone: "",
      password: ""
    };
  },
  methods: {
    tap() {
      var _this = this;
      console.log(_this.phone, _this.password);

      if (localStorage.getItem(_this.phone) == _this.password) {
        MessageBox("提示", "登录成功");
        localStorage.setItem("user", _this.phone);
        _this.$router.push("/person");
      } else {
        MessageBox("提示", "登录失败");
      }
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
  position: absolute;
  top: 0rem;
  left: 0.5rem;
  font-size: 0.45rem;
  color: #ccc;
}
.box {
  text-align: center;
  padding: 0.3rem 0;
}
.box a {
  text-decoration: none;
  font-size: 0.24rem;
  color: #aaa;
}
.form-group {
  margin-top: 0.2rem;
  text-align: center;
  position: relative;
  line-height: 1rem;
}

.phone,
.password {
  width: 95%;
  background-color: #f9f9f9;
  height: 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  font-size: 0.24rem;
  text-indent: 1rem;
}
.login {
  height: 100vh;
  background-color: #fff;
}
.header {
  height: 1rem;
  font-size: 0.4rem;
  flex-shrink: 0;
  color: #fff;
  background-color: #5b89ff;
}
.btn {
  background-color: #5b89ff;
  border-radius: 0.4rem;
  width: 95%;
  display: block;
  margin: 0.4rem auto 0;
  height: 0.7rem;
  font-size: 0.3rem;
  line-height: 0.7rem;
}
</style>
