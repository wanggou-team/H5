<!-- 身份验证 -->
<template>
  <div>
      <div class="linediv"></div> 
      <group class="ftSize" gutter="0em">
        <x-input 
            class="ft-pa"
            :show-clear="false" 
            placeholder="请输入姓名"
            v-model="name">
            <div slot="label" class="lableWin"><span class="requireIc">*</span>姓名</div>
        </x-input>
        <x-input 
            class='ft-pa bgGray' 
            :show-clear="false" 
            placeholder="请填写正确的身份证号"
            v-model="idCode">
            <div slot="label" class="lableWin"><span class="requireIc">*</span>身份证号</div>
        </x-input>
        <x-input 
            class="ft-pa"
            :show-clear="false" 
            placeholder="请填写手机号"
            v-model="bankPhone">
             <div slot="label" class="lableWin"><span class="requireIc">*</span>手机号</div>
        </x-input>
      </group>
      <div class="padLeft">
        <check-icon class="auten" type="plain" :value.sync="checkAc"></check-icon>
        <span class="tipInfo">请确保您的礼品卡所属信息为本人，我已阅读并接受<router-link to="/" class="defaultColor">《活动协议》</router-link></span>      
      </div>
      <x-button type="warn" class="AutenBtn">立即申请</x-button>
  </div>
</template>

<script>
import {Group, Cell,XInput,CheckIcon,XButton} from 'vux'
export default {
  data () {
    return {
        name:'',
        idCode:'',
        bankPhone: '',
        checkAc: false
    };
  },

  computed: {},

  mounted() {},

  methods: {},
  components: {
      Group, Cell,XInput,CheckIcon,XButton
  },
}

</script>
<style scoped>
.linediv{
    width:100%;
    height:.37rem;
    background: #f5f5f5;
}
.bgGray{
    background: #f5f5f5;
}
.ft-pa{
    font-size:.32rem;
    padding: .48rem .59rem;
}
.lableWin{
    width:4.24rem;
    position:relative;
    padding-left:.24rem;
}
.requireIc{
    color:#ef4f51;
    position:absolute;
    top:-2px;
    left:0;
}
.padLeft{
  padding:.13rem .2rem
}
.tipInfo{
    font-size:.27rem;
    color:#c1c1c1;
}
.AutenBtn{
    width:90%;
    margin:1.47rem auto;
}
</style>
<style>
.auten .weui-icon-circle, .auten .weui-icon-success-circle{
   font-size: .29rem; 
}
.auten .weui-icon-success-circle:before{
  color:#ef4f51 !important;
}
</style>