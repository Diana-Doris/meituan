<template>
  <div class="m-istyle">
    <!-- 导航条 -->
    <dl :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        :data-type="item.tab"
        :class="{'active': item.tab === hover}"
        v-for="(item,index) in nav.list"
        :key="item.text"
        @mouseenter="mouseenter(item.tab)"
        @mouseleave="mouseleave"
      >{{ item.text }}</dd>
    </dl>
    <!-- 内容区 -->
    <ul class="ibody">
      <li
        v-for="(li, index) in resultData[hover]"
        :key="li.title"
      >
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never"
        >
          <img
            class="image"
            :src="li.image"
          >
          <div class="cbody">
            <div
              class="title"
              :title="li.title"
            >{{ li.title }}</div>
            <div
              class="sub-title"
              :title="li.subTitle"
            >{{ li.subTitle }}</div>
            <!-- 价格存在 -->
            <div class="price-info">
              <!-- v-if="li.price && li.price_info.current_price" -->
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ li.price }}</span>
                <!-- <span class="old-price numfont">门市价￥{{ li.price_info.old_price }}</span> -->
              </span>
              <span class="sold bottom-right-info">{{ li.address }}</span>
            </div>
            <!-- 价格不存在:抢关了 -->
            <!-- <div
              class="price-info"
              v-else-if="!li.price"
            >
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div> -->
            <!-- 人均 -->
            <!-- <div
              class="price-info"
              v-else
            >
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ li.price_info.avg_price }}</span>
                <span class="units">/{{ li.price_info.units }}均</span>
              </span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import http from '@/api'
export default {
  props: ['nav'],
  data () {
    return {
      hover: 'all',
      resultData: {},
    }
  },
  created () {
    http.getInsexContentBottomList().then(res => {
      this.resultData = res;
    })
  },
  methods: {
    mouseenter (index) {
      this.hover = index
    },
    mouseleave () { }
  },
}
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
