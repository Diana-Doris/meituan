<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />
      {{ $store.state.position.name }}
      <router-link
        class="changeCity"
        :to="{name: 'ChangeCity'}"
      >切换城市</router-link>
      [
      <a
        href="#"
        v-for="city in nearCity"
        :key="city.id"
      > {{city.name}} </a>
      ]
    </div>
    <div
      class="m-user"
      v-if="!$store.state.userName"
    >
      <router-link
        class="login"
        :to="{name: 'Login'}"
      >立即登录</router-link>
      <router-link
        class="register"
        :to="{name: 'Register'}"
      >注册</router-link>
    </div>
    <div class="m-user">
      <router-link
        class="login"
        :to="{name: 'user'}"
      ></router-link>
      <router-link
        class="register"
        :to="{name: 'exit'}"
      >推出</router-link>

    </div>
  </div>
</template>

<script>
import http from '@/api'
export default {
  data () {
    return {
      nearCity: [],
    }
  },
  watch: {
    '$store.state.position': {
      handler () {
        this.nearCity = this.$store.state.position.nearCity
      }
    }
  },
  created () {
    http.getPositionIndexMsg().then(res => {
      this.$store.dispatch('getPosition', res)
      console.log(res)
      this.nearCity = res.nearCity
    })
  },
}
</script>
