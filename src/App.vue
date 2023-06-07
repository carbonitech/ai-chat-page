<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
 <header>
    <div class="navbar">
      <div class="navbar-links">
        <RouterLink :to="{ name: 'chat' }">Chat</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.navbar {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.navbar-brand {
  font-weight: bold;
  font-size: 20px;
}

.navbar-links {
  align-items: center;
}

.navbar-links a {
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
}

.navbar-links a:hover {
  text-decoration: underline;
}
</style>