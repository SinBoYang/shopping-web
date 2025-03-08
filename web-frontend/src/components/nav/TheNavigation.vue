<template>
  <nav>
    <div class="logo">
      <img src="../../assets/logo.png" alt="logo" class="logo-img" />
      蝦買
    </div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/cart">Cart</router-link></li>
      <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
      <li v-if="isLoggedIn" @click="logout">Sign Out</li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["isLoggedIn"],
  methods: {
    logout() {
      this.$emit("logout");
    },
  },
};
</script>

<style>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav .logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
  flex-shrink: 0; /* 防止logo被壓縮 */
}

nav .logo-img {
  height: 40px;
  margin-right: 10px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
  justify-content: flex-start;
  margin-left: 2rem;
  flex-grow: 1;
  min-width: 0;
  overflow: hidden;
}

nav ul li {
  cursor: pointer;
  white-space: nowrap;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #ddd;
}
</style>