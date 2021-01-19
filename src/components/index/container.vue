<template>
  <div class="m-istyle">
    <!-- 导航条 -->
    <dl :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        :data-type="item.tab"
        :class="{'active': hover === index}"
        v-for="(item,index) in nav.list"
        :key="item.text"
        @mouseenter="mouseenter(index)"
        @mouseleave="mouseleave"
      >{{ item.text }}</dd>
    </dl>
    <!-- 内容区 -->
    <ul class="ibody">
      <li
        v-for="(li, index) in list"
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
              :title="li.sub_title"
            >{{ li.sub_title }}</div>
            <!-- 价格存在 -->
            <div
              class="price-info"
              v-if="li.rentNum && li.price_info.current_price"
            >
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ li.price_info.current_price }}</span>
                <span class="old-price numfont">门市价￥{{ li.price_info.old_price }}</span>
              </span>
              <span class="sold bottom-right-info">{{ li.address }}</span>
            </div>
            <!-- 价格不存在:抢关了 -->
            <div
              class="price-info"
              v-else-if="!li.rentNum"
            >
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>
            <!--  -->
            <div
              class="price-info"
              v-else
            >
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ li.price_info.avg_price }}</span>
                <span class="units">/{{ li.price_info.units }}均</span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['nav'],
  data () {
    return {
      hover: 0,
      list: [{
        image: 'https://img.meituan.net/phoenix/93161f642813518f3f67f2ca11c5c4d3274794.jpg@740w_416h_1e_1c',
        title: 'title',
        sub_title: 'sub_title',
        price_info: {
          current_price: 19,
          old_price: 22,

        },
        rentNum: 99,
        address: 'address'
      },
      {
        image: 'https://img.meituan.net/phoenix/93161f642813518f3f67f2ca11c5c4d3274794.jpg@740w_416h_1e_1c',
        title: 'title1',
        sub_title: 'sub_title',
        price_info: {
          current_price: 19,
          old_price: 22,
          avg_price: null,
          units: null,
        },
        rentNum: 88,
        address: 'address'
      }, {
        image: 'https://img.meituan.net/phoenix/93161f642813518f3f67f2ca11c5c4d3274794.jpg@740w_416h_1e_1c',
        title: 'title2',
        sub_title: 'sub_title',
        price_info: {
          current_price: null,
          old_price: null,
          avg_price: 8,
          units: '人',
        },
        rentNum: 88,
        address: 'address'
      },
      {
        image: 'https://img.meituan.net/phoenix/93161f642813518f3f67f2ca11c5c4d3274794.jpg@740w_416h_1e_1c',
        title: 'title3',
        sub_title: 'sub_title',
        price_info: {
          current_price: 19,
          old_price: 22,
          avg_price: null,
          units: null,
        },
        address: 'address'
      }]
    }
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
