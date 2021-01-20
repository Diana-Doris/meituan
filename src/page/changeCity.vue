<template>
  <div class="page-changeCity">
    <!-- 省份选择 -->
    <el-row>
      <province />
    </el-row>
    <!-- 热门城市 -->
    <el-row>
      <hot
        title="热门城市:"
        :hotData="hotData"
      />
    </el-row>
    <!-- 最近访问 -->
    <el-row>
      <hot
        title="最近访问:"
        :hotData="currentSearch"
      />
    </el-row>
    <!-- 按首字母选择 -->
    <el-row>
      <category />
    </el-row>
  </div>
</template>

<script>
import hot from '../components/changeCity/hot.vue'
import province from '../components/changeCity/province.vue'
import category from '../components/changeCity/category.vue'
import http from '@/api'

export default {
  created () {
    http.getHotCityList().then(res => {
      this.hotData = res
    })
    http.getRecentCityList().then(res => {
      this.currentSearch = res
    })
  },
  components: {
    hot,
    province,
    category
  },
  data () {
    return {
      hotData: [],
      currentSearch: []
    }
  },
}
</script>
