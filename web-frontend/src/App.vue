<template>
  <div id="app">
    <TheNavigation :isLoggedIn="isLoggedIn" :cart="cart" @logout="logout" />
    <main>
      <router-view
        :users="users"
        :products="products"
        :cart="cart"
        @update-users="updateUsers"
        @login="login"
        @add-to-cart="addToCart"
        @remove-from-cart="removeFromCart"
      />
    </main>
  </div>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      users: [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" },
      ],
      products: [
        { id: 1, name: "Product 1", price: "$10", image: "path/to/image1.jpg" },
        { id: 2, name: "Product 2", price: "$20", image: "path/to/image2.jpg" },
        { id: 3, name: "Product 3", price: "$30", image: "path/to/image3.jpg" },
      ],
      cart: [],
      isLoggedIn: false,
    };
  },
  methods: {
    updateUsers(newUsers) {
      this.users = newUsers;
    },
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(product) {
      this.cart = this.cart.filter((item) => item.id !== product.id);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
