<template>
    <div class="aboutus">
         <mt-header fixed :title="title" class="header">
            <a @click="back()" slot="left">
            <mt-button icon="back"></mt-button>
            </a>
        </mt-header>
        <div class="content">
          <div class="logobox">
          </div>
          <mt-cell class="info" title="版本" value="V1.0.4"></mt-cell>
          <mt-cell class="info" title="官方Q群" value="QQ群:671127392"></mt-cell>
          <mt-cell class="info" title="客服电话" value="0371-84726081" label="工作日:09:30-12:30,13:30-18:30"></mt-cell>
        </div>
    </div>
</template>
<script>
export default {
    name:"message",
    data(){
        return {
            title:"关于我们"
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
    .info{
      height:.4rem;
      font-size:.4rem;
      line-height:.4rem;
    }
    .aboutus{
        width:100%;
        background-color: #F7F7F7;
        margin-top:2rem;
    }
    .logobox{
      width:1.65rem;
      height: 1.65rem;
      margin:1rem auto;
      padding-top:1rem;
      background:url('../../assets/logo.png') no-repeat;
      background-size: cover;
    }
    .logobox img{
      width: 100%;
      height: 100%;
    }
    .header{
        height:1rem;
        font-size: .4rem;
        flex-shrink: 0;
        color:#fff;
        background-color: #5B89FF;
    }
</style>