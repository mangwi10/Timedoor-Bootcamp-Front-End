<template>
  <div>
    <header class="header">
      <h1 class="header-title">Food Recipes</h1>
      <nav class="header-nav">
        <nuxt-link tag="a" to="/" class="header-nav__link">Home</nuxt-link>
        <nuxt-link tag="a" to="/add" class="header-nav__link">Add
          Recipes</nuxt-link>
        <nuxt-link tag="a" to="/user/login" class="header-nav__link" v-if="!$store.getters.isAuthenticated">
          Login
        </nuxt-link>
        <a href="#" class="header-nav__link" v-if="$store.getters.isAuthenticated" @click="logout">
          Logout
        </a>
        <nuxt-link tag="a" to="/user/userItem" class="header-nav__link" v-if="$store.getters.isAuthenticated">
          {{ $store.state.userData.username }}
        </nuxt-link>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout")
        .then(() => this.$router.push("/user/login"))
    }
  }
}
</script>
<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #EEF2E6;
}

main {
  margin: 22px;
}

.recipes {
  display: flex;
  flex-wrap: wrap;
}

.header-nav__link {
  margin-left: 20px;
  color: black;
  text-decoration: none;
  font-size: 20px;
}
</style>
