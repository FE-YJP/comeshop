<template>
  <div class="btngroup_cart">
    <mu-button @click="add()" fab small color="teal">
      <mu-icon class="big" value="+"></mu-icon>
    </mu-button>
    <input type="number" :value="initcount" class="input_num" ref="numbox">
    <mu-button @click="dit()" fab small color="red">
      <mu-icon class="big" value="-"></mu-icon>
    </mu-button>
  </div>
</template>
<script>
export default {
  name: "btngroup",
  data() {
    return {};
  },
  methods: {
    countChanged() {
      console.log(this.$refs.numbox.value);
    },
    add() {
      this.$refs.numbox.value++;
      console.log(this.$refs.numbox.value);

      this.$emit("toadd", this.$refs.numbox.value);
      //改变数值同步到state中覆盖之前的值
      this.$store.commit("updataGoodsInfo", {
        id: this.goodsid,
        count: this.$refs.numbox.value
      });
    },
    dit() {
      if (this.$refs.numbox.value > 1) {
        this.$refs.numbox.value--;
        console.log(this.$refs.numbox.value);
        this.$emit("todiv", this.$refs.numbox.value);
        this.$store.commit("updataGoodsInfo", {
          id: this.goodsid,
          count: this.$refs.numbox.value
        });
      }
    }
  },
  props: ["initcount", "goodsid"]
};
</script>
<style>
.input_num {
  width: 0.7rem;
  text-align: center;
}
.mu-fab-button.mu-button-small .mu-icon {
  text-align: center;
  font-style: normal;
  font-size: 0.5rem;
}
</style>