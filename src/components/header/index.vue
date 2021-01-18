<template>
  <div class="header">
    <el-row>
      <top-bar />
    </el-row>
    <el-row>
      <search-bar />
    </el-row>
  </div>
</template>

<script>
import searchBar from '../header/searchBar.vue'
import topBar from '../header/topBar.vue'

export default {
  components: {
    searchBar,
    topBar
  }
}
</script>
