<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd
        v-for="(item) in classicList"
        :key="item.type"
      >
        <m-select
          :name="item.title"
          :list="item.subList"
        />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd
        v-for="(item) in areaList"
        :key="item.type"
      >
        <m-select
          :name="item.title"
          :list="item.subList"
        />
      </dd>
    </dl>
  </div>
</template>
<script>
import MSelect from './select.vue'
import http from '@/api'
export default {
  created () {
    http.getCategoryList().then(res => {
      this.classicList = res
    })
    // http.getAreaList().then(res => {
    //   var reg = /\n+\s/;

    //   let aaa = `${res.replace(reg, '')}`;
    //   console.log(aaa)
    //   let result = eval('(' + aaa + ")")
    //   console.log(aaa)
    //   // console.log(JSON.stringify(res))
    //   // this.areaList = res;
    // })
  },
  data () {
    return {
      classicList: [],
      areaList: [
        {
          title: '推荐商圈',
          subList: [
            {
              name: '望京',
              id: 120000
            },

            {
              name: '昌平',
              id: 12222
            }
          ]
        }
      ]
    }
  },
  components: {
    MSelect
  }
}
</script>
