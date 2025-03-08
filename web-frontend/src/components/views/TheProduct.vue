<template>
  <div class="products-container">
    <h1>Products</h1>
    <input type="text" v-model="searchQuery" placeholder="Search products..." />
    <div class="product-list">
      <ProductItems
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import ProductItems from "../Product/ProductItems.vue";

export default {
  components: {
    ProductItems,
  },
  props: ["products", "cart"],
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
    },
  },
};
</script>

<style>
.products-container {
  padding: 2rem;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.product-item {
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(33.333% - 1rem);
  box-sizing: border-box;
  text-align: center;
}

.product-item h2 {
  margin-bottom: 0.5rem;
}

.product-item p {
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

input[type="text"] {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>