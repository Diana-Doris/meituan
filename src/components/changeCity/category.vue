<template>
  <div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd
        v-for="li in list"
        :key="li"
      >
        <a :href="'#city-'+li">{{ li }}</a>
      </dd>
    </dl>
    <dl
      class="m-categroy-section"
      v-for="(city,index) in cityList"
      :key="index"
      :id="'city-'+index.toUpperCase()"
    >
      <dt>{{ index.toUpperCase() }}</dt>
      <dd>
        <span
          v-for="item in cityList[index]"
          :key="item.id"
        >{{ item.name }}</span>
      </dd>
    </dl>

  </div>
</template>
<script>
export default {
  computed: {
    cityList () {
      let obj = {};
      this.Clist.forEach(ele => {
        if (!obj[ele.firstChar]) {
          obj[ele.firstChar] = []
        }
        obj[ele.firstChar].push(ele)
      })
      // console.log(obj)
      return obj
    }
  },
  data () {
    return {
      list: 'A、B、C、D、E、F、G、H、I、J、K、L、M、N、O、P、Q、R、S、T、U、V、W、X、Y、Z'.split('、'),
      Clist: [{
        "id": 1,
        "name": "北京",
        "pinyin": "beijing",
        "acronym": "bj",
        "rank": "S",
        "firstChar": "b"
      },
      {
        "id": 10,
        "name": "上海",
        "pinyin": "shanghai",
        "acronym": "sh",
        "rank": "S",
        "firstChar": "s"
      },
      {
        "id": 20,
        "name": "广州",
        "pinyin": "guangzhou",
        "acronym": "gz",
        "rank": "S",
        "firstChar": "g"
      },
      {
        "id": 30,
        "name": "深圳",
        "pinyin": "shenzheng",
        "acronym": "sz",
        "rank": "S",
        "firstChar": "s"
      },
      {
        "id": 40,
        "name": "天津",
        "pinyin": "tianjin",
        "acronym": "tj",
        "rank": "A",
        "firstChar": "t"
      },
      {
        "id": 42,
        "name": "西安",
        "pinyin": "xian",
        "acronym": "xa",
        "rank": "A",
        "firstChar": "x"
      },
      {
        "id": 45,
        "name": "重庆",
        "pinyin": "chongqing",
        "acronym": "cq",
        "rank": "A",
        "firstChar": "c"
      },
      {
        "id": 50,
        "name": "杭州",
        "pinyin": "hangzhou",
        "acronym": "hz",
        "rank": "A",
        "firstChar": "h"
      },
      {
        "id": 55,
        "name": "南京",
        "pinyin": "nanjing",
        "acronym": "nj",
        "rank": "A",
        "firstChar": "n"
      },
      {
        "id": 57,
        "name": "武汉",
        "pinyin": "wuhan",
        "acronym": "wh",
        "rank": "A",
        "firstChar": "w"
      },
      {
        "id": 59,
        "name": "成都",
        "pinyin": "chengdu",
        "acronym": "cd",
        "rank": "A",
        "firstChar": "c"
      }]
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>
