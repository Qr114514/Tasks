<template>
  <nav>
    <router-link to="/home">首页</router-link>
    <button @click="handleLogout">退出</button>
  </nav>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      // 退出登录逻辑
      this.$router.push('/login')
    }
  }
}
</script>