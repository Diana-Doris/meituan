<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col
        :span="3"
        class="left"
      >
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团"
        >
      </el-col>
      <el-col
        :span="15"
        class="center"
      >
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="搜索商家或地点"
            @input="input"
            @focus="focus"
            @blur="blur"
          ></el-input>
          <el-button
            type="primary"
            icon="el-icon-search"
          ></el-button>
          <dl
            class="hotPlace"
            v-if="showHot"
          >
            <dt>热门搜索</dt>
            <dd>
              <router-link to="/s">京东第一温泉度假村</router-link>
            </dd>
            <dd>
              <router-link to="/s">京东第一温泉度假村</router-link>
            </dd>
            <dd>
              <router-link to="/s">京东第一温泉度假村</router-link>
            </dd>
          </dl>

          <dl
            class="searchList"
            v-if="showSearch"
          >
            <dd>
              <router-link to="/s">火锅</router-link>
            </dd>
            <dd>
              <router-link to="/s">火锅</router-link>
            </dd>
            <dd>
              <router-link to="/s">火锅</router-link>
            </dd>
            <dd>
              <router-link to="/">火锅</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a
            href="#"
            v-for="(suggest,index) in suggestList"
            :key="suggest"
          >{{ suggest }}</a>

          <!-- <router-link
            v-for="(item, index) in suggestList"
            :key="item + '~' + index"
            :to="{name: 'goods', params: {name: item}}"
          >{{item}}</router-link> -->
          <!-- <router-link to="/">北京故宫博物院</router-link>
                    <router-link to="/"> 北京欢乐谷</router-link>
                    <router-link  to="/"> 尚隐·泉都市生活馆</router-link>
                    <router-link  to="/">故宫珍宝馆</router-link>
                    <router-link  to="/">北京连升商务酒店</router-link>
                    <router-link  to="/">  </router-link> -->
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotList: [],
      searchList: [],
      suggestList: ['京东第一温泉度假村', '99旅馆连锁', '尚客优快捷酒店']
    }
  },
  created () {

  },
  methods: {
    blur () {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    focus () {
      this.isFocus = true
    },
    input () {
    }
  },
  computed: {
    showHot () {
      return this.isFocus && !this.searchWord
    },
    showSearch () {
      return this.isFocus && this.searchWord
    }
  }
}
</script>
