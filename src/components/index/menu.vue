<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="item in menu"
        @mouseenter="menuenter(item)"
        @mouseleave="menuleave"
      >
        <i :class="item.icon"></i>
        {{ item.title }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
      v-if="curDetail"
      class="detail"
      @mouseenter="enterDetail"
      @mouseleave="leaveDetail"
    >
      <template v-for="child in curDetail.children">
        <h4 :key="child.title">{{ child.title }}</h4>
        <span
          v-for="son in child.children"
          :key="son"
        >{{ son }}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      curDetail: null,
      timer: null,
      menu: [
        {
          title: '美食',
          icon: "food",
          children: [{
            title: '美食',
            children: ['888', '999']
          },
          {
            title: '巴巴',
            children: ['hhh', 'iii']
          }]
        },
        {
          title: '外卖',
          icon: "takeout",
          children: [{
            title: '外卖',
            children: ['888', '999']
          }]
        },
        {
          title: '酒店',
          icon: 'hotel',
          children: [{
            title: '酒店',
            children: ['888', '999', '000']
          }]
        },
        {
          title: '糖果民宿',
          icon: 'homestay',
          children: [{
            title: '糖果民宿',
            children: ['888', '999']
          }]
        }
      ],
      /*  ['food', 'takeout', 'hotel', 'homestay', 'movie', 'airport', 'ktv', 'life', 'hair', 'marry', 'offspring', 'sport', 'furniture', 'study', 'health', 'bar'], */
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
