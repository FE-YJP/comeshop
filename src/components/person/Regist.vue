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
        <span class="iconfont icon-anquan icon"></span>
        
        <input type="number" class="password" v-model="nyzm" placeholder="请输入验证码">
        
        <a class="val" v-cloak ref="val" @click="valget()">{{val}}</a>
      </div>
      <div class="form-group">
        <span class="iconfont icon-suo icon"></span>
        
        <input type="password" v-model="password" class="password" placeholder="设置6-12位密码">
      </div>
      <div class="form-group">
        <mt-button class="btn" type="primary" size="large" @click.prevent="tap()">注册</mt-button>
      </div>
      <div class="box">
        <span>我已阅读并同意,</span>
        <router-link to="/agreement">《注册服务协议》</router-link>
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
      title: "注册",
      phone: "",
      password: "",
      val: "获取验证码",
      syzm: "",
      nyzm: "",
      able: false,
      timer: null
    };
  },
  methods: {
    tap() {
      //验证手机号正则
      let reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      //验证手机号是否存在
      //密码正则
      let psw = /^(\w){6,12}$/;
      let _this = this;
      if (
        reg.test(_this.phone) &&
        psw.test(_this.password) &&
        _this.nyzm == _this.syzm
      ) {
        let ophone = localStorage.getItem(this.phone);
        if (ophone) {
          MessageBox.confirm("用户名已存在,请登录或重试")
            .then(action => {
              if (action) {
                _this.password = "";
                _this.phone = "";
                _this.$router.push("/person");
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          MessageBox("提示", "注册成功");
          clearInterval(_this.timer);
          localStorage.setItem(this.phone, this.password);
          _this.$router.push("/person");
        }
      } else {
        MessageBox("信息有误", "请重试");
      }
    },
    back() {
      clearInterval(this.timer);
      this.timter = null;
      this.$router.go(-1);
    },
    valget() {
      var _this = this;
      if (!_this.able) {
        _this.syzm = Math.floor(Math.random() * 10000);
        console.log(_this.syzm);
        _this.$refs.val.style.background = "#E9EDF0";
        _this.$refs.val.style.color = "#AAB2BE";
        let count = 60;
        _this.val = "重新获取" + count + "s";
        _this.timer = setInterval(() => {
          count--;
          _this.val = "重新获取" + count + "s";
          if (count <= 0) {
            _this.able = false;
            console.log(_this.$refs.val);
            _this.$refs.val.style.background = "#5B89FF";
            _this.$refs.val.style.color = "#fff";
            _this.val = "获取验证码";
            count = 60;
            clearInterval(_this.timer);
          }
        }, 1000);
        _this.able = true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.val {
  position: absolute;
  width: 1.7rem;
  height: 0.6rem;
  line-height: 0.6rem;
  right: 0.3rem;
  top: 0.2rem;
  display: block;
  background-color: #5b89ff;
  font-size: 0.25rem;
  color: #fff;
  border-radius: 0.3rem;
}
.icon {
  position: absolute;
  top: 0rem;
  left: 0.5rem;
  font-size: 0.45rem;
  color: #ccc;
}
.box {
  text-align: center;
  font-size: 0.24rem;
  padding: 0;
  margin-top: 0.5rem;
}
.box a {
  text-decoration: none;
  font-size: 0.24rem;
  color: #5b89ff;
}
.form-group {
  margin-top: 0.1rem;
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
