<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provincetList"
      title="省份"
      :value="province"
      @changeActive="changeProvinceActive($event)"
      :showActive="showProvinceActive"
      @changeValue="changeProvinceValue($event)"
      :my_name="provinceName"
    />

    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      @changeActive="changeCityActive($event)"
      :showActive="showCityActive"
      @changeValue="changeCityValue($event)"
      :disabled="disabledCity"
      :my_name="cityName"
    />

    <span>直接搜索:</span>
    <el-select
      v-model="value"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from './select.vue'
import http from '@/api'

export default {
  created () {
    http.getHotProvinceList().then(res => {
      this.provincetList = this.splitCol(res)

    })
  },
  data () {
    return {
      provinceName: 'provinceName',
      cityName: 'name',
      disabledCity: true,
      options: [],
      value: [],
      list: [],
      loading: false,
      provincetList: [],
      province: '省份',
      cityList: [],
      city: '城市',
      showProvinceActive: false,
      showCityActive: false,
      states: ['哈尔滨', '宁波', '黑龙江', '杜丹江', '黑江', '黑龙', '黑龙0江']
    }
  },
  mounted () {
    this.list = this.states.map(item => {
      return { value: `${item}`, label: `${item}` };
    });
  },
  methods: {
    splitCol (list) {
      let splitNum = Math.ceil(list.length / 12);
      let resultList = [];
      if (list.length > 12) {
        for (let i = 0; i < splitNum; i++) {
          resultList.push(list.slice(i * 12, 12 + i * 12))
        }
      }
      return resultList;
    },
    remoteMethod (query) {
      console.log(query)
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.indexOf(query) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
    changeProvinceActive (item) {
      this.showProvinceActive = item;
      this.showCityActive = false;
    },
    changeCityActive (item) {
      this.showCityActive = item;
      this.showProvinceActive = false;
    },
    changeProvinceValue (item) {
      this.province = item.provinceName;
      this.showProvinceActive = false;
      this.disabledCity = false;
      this.cityList = this.splitCol(item.cityInfoList)
    },
    changeCityValue (item) {
      this.city = item.name;
      this.showCityActive = false;
      this.$store.dispatch('getPosition', item)
      this.$router.push({ name: 'Index' })
    }
  },
  components: {
    MSelect
  }
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
