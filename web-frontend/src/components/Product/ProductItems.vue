<template>
  <div class="product-item">
    <img :src="product.image" alt="product image" class="product-image" />
    <h2>{{ product.name }}</h2>
    <p>{{ product.price }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
    }
  }
};
</script>

<style>
.product-item {
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(33.333% - 1rem);
  box-sizing: border-box;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.product-item h2 {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.product-item p {
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #666;
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
</style>