<template>
  <a-layout class="layout">
    <a-layout-sider
      v-model="collapsed"
      :trigger="null"
      collapsible
      class="left-sider"
    >
      <div class="logo">{{ collapsed ? "简睿" : "广州简睿科技有限公司" }}</div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <router-link tag="div" to="/home"
            ><a-icon type="home" /> <span>首页</span></router-link
          >
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>用户管理</span></span>
          <a-menu-item key="2">
            <router-link to="/userlist" tag="div"> 用户列表</router-link>
          </a-menu-item>
          <a-menu-item key="3"> 工作清单 </a-menu-item>
          <a-menu-item key="4"> 资源共享 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"
            ><a-icon type="appstore" /><span>业务管理</span></span
          >
          <a-menu-item key="5">
            <router-link to="/workorder" tag="div"> 任务清单</router-link>
          </a-menu-item>
          <a-menu-item key="6"> 投诉清单 </a-menu-item>
          <a-menu-item key="7"> 客户列表 </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-dropdown-button style="position: fixed; right: 20px"
          >ajunGrit
          <a-menu slot="overlay">
            <a-menu-item key="1">
              <a-icon type="profile" />个人信息
            </a-menu-item>
            <a-menu-item key="2" @click="logout()">
              <a-icon type="logout" />退出登录
            </a-menu-item>
          </a-menu>
          <a-icon slot="icon" type="user" />
        </a-dropdown-button>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>
<style lang='scss'>
.layout {
  .left-sider {
    height: 100vh;
    overflow-y: scroll;
    overflow-x: visible;

    &::-webkit-scrollbar {
      width: 16px;
      height: 16px;
      background-color: #f5f5f5;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    /*定义滑块 内阴影+圆角*/
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: rgb(114, 108, 108);
    }
  }
  height: 100vh;
  .logo {
    height: 32px;
    line-height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
    color: #fff;
    letter-spacing: 0.9px;
    text-align: center;
    font-size: 14px;
    font-family: 楷体;
    font-weight: bold;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>
