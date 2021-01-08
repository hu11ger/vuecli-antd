<template>
  <a-carousel autoplay scrollx>
    <div v-for="(item, index) in banner" :key="index">
      <a :href="item.link"> <img :src="item.image" style="height: 289px" /></a>
    </div>
  </a-carousel>
</template>
<script>
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  width: 150px;
  line-height: 150px;
  height: 289px;
  background: transparent;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>