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
            <dd
              v-for="hot in hotList"
              :key="hot"
            >
              <router-link :to="{name: 'Goods', params: {name: hot}}">{{hot}}</router-link>
            </dd>
          </dl>

          <dl
            class="searchList"
            v-if="showSearch"
          >
            <dd
              v-for="(eat,index) in searchList"
              :key="eat+index"
            >
              <router-link :to="{name: 'Goods', params: {name: eat}}">{{eat}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <!-- <a
            href="#"
            v-for="(suggest,index) in suggestList"
            :key="suggest+index"
          >{{ suggest }}</a> -->

          <router-link
            v-for="item in suggestList"
            :key="item"
            :to="{name: 'Goods', params: {name: item}}"
          >{{ item }}</router-link>

        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import http from '@/api'
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotList: [],
      searchList: [],
      suggestList: []
    }
  },
  created () {
    http.getHotList().then(res => {
      this.suggestList = [...res];
      this.hotList = res.splice(0, 5);
    });

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
    input (val) {
      console.log(val)
      http.getSearchList().then(res => {
        console.log(res.list)
        this.searchList = res.list.filter(ele => {
          return ele.includes(val)
        })
      })
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
