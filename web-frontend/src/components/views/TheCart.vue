<template>
  <div class="cart-container">
    <h1>Cart</h1>
    <div v-if="cart.length === 0">Your cart is empty.</div>
    <div v-else class="cart-list">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <h2>{{ item.name }}</h2>
        <p>{{ item.price }}</p>
        <button @click="removeFromCart(item)">Remove</button>
      </div>
    </div>
    <div v-if="cart.length > 0" class="checkout-section">
      <h2>Total: {{ totalPrice }}</h2>
      <button @click="checkout">Checkout</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cart", "isLoggedIn"],
  data() {
    return {
      errorMessage: "",
    };
  },
  computed: {
    totalPrice() {
      // 計算購物車總價
      return this.cart
        .reduce((total, item) => {
          const price = parseFloat(item.price.replace("$", ""));
          return total + price;
        }, 0)
        .toFixed(2);
    },
  },
  methods: {
    removeFromCart(item) {
      this.$emit("remove-from-cart", item);
    },
    checkout() {
      if (!this.isLoggedIn) {
        this.errorMessage = "You must be logged in to checkout.";
        return;
      }
      // 模擬結帳邏輯
      alert("Checkout successful! Thank you for your purchase.");
      this.$emit("clear-cart"); // 清空購物車
    },
  },
};
</script>

<style>
.cart-container {
  padding: 2rem;
}

.cart-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.cart-item {
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(33.333% - 1rem);
  box-sizing: border-box;
  text-align: center;
}

.cart-item h2 {
  margin-bottom: 0.5rem;
}

.cart-item p {
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #555;
}

.checkout-section {
  margin-top: 2rem;
  text-align: center;
}

.error-message {
  color: red;
  margin-top: 1rem;
}
</style>