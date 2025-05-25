<template>
  <div class="home-container">
    <h1>欢迎来到我们的网站</h1>
    
    <div class="welcome-section">
      <p>这里是您的主页，您可以在这里查看最新动态和个人信息</p>
      
      <div class="features">
        <div class="feature-card" v-for="feature in features" :key="feature.id">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
    
    <nav class="main-nav">
      <router-link to="/login" class="nav-link">登录</router-link>
      <router-link to="/register" class="nav-link">注册</router-link>
    </nav>
  </div>
</template>

<script setup>
const features = [
  {
    id: 1,
    title: '功能一',
    description: '这里是第一个功能的简要描述'
  },
  {
    id: 2,
    title: '功能二',
    description: '这里是第二个功能的简要描述'
  },
  {
    id: 3,
    title: '功能三',
    description: '这里是第三个功能的简要描述'
  }
]
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  color: #42b983;
  margin-bottom: 2rem;
}

.welcome-section {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.feature-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.nav-link {
  padding: 0.75rem 1.5rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #3aa876;
}
</style>