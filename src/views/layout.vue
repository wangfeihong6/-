<template>
  <div class="main">
    <div class="left" :style="{backgroundColor:themecolor, width:(!isCollapse?'200px':'auto'),}">
      <div class="logo">后台</div>
         <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :background-color="themecolor"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>账号管理</span>
        </template>
          <el-menu-item el-menu-item index="/layout/role">我的</el-menu-item>
          <el-menu-item index="/layout/admin">职员</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-home
"></i>
          <span>客房管理</span>
        </template>
          <el-menu-item el-menu-item index="/layout/roomtype">客房类型</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>客户管理</span>
        </template>
          <el-menu-item el-menu-item index="/layout/guest">客户管理</el-menu-item>
          <!-- <el-menu-item index="3-2">权限管理</el-menu-item> -->
      </el-submenu>
    </el-menu>
    </div>
    <!-- 左侧导航 内容 -->
    <div class="right">
      <!-- 顶部导航 -->
      <div class="nav" :style="{backgroundColor:themecolor}">
        <div class="icon" @click="isCollapse=!isCollapse">
          <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" ></i>
        </div>
        <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  :background-color="themecolor"
  text-color="#fff"
  router
  active-text-color="#ffd04b">
  <el-menu-item index="/layout/home" >
    <i class="el-icon-house
"></i>
    Home
    </el-menu-item>
  <el-menu-item index="/layout/message"><i class="el-icon-chat-dot-square"></i>Message</el-menu-item>
  <el-menu-item index="/layout/email"><i class="el-icon-bank-card"></i>Email</el-menu-item>
  <el-submenu index="4">
    <template slot="title"><i class="el-icon-suitcase"></i>Theme</template>
    <el-menu-item @click="changeTheme(item.value)" v-for="(item,index) in theme.theme" :key="index">{{item.name}}</el-menu-item>
    <!-- <el-menu-item index="4-2">灰色</el-menu-item>
    <el-menu-item index="4-3">黑色</el-menu-item>
    <el-menu-item index="4-4">绿色</el-menu-item>
    <el-menu-item index="4-5">黑色</el-menu-item> -->
  </el-submenu>
  <el-submenu index="5">
    <template slot="title"><i class="el-icon-user-solid"></i>DIE</template>
    <el-menu-item index="/layout/mine">个人中心</el-menu-item>
    <el-menu-item index="/layout/reserPwd">修改密码</el-menu-item>
    <el-menu-item >推出系统</el-menu-item>
  </el-submenu>
</el-menu>
      </div>
      <!-- 内容区域 -->
      <div class="content">
      <!-- 路由试图 -->
        <router-view></router-view> 
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
export default({
  data(){
    return{
        activeIndex2: '1',
        //主题颜色，保存到浏览器缓存中
        themecolor:localStorage.getItem('theme')||'#545c64',
        isCollapse: false,
    }
  },
  computed:{
        ...mapState(['theme'])
  },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      //主题颜色
      changeTheme(color){
          this.themecolor=color
          localStorage.setItem('theme',color);
      }
    }
})
</script>

<style scoped lang='scss'>
.main{
  // width: 100vw;
  height: 100vh;
  display: flex;
  // 左侧样式
  .left{
    // background-color: darkgreen;
    .logo{
      width: 90%;
      font-size: 18px;
      text-align: center;
      padding: 7px 0px;
      color: white;
      margin: 10px auto;
      border: 1px solid white;
    }
  }
  // 右侧样式
  .right{
    flex: 1;
    // 顶部导航样式
    .nav{
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon{
          padding-left: 5px;
          i{
            color: white;
            font-size: 18px;
          }
        }
    }
    .content{
      padding: 8px;
      width: 90%;
    }
  }
 
}

</style>
