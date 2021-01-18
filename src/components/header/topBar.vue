<template>
  <div class="m-header-topbar m-header">
    <el-col :span="10">
      <geo />
    </el-col>
    <el-col :span="14">
      <my-nav />
    </el-col>
  </div>
</template>

<script>
import geo from './geo.vue'
import myNav from './nav.vue'

export default {
  components: {
    geo,
    myNav
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header/topbar.scss";
</style>
