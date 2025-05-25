<template>
  <div id="app">
    <NavBar v-if="showNav" />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: { NavBar },
  computed: {
    showNav() {
      // 在登录/注册页面不显示导航栏
      return this.$route.path !== '/login' && this.$route.path !== '/register'
    }
  }
}
</script>