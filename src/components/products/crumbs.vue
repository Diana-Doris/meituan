<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>{{ $store.state.position }}美团</el-breadcrumb-item>
    <el-breadcrumb-item>{{ $store.state.position }}{{ $route.params.name }}</el-breadcrumb-item>
    <!-- <el-breadcrumb-item>{{ $store.state.position }}活动列表</el-breadcrumb-item> -->
  </el-breadcrumb>
</template>
<script>
export default {
  created () {
    // console.log(this.$route)
  },
}
</script>
