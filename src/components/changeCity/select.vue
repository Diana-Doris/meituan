<template>
  <div
    class="choose-wrap"
    @click.stop="Click"
    v-document-click="documentClick"
  >
    <div class="choose">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true, 'active':showActive}">
        <h2>{{ title }}</h2>
        <div class="wrapper">
          <div class="col">
            <span
              :class="{'mt-item':true, 'active': li === value}"
              v-for="li in list"
              :key="li"
              @click="changeValue(li)"
            >{{ li }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['list', 'title', 'value', 'showActive'],
  data () {
    return {
    }
  },
  methods: {
    Click (e) {
      this.$emit('changeActive', true)
    },
    documentClick () {
      this.$emit('changeActive', false)
    },
    changeValue (item) {
      console.log(item)
      this.$emit('changeValue', item)
    }
  },
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
