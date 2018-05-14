<template>
  <div class="login">
    <h1 class="logo"></h1>

    <div>
      <group class="group">
        <x-input class="input"  placeholder="输入手机号码">
          <div slot="label" class="icon"></div> 
        </x-input>
      </group>
      <group class="group">
        <x-input class="input"  placeholder="输入验证码">
          <div slot="label" class="icon"></div>
          <div slot="right" class="code">
            <!--<span class="warning">（50）秒后再获取</span>-->
            <span class="muted">获取验证码</span>
          </div>
        </x-input>
      </group>

      <x-button disabled class="submit" @click.native="style = 'color:red;'" type="primary">登录</x-button>
    </div>

    <footer class="agree">
      <check-icon :value.sync="agree">我同意以下协议</check-icon>
    </footer>
  </div>
</template>

<script>
  import { XInput, Group, XButton, Cell, CheckIcon } from 'vux';

  export default {
    name: 'HelloWorld',
    components: {
      XInput,
      XButton,
      Group,
      CheckIcon,
      Cell,
    },
    data() {
      return {
        agree: true,
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    padding: 179px 84px 0;
    position: relative;
  }
  .logo{
    width: 154px;
    margin: 0 auto 140px;
    height: 250px;
    background: url("../assets/logo.png") no-repeat;
    background-size: contain;
  }
  .icon{
    width: 38px;
    height:42px;
    background: pink;
  }

  .input{
    height: 90px;
    color: #ef4f51;
    box-sizing: border-box;
  }

  .submit{
    background-color: #ef4f51;
    height:88px;
    margin-top: 74px;
    border-radius: 10px;
    font-size: 18px;
  }

  .submit[disabled]{
    background-color: #aaa;
    color: #fff;
  }
  .submit [data-dpr="2"]{
    font-size: 36px;
  }
  .submit [data-dpr="3"]{
    font-size: 54px;
  }

  .agree{
    padding-top: 275px;
    text-align: center;
    color: #000;
  }

  .code{
    border-left: 1px solid #adadad;
    width: 218px;
    box-sizing: border-box;
    text-align: center;
  }

  .warning{
    color: #fdb43d;
  }

  .muted{
    color: #c1c1c1;
  }
</style>

<style>
  .group .weui-cells{
    margin-top: 0;
  }
  .login .weui-input{
    padding-left: 54px;
  }

  .login .vux-no-group-title:before{
    border: none;
  }
  .login .vux-no-group-title{
    border-bottom:1px solid #adadad;
  }
</style>
