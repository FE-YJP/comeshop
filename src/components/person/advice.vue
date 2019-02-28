<template>
    <div class="advice">
        <mt-header fixed :title="title" class="header">
            <a @click="back()" slot="left">
            <mt-button icon="back"></mt-button>
            </a>
            <a  slot="right" @click.stop="submit()">提交</a>
        </mt-header>
        <div class="box">
            <mt-field placeholder="请详细描述您遇到的问题" type="textarea" rows="4" v-model="info"></mt-field>

        </div>
    </div>
</template>
<script>
export default {
    name:"advice",
    data(){
        return {
            title:"意见反馈",
            info:"",
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        submit(){
            console.log(1);
            
        }
    }
}
</script>
<style scoped>
    .advice{
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