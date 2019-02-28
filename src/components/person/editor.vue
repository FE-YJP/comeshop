<template>
    <div class="editor">
        <mt-header fixed :title="title" class="header">
            <a @click="back()" slot="left">
            <mt-button icon="back"></mt-button>
            </a>
        </mt-header>
        <div class="box">
            <mt-cell title="请编写新地址" to="/address" is-link>
            <span class="iconfont icon-bianji">编辑</span>
            </mt-cell>
        </div>
    </div>
</template>
<script>
export default {
    name:"safe",
    data(){
        return {
            title:"我的地址",

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
    .editor{
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