<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="pink">
      <img src="../assets/img/home.png" slot="item-icon" />
      <img src="../assets/img/home_active.png" slot="item-icon-active" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="pink">
      <img src="../assets/img/category.png" slot="item-icon" />
      <img src="../assets/img/category_active.png" slot="item-icon-active" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" activeColor="deepPink"
      ><img src="../assets/img/shopcart.png" slot="item-icon" />
      <img src="../assets/img/shopcart_active.png" slot="item-icon-active" />
      <div slot="item-text">购物车</div></tab-bar-item
    >
    <tab-bar-item path="/profile" activeColor="lightPink"
      ><img src="~assets/img/profile.png" slot="item-icon" />
      <img src="../assets/img/profile_active.png" slot="item-icon-active" />
      <div slot="item-text">我的</div></tab-bar-item
    >
  </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>