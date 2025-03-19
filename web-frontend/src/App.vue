<template>
  <div id="app">
    <TheNavigation :isLoggedIn="isLoggedIn" :cart="cart" @logout="logout" />
    <main>
      <router-view
        :users="users"
        :products="products"
        :cart="cart"
        :isLoggedIn="isLoggedIn"
        @update-users="updateUsers"
        @login="login"
        @add-to-cart="addToCart"
        @remove-from-cart="removeFromCart"
        @clear-cart="clearCart"
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
      products: [], // 初始化為空數組
      cart: [],
      isLoggedIn: false,
    };
  },
  created() {
    this.fetchProducts(); // 在組件創建時獲取商品資料
  },
  methods: {
    fetchProducts() {
      fetch("http://localhost:3000/api/products")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          return response.json();
        })
        .then((data) => {
          this.products = data.products; // 將後端返回的商品資料存入 products
        })
        .catch((error) => {
          console.error("Failed to fetch products:", error);
        });
    },
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
    clearCart() {
      this.cart = []; // 清空購物車
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
