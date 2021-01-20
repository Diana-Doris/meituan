<template>
  <div
    class="choose-wrap"
    @click.stop="Click"
    v-document-click="documentClick"
  >
    <div :class="['choose',disabled ? 'disabled' : '']">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true, 'active':showActive}">
        <h2>{{ title }}</h2>
        <div :class="['wrapper', my_name]">
          <div
            class="col"
            v-for="(item,index) in list"
            :key="item[0][my_name]"
          >
            <span
              :class="{'mt-item':true, 'active': li[my_name] === value}"
              v-for="li in item"
              :key="li[my_name]"
              @click="changeValue(li)"
            >{{ li[my_name] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list', 'title', 'value', 'showActive', 'disabled', 'my_name'],
  computed: {
    resultList () {
      return this.splitCol(list)
    }
  },
  // created () {
  //   this.splitCol(list)
  // },
  data () {
    return {

    }
  },
  methods: {
    Click () {
      if (!this.disabled) {
        this.$emit('changeActive', true,)
      }
    },
    documentClick () {
      this.$emit('changeActive', false)
    },
    changeValue (item) {
      this.$emit('changeValue', item)
    }
  },
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
