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
    padding: 2.39rem 1.12rem 0;
    position: relative;
  }
  .logo{
    width: 2.05rem;
    margin: 0 auto 1.87rem;
    height: 3.33rem;
    background: url("../assets/logo.png") no-repeat;
    background-size: contain;
  }
  .icon{
    width: .51rem;
    height:.56rem;
    background: pink;
  }

  .input{
    height: 1.2rem;
    color: #ef4f51;
    box-sizing: border-box;
  }

  .submit{
    background-color: #ef4f51;
    height:1.17rem;
    margin-top: .99rem;
    border-radius: .13rem;
    font-size: .24rem;
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
    padding-top: 3.67rem;
    text-align: center;
    color: #000;
  }

  .code{
    border-left: 1px solid #adadad;
    width: 2.91rem;
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
    padding-left: .72rem;
  }

  .login .vux-no-group-title:before{
    border: none;
  }
  .login .vux-no-group-title{
    border-bottom:1px solid #adadad;
  }
</style>
