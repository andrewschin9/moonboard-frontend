<template>
  <div id="app">
    <!-- Logged in status -->
    <p>Logged in: {{isLoggedIn()}}</p>
    <!-- ^^ -->

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Login">Login</router-link> |
      <router-link to="/Logout">Logout</router-link> |
      <router-link to="/Board">Board</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      console.log("getting user id...");
      console.log(localStorage.getItem("user_id"));
      return localStorage.getItem("user_id");
    },
  },
};
</script>