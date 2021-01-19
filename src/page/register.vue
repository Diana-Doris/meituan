<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a
          href="#"
          class="site-logo"
        ></a>
        <div class="login">
          <span>已有美团账号</span>
          <router-link :to="{naem: 'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        status-icon
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="用户名"
          prop="userName"
        >
          <el-input
            type="text"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            type="password"
            autocomplete="off"
          ></el-input>
          <div class="pw-strength">
            <div></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item
          label="确认密码"
          prop="rePassword"
        >
          <el-input
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>
