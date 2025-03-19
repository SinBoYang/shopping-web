<template>
  <div class="home-container">
    <h1>Welcome to 蝦買!</h1>
    <p>Your one-stop shop for amazing products.</p>
    <div class="features">
      <div class="feature">
        <h2>Wide Selection</h2>
        <p>Choose from a variety of products across multiple categories.</p>
      </div>
      <div class="feature">
        <h2>Great Deals</h2>
        <p>Enjoy discounts and offers on your favorite items.</p>
      </div>
      <div class="feature">
        <h2>Fast Delivery</h2>
        <p>Get your orders delivered to your doorstep quickly and safely.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHome",
};
</script>

<style>
.home-container {
  padding: 2rem;
  text-align: center;
}

.features {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}

.feature {
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 30%;
  text-align: center;
}

.feature h2 {
  margin-bottom: 0.5rem;
}

.feature p {
  color: #666;
}
</style>