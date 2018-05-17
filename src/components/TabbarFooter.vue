<!--  -->
<template>
  <div class="footers">
        <tabbar>
            <tabbar-item 
            link='/home'
            :selected='active === "home" ? true : false'  
            @on-item-click="thatItem(1)">
                <img slot="icon" src="../assets/home-default.png">
                <img slot="icon-active" src="../assets/home-active.png" alt="">
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item 
            link='/my'
            :selected='active === "my" ? true : false'  
            @on-item-click="thatItem(2)">
                <img slot="icon" src="../assets/my-default.png">
                <img slot="icon-active" src="../assets/my.png" alt="">
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
    props: {
        active: {
            type: String,
            default: 'home'
        }
    },
  data () {
    return {
    };
  },
  methods: {
  },
  components: {
      Tabbar, 
      TabbarItem
  }
}

</script>
<style scoped>

.footers{
    position: fixed;
    bottom:0;
    width: 100%;
}
</style>
<style>
.footers .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
    color:#ef4f51
  }
</style>