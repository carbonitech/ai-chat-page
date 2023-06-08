<script setup></script>
<template>
    <div class="loader"></div>
</template>

<style scoped>
.loader {
  margin: auto 0;
  border: 2px solid #EAF0F6;
  border-radius: 50%;
  border-top: 2px solid #4caf50;
  width: 20px;
  height: 20px;
  animation: spinner 4s linear infinite;
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>