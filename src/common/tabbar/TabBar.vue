<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tab-bar {
  display: flex;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #f8f8f8;
  box-shadow: 0px, -1px, 1px, #888888;
}

</style>