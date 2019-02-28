<template>
  <div class="address">
  <mt-header fixed :title="title" class="header">
    <a @click="back()" slot="left">
      <mt-button icon="back" class="arrow"></mt-button>
    </a>
    <a class="save" slot="right" @click.stop="save()">保存</a>
  </mt-header>
  <div class="content">
    <mt-field label="收货人" placeholder="请填写收货人姓名" v-model="username"></mt-field>
    <mt-field label="联系电话" placeholder="请填写详细电话" type="tel" v-model="phone"></mt-field>
    <mt-field label="所在地址" placeholder="请选择省市区" type="text" v-model="address">
      <i @click="selectAddress()" class="iconfont icon-xuanze change"></i>
    </mt-field>
    <mt-field placeholder="请填写详细地址" type="text" v-model="detailaddress"></mt-field>

  <mt-popup class="mask"
    v-model="showAddress"
    position="bottom">
      <div class="mask-btn">
        <a @click="hideAddress">取消</a>
        <a @click="confirm">确认</a>
      </div>
      <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
   
  </mt-popup>
    <!-- <p>地址3级联动：{{myAddressProvince}} {{myAddressCity}} {{myAddresscounty}}</p> -->
  </div>  
  </div>
</template>

<script>
import myaddress from '../../data/city.json'
export default {
  name: 'Address',
  props:{},
  data () {
    return {
      showAddress:false,
      title:"编辑收货地址",
      username:"",
      phone:"",
      address:"",
      detailaddress:"",
      detail:"",
      myAddressSlots: [
            {
            flex: 1,
            defaultIndex: 1, 
            values: Object.keys(myaddress), //省份数组
            className: 'slot1',
            textAlign: 'center'
            }, {
            divider: true,
            content: '-',
            className: 'slot2'
            }, {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'center'
            },
            {
            divider: true,
            content: '-',
            className: 'slot4'
            },
            {
            flex: 1,
            values: [],
            className: 'slot5',
            textAlign: 'center'
            }
        ],
      myAddressProvince:'省',
      myAddressCity:'市',
      myAddresscounty:'区/县',
    
    }
  },
  methods:{
    selectAddress(){
      this.showAddress=true;
    },
    confirm(){
      //存地址
      let p=this.myAddressProvince;
      let c=this.myAddressCity
      let x=this.myAddresscounty
      this.showAddress=false;
      this.address=p+"-"+x+"-"+c;
    },
    hideAddress(){
      this.showAddress=false;
    },
    back(){
      this.$router.go(-1);
    },
    save(){

    },
    onMyAddressChange(picker, values) {
      if(myaddress[values[0]]){ //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
      picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
      picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
      this.myAddressProvince = values[0];
      this.myAddressCity = values[1];
      this.myAddresscounty = values[2];
      }   
    },  
  },
  mounted(){
  this.$nextTick(() => { //vue里面全部加载好了再执行的函数 （类似于setTimeout）
  this.myAddressSlots[0].defaultIndex = 0 
  // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
  //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
  });
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.change{
  color:#ccc;
  font-size: .4rem;
}
.mask-btn{
  display: flex;
  justify-content: space-between;
}
.mask-btn a{
  display: block;
  width:1rem;
  text-align: center;
  height:.5rem;
  line-height: .5rem;
  font-size: .35rem;
  margin:.3rem;
  color:#000;
}
.mask{
  width:100%;
}
.address{
  height:100vh;
  background-color: #fff;
}
.content{
  margin-top:1rem;
  font-size: .25rem;
}
.content span{
  font-size: .25rem;
  color:red;  
}
.header{
  height:1rem;
  font-size: .4rem;
  flex-shrink: 0;
  color:#fff;
  background-color: #5B89FF;
}


/* .mint-field .mint-cell-title{
  width:1rem;
}
.mint-cell-value{
  font-size:3rem;
} */
</style>
