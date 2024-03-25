<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import LoginView from "./components/LoginView.vue";
import { useAuthStore } from "./stores/auth";

const useStore = useAuthStore();
</script>

<template>
  <header v-if="useStore.loggedIn">
    <div class="wrapper">
      <Sidebar />
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
