<template>
  <h2>首页</h2>
</template>

<script>
import { getHomeMultidata } from "network/home.js";

export default {
  name: "Home",
  data() {
    return {
      banner: {},
      recommend: {},
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banner = res.banner.list;
      this.recommend = res.recommend.list;
    });
  },
};
</script>

<style>
</style>