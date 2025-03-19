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

input[type="text"] {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>