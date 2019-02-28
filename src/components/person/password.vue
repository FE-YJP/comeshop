<template>
  <div class="forget">
   <mt-header :title="title" class="header">
    <a @click="back()" slot="left">
      <mt-button icon="back" class="arrow"></mt-button>
    </a>
  </mt-header>
    <form class="">
      <div class="form-group">
        <span class="iconfont icon-shouji icon"></span>

        <input type="text" class="phone" placeholder="请输入本人真实认证手机号">
      </div>
      <div class="form-group">
        <span class="iconfont icon-anquan icon"></span>

        <input type="number" class="password" placeholder="请输入验证码">

        <a class="val" v-cloak ref="val" @click="valget()">
          {{val}}
        </a>
      </div>
      <div class="form-group">
        <span class="iconfont icon-suo icon"></span>

        <input type="password" class="password" placeholder="设置6-12位密码">
      </div>
      <div class="form-group">
      <mt-button class="btn" type="primary" size="large" @click="tap()">找回密码</mt-button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      title:"找回密码",
      phone:"",
      password:"",
      val:"获取验证码",
      able:false,
      timer:null
    }
  },
  methods:{
    back(){
      clearInterval(this.timer);
      this.timter=null;
      this.$router.go(-1);
    },
    valget(){
          if(!this.able){
            this.$refs.val.style.background="#E9EDF0"; 
            this.$refs.val.style.color="#AAB2BE";
            let count=60;
            this.val="重新获取"+count+"s";
            this.timer=setInterval(() => {
                count--;
                this.val="重新获取"+count+"s";
                if(count<=0){
                    this.able=false;
                    console.log(this.$refs.val);
                    this.$refs.val.style.background="#5B89FF"; 
                    this.$refs.val.style.color="#fff";
                    this.val="获取验证码";
                    count=60;
                    clearInterval(this.timer);
                }
            }, 1000);
            this.able=true;
        }
        
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.val{
  position: absolute;
  width:1.7rem;
  height:.6rem;
  line-height: .6rem;
  right:.3rem;
  top:.2rem;
  display: block;
  background-color: #5B89FF;
  font-size: .25rem;
  color:#fff;
  border-radius: .3rem;
}
.icon{
  position: absolute;
  top:0rem;
  left:.5rem;
  font-size: .45rem;
  color:#ccc;
}
.form-group{
  margin-top: .1rem;
  text-align: center;
  position:relative;
  line-height:1rem;
}

.phone,.password{
  width:95%;
  background-color: #F9F9F9;
  height: 1rem;
  border-radius: .5rem;
  border:none;
  outline: none;
  font-size: .24rem;
  text-indent: 1rem;
}
.forget{
  height:100vh;
  background-color: #fff;
}
.header{
  height:1rem;
  font-size: .4rem;
  flex-shrink: 0;
  color:#fff;
  background-color: #5B89FF;
}
.btn{
  background-color: #5B89FF;
  border-radius: .4rem;
  width:95%;
  display: block;
  margin: .4rem auto 0;
  height:.7rem;
  font-size: .3rem;
  line-height:.7rem;
}
</style>
