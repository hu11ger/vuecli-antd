<template>
  <!-- 轮播图 -->
  <!-- <home-carousel :banner="banner"></home-carousel> -->
  <h2>首页</h2>
</template>

<script>
import { getHomeMultidata } from "network/home.js";
// import HomeCarousel from "./childComps/HomeCarousel.vue";

export default {
  name: "Home",
  components: {
    // HomeCarousel,
  },
  data() {
    return {
      // banner: [],
      // recommend: [],
    };
  },
  created() {
    // getHomeMultidata().then((res) => {
    //   console.log(res);
    //   this.banner = res.banner.list;
    //   this.recommend = res.recommend.list;
    // });
  },
};
</script>

<style>
</style>