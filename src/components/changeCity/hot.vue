<template>
  <div class="m-hcity">
    <dl>
      <dt>{{ title }}</dt>
      <dd
        v-for="hot in hotData"
        :key="hot"
      >
        {{ hot }}
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: ['hotData', 'title']
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/hot.scss";
</style>
