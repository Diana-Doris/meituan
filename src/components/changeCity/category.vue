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
          @click="cityClick(item)"
        >{{ item.name }}</span>
      </dd>
    </dl>
  </div>

</template>

<script>
import http from '@/api'

export default {
  created () {
    http.getCityList().then(res => {
      let obj = {}
      res.forEach(ele => {
        if (!obj[ele.firstChar]) {
          obj[ele.firstChar] = []
        }
        obj[ele.firstChar].push(ele)
      })
      this.cityList = obj;
    })
  },
  computed: {

  },
  data () {
    return {
      list: 'A、B、C、D、E、F、G、H、I、J、K、L、M、N、O、P、Q、R、S、T、U、V、W、X、Y、Z'.split('、'),
      cityList: []
    }
  },
  methods: {
    cityClick (item) {
      console.log(item)
      this.$store.dispatch('getPosition', item)
      this.$router.push({ name: 'Index' })
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>
