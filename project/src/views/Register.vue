<template>
  <div class="auth-page">
    <h1>注册</h1>
    <form @submit.prevent="handleRegister">
      <input v-model="email" type="email" placeholder="邮箱">
      <input v-model="password" type="password" placeholder="密码">
      <button type="submit">注册</button>
    </form>
    <router-link to="/login">已有账号？去登录</router-link>
    <router-link to="/home">跳过注册</router-link>
  </div>
</template>