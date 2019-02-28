<template>
    <div class="message">
         <mt-header fixed :title="title" class="header">
            <a @click="back()" slot="left">
            <mt-button icon="back"></mt-button>
            </a>
        </mt-header>
        
         
    </div>
</template>
<script>
export default {
    name:"message",
    data(){
        return {
            title:"我的消息"
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        tap(){
            console.log(1);
            
        },
        tap1(){
            console.log(2);
            
        }

    }
}
</script>
<style scoped>

    .message{
        height:100vh;
    }
    .header{
        height:1rem;
        font-size: .4rem;
        flex-shrink: 0;
        color:#fff;
        background-color: #5B89FF;
    }
</style>