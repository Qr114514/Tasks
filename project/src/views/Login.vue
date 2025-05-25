<template>
  <div class="auth-page">
    <h1>登录</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="邮箱">
      <input v-model="password" type="password" placeholder="密码">
      <button type="submit">登录</button>
    </form>
    <router-link to="/register">没有账号？去注册</router-link>
    <router-link to="/home">跳过登录</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      // 登录逻辑
      this.$router.push('/home')
    }
  }
}
</script>