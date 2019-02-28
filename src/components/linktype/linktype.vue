<template>
    <div class="link_type">
        <div class="content">
            <h4 v-cloak>{{title}}</h4>
            <p v-cloak>
                {{info}} 
            </p>
        </div>
        <div class="linkImg">
            <img v-lazy="url" alt="">
        </div>
       

    </div>
</template>
<script>
export default {
    name:"linktype",
    data(){
        return {

        }
    },
    props:['title',"info","url"],
    mounted() {
        
    },
}
</script>
<style scoped>
    .content{
     float:left;
     margin-left:0.3rem;
     line-height: .4rem;
    }
    .linkImg{
        float:right;
        width:.8rem;
        height:.8rem;
        background-color: #fff;
        margin-right:.2rem;
    }
    .link_type{
        flex-shrink: 0;
        width:3.45rem;
        height:1.15rem;
        background-color: #F3F3F3;
        border-radius: 0.1rem;
        margin:0.15rem;
        box-sizing:border-box;
        overflow: hidden;
        padding-top:.2rem;
    }
    p{
        font-size: .2rem;
        color:#686868;
        margin: 0;
        padding: 0;
    }
    h4{
        margin: 0;
        padding: 0;
        font-weight: normal;
    }
</style>