<template>
<div class="flowerWrap">
  <div class="wrap">
    <div class="title">花券回收</div>

    <group>
      <cell
        is-link
        :border-intent="false"
        :arrow-direction="showContent004 ? 'up' : 'down'"
        @click.native="showContent004 = !showContent004">
        <span slot="title">选择卡种<span class="iconX">*</span></span>
      </cell>
      <template v-if="showContent004">
        <cell-form-preview :border-intent="false" :list="list"></cell-form-preview>
      </template>
    </group>

    <group>
      <cell
        is-link
        :border-intent="false"
        :arrow-direction="showContent004 ? 'up' : 'down'"
        @click.native="showContent004 = !showContent004">
        <span slot="title">选择面额<span class="iconX">*</span></span>
      </cell>
      <template v-if="showContent004">
        <cell-form-preview :border-intent="false" :list="list"></cell-form-preview>
      </template>
    </group>

    <group>
      <x-input  type="tel" placeholder="" :show-clear="false">
        <span slot="label"  class="card">卡序列号<span class="iconX">*</span></span>
      </x-input>
    </group>

    <div class="noCardWrap">
      <!-- <div class="nocardInfo">未绑定银行卡</div> -->
      <!-- 有绑定 -->
      <div class="badingcards bgColor">
          <div class="bankTitle">
              <img class="bdingImg" src="../assets/bank01.png" alt="">
              <span class="bankName">招商银行</span>
              <span class="phone">手机尾号 (6082)</span>
          </div>
          <div class="bankNumber">****  ****  ****  0928</div>
      </div>
      <router-link to='/personalbank'><div class="btnCard">去绑定</div></router-link> 
    </div>
    <div class="btn">提交</div>

  </div>
</div>
</template>

<script>
  import { Cell,Group, CellFormPreview, Badge,XInput, Flexbox, FlexboxItem,XButton  } from 'vux'
    export default {
        name: "flower",
        data() {
          return {
            showContent004:false,
            list:[{
              label: 'Apple',
              value: '3.29'
            }, {
              label: 'Banana',
              value: '1.04'
            }, {
              label: 'Fish',
              value: '8.00'
            }]
          }
        },
        created() {
        },
        mounted() {
        },
        methods: {},
        components:{
          Cell,
          Group,
          Badge,
          XInput,
          Flexbox,
          FlexboxItem,
          XButton,
          'cell-form-preview':CellFormPreview
        }
    }
</script>

<style scoped>
.flowerWrap{
  position: absolute;
  width:100%;
  height:100%;
  overflow: hidden;
  box-sizing: border-box;
  background: #f5f5f5;
}
.wrap{
  width:90%;
  margin:0 auto;
}
.title{
  width:100%;
  height:1.2rem;
  text-align: center;
  line-height: 1.2rem;
  font-size: .4rem;
  color:#ef4f51;
  font-weight: bold;
  background: url("../assets/flower01.png") no-repeat;
  background-size: contain;
  margin:.4rem 0px;
}
.iconX{
  color:#ff5757;
  position: absolute;
  top:0
}
.card{
  padding:0 .13rem;
}
.noCardWrap{
  width:100%;
  height:3.2rem;
  background: #ffffff;
  border-radius: .27rem;
  box-shadow: 0 .04rem .01rem .03rem rgba(0,0,0,.06);
  margin-top:.27rem;
  padding-top:.27rem
}
.nocardInfo{
  height:2.08rem;
  display: flex;
  justify-content:center;
  align-items: center;
}
.btnCard{
  border-top:1px dotted #f5f5f5;
  width:100%;
  height: 1.05rem;
  line-height: 1.05rem;
  text-align: center;
  color:#ff5757;
  /* color:#666; 绑定颜色*/ 
}

.btn{
  color:#ffff;
  background: #ff5757;
  border-radius: .67rem;
  text-align: center;
  margin:.93rem auto;
  width:5.07rem;
  height:1.2rem;
  font-size: .4rem;
  line-height: 1.2rem;
}

/* 有绑定 */
.badingcards{
    width:90%;
    margin:0 auto;
    height:1.87rem;
    border-radius: .27rem .27rem 0 0;
}
.bgColor{
    background:#eeeeee;
}
.bankTitle{
    width:100%;
    margin:0  auto;
    color:#ffffff;
    box-sizing:border-box;
    padding:.27rem .2rem .06rem .23rem;
}
.bdingImg{
    width:.8rem;
    height:.8rem;
    vertical-align:middle;
}
.bankName{
    font-size:.35rem;
    vertical-align:middle;
    padding-left:.13rem;
    color:#333;
}
.phone{
    font-size:.32rem;
    vertical-align:middle;
    padding-left:2.67rem;
    color:#666;
}
.bankNumber{
    font-size:.4rem;
    color:#ffffff;
    text-align:center;
    color:#666;
}
</style>
