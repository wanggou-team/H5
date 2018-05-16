<template>
 <div class="bgHin">
    <group class="ftSize">
      <x-input 
      label-width="3.79rem" 
      title="姓名"  
      :show-clear="false" 
      placeholder="请输入姓名"
      v-model="name"></x-input>
      <x-input 
      class='bgGray' 
      label-width="3.79rem" 
      title="身份证号" 
      :show-clear="false" 
      placeholder="请输入身份证号"
      v-model="idCode"></x-input>
      <x-input 
      label-width="3.79rem" 
      title="银行预留手机号码" 
      :show-clear="false" 
      placeholder="请输入银行预留手机号码"
      v-model="bankPhone"></x-input>
      <x-input 
      label-width="2.79rem" 
      title="手机验证码" 
      class="weui-vcode" 
      :show-clear="false"
      placeholder="请填写验证码">
        <div slot="right" class="redBt">发送验证码</div>
      </x-input>

    </group>

    <group class="ftSize">
      <cell title="所属银行" is-link></cell> 
      <x-input 
      label-width="3.79rem" 
      title="银行卡号"  
      :show-clear="false" 
      placeholder="请填写本人银行卡号"
      v-model="myCard"></x-input>     
    </group>
    <div>
      <check-icon class="checkFont" type="plain" :value.sync="checkAc"></check-icon>
      <span>我同意<a href="">《交易协议》</a></span>      
    </div>
    <x-button type="warn" class="commitBtn">确认并提交</x-button>
 </div>
</template>

<script>
import {Group, Cell,XInput,CheckIcon,XButton} from 'vux'
 export default {
   data () {
     return {
      name: "*图图",
      idCode: '362422********0120',
      bankPhone: '',
      myCard: '',
      checkAc: false
     }
   },
   created() {},
   mounted() {},
   components: {
       Group,
       Cell,
       XInput,
       CheckIcon,
       XButton
   }
 }
</script>

<style scoped>
.bgHin{
  position: absolute;
  width:100%;
  height: 100%;
  background: #f5f5f5;
}
.bgWrite{
  bacakground: #ffffff;
}
.bgGray{
  background: #eae9e9;
}
.ftPad{
    padding-left:2.23rem
}
 .redBt{
   color:#ef4f51;
   border-left: 1px solid #eae9e9
 }
 .redBt{
   width:1.87rem;
   text-align: center;
   padding-left: .13rem
 }
.commitBtn{
  width:90%;
  margin: 2.27rem auto 0;
  font-size: .48rem
}
</style>
<style>
.ftSize .weui-cells{
  font-size: .32rem;
}
.checkFont .weui-icon-circle, .checkFont .weui-icon-success-circle{
   font-size: .29rem; 
}
.checkFont .weui-icon-success-circle:before{
  color:#ef4f51 !important;
}
</style>

