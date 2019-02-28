<template>
    <div class="safe">
        <mt-header fixed :title="title" class="header">
            <a @click="back()" slot="left">
            <mt-button icon="back"></mt-button>
            </a>
        </mt-header>
        <div class="box">
            <h5>个人信息</h5>
            <mt-cell title="姓名" value=""></mt-cell>
            <mt-cell title="身份证明" value=""></mt-cell>
            <mt-cell title="银行卡号" value=""></mt-cell>
            <h5>密码修改</h5>
            <mt-cell title="密码修改" to="/password" is-link></mt-cell>
        </div>
    </div>
</template>
<script>
export default {
    name:"safe",
    data(){
        return {
            title:"账户安全",

        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        submit(){
            
        },
        
    }
}
</script>
<style scoped>
    h5{
        font-weight: normal;
        height:.5rem;
        font-size: .3rem;
        line-height:.5rem;
        text-indent: .2rem;
        margin: .1rem 0;
    }
    .safe{
        height:100vh;
    }
    .header{
        height:1rem;
        font-size: .4rem;
        flex-shrink: 0;
        color:#fff;
        background-color: #5B89FF;
    }
    .box{
        margin-top:1rem;
    }
</style>