<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />
      <router-link
        class="changeCity"
        :to="{name: 'changeCity'}"
      >切换城市</router-link>
      [
      <a href="#">门头沟区</a>
      <a href="#">大厂回族自治县</a>
      <a href="#"></a>
      ]
    </div>
    <div class="m-user">
      <router-link
        class="login"
        :to="{name: 'login'}"
      >立即登录</router-link>
      <router-link
        class="register"
        :to="{name: 'register'}"
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
export default {

}
</script>
