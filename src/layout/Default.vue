<template>
  <div class="layout-default">
    <el-container>
      <!-- 头部 -->
      <el-header height="">
        <my-header />
      </el-header>
      <!-- 内容区 -->
      <el-main height="">
        <router-view></router-view>
      </el-main>
      <!-- 底部 -->
      <el-footer height="">
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myHeader from '../components/header/index.vue'
import myFooter from '../components/footer/index.vue'

export default {
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang="scss">
@import "../assets/css/public/layout.scss";
</style>
