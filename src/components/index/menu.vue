<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="item in menu"
        @mouseenter="menuenter(item)"
        @mouseleave="menuleave"
      >
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
      v-if="curDetail"
      class="detail"
      @mouseenter="enterDetail"
      @mouseleave="leaveDetail"
    >
      <template v-for="child in curDetail.items">
        <h4 :key="child.title">{{ child.title }}</h4>
        <span
          v-for="son in child.items"
          :key="son"
        >{{ son }}</span>
      </template>
    </div>
  </div>
</template>
<script>
import http from '@/api'
export default {
  created () {
    http.getIndexLestNavList().then(res => {
      this.menu = res
    })
  },
  data () {
    return {
      curDetail: null,
      timer: null,
      menu: [],
    }
  },
  methods: {
    menuenter (item) {
      this.curDetail = item;
      clearTimeout(this.timer)
    },
    menuleave () {
      this.timer = setTimeout(() => {
        console.log('leave')
        this.curDetail = null;
      }, 200);
    },
    enterDetail () {
      clearTimeout(this.timer)
    },
    leaveDetail () {
      this.curDetail = null;
    }
  },
}
</script>
