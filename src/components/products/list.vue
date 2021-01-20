<template>
  <div class="m-products-list">
    <!-- 导航 -->
    <ul>
      <li
        v-for="item in nav"
        :key="item.key"
        :class="{'s-nav-active': item.active}"
      >{{item.name}}</li>
    </ul>
    <!-- 内容列表 -->
    <el-row>
      <item
        v-for="(item, index) in productList"
        :key="item.title + item.score"
        :meta="item"
      />
    </el-row>
  </div>
</template>

<script>
import Item from './item.vue'
import http from '@/api'

export default {
  data () {
    return {
      nav: [
        {
          key: 's-default',
          name: '智能排序',
          active: true
        },
        {
          key: 's-price',
          name: '价格最低',
          active: false
        },
        {
          key: 's-score',
          name: '人气最高',
          active: false
        },
        {
          key: 's-comment',
          name: '评价最高',
          active: false
        }
      ],
      productList: []
    }
  },
  created () {
    http.getProductList().then(res => {
      this.productList = res
    })
  },
  components: {
    Item
  }
}
</script>
