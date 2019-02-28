<template>
    <div class="order">
         <mt-header fixed :title="title" class="header">
            <a @click="back()" slot="left">
            <mt-button icon="back"></mt-button>
            </a>
        </mt-header>
        <mt-navbar v-model="selected" class="nav_bar">
            <mt-tab-item id="1">全部</mt-tab-item>
            <mt-tab-item id="2">待付款</mt-tab-item>
            <mt-tab-item id="3">待发货</mt-tab-item>
            <mt-tab-item id="4">待收货</mt-tab-item>
            <mt-tab-item id="5">已完成</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container class="container_order" v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 5" :title="'内容 ' + n" :key=n />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" :key=n />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" :key=n />
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <mt-cell v-for="n in 4" :title="'选项 ' + n" :key=n />
            </mt-tab-container-item>   
            <mt-tab-container-item id="5">
                <mt-cell v-for="n in 3" :title="'选项 ' + n" :key=n />
            </mt-tab-container-item>      
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    name:"message",
    data(){
        return {
            title:"我的订单",
            selected:"1"
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>
<style>
.mint-tab-item-label{
    font-size:.3rem;
    height:.4rem;
    line-height: .4rem;
}
.mint-navbar .mint-tab-item.is-selected{
    border-bottom:0.04rem solid #26a2ff;
    height:1rem;
}
.container_order{
    margin-top:0.05rem;
}
.mint-tab-item{
    height:.4rem;
}
.nav_bar{
    margin-top:1rem;
}
.nav_bar a{
    color:#000;
}
.order{
    font-size: "微软雅黑";
    width:100vw;
    height:100vh;
    background-color: #F7F7F7;
}
.header{
    height:1rem;
    font-size: .4rem;
    flex-shrink: 0;
    background-color: #fff;
    color:#000;
}
</style>