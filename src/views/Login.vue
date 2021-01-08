<template>
  <h2 @click="h2click">登录</h2>
</template>

<script>
import { messageMixin } from "../common/mixin.js";

export default {
  mixins: [messageMixin],
  methods: {
    h2click() {
      console.log(this.$route);
      // this.$router.push('/layout')
      // this.$message.success("登录成功", 1, () => {
      //   this.$router.push("/layout");
      // });
      this.$ms("登陆成功", () => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
</style>