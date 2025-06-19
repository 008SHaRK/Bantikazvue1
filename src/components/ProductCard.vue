<template>
  <div class="col-6 col-md-4 col-lg-3 mb-4">
    <div class="card h-100 text-center">
      <img :src="product.image" class="card-img-top" :alt="product.name" style="height: 140px; object-fit: contain;" />
      <div class="card-body">
        <h6 class="card-title">{{ product.name }}</h6>
        <p class="card-text">{{ product.price.toFixed(2) }} ₼</p>
        <button class="btn btn-outline-danger btn-sm" @click="$emit('add-to-cart', product)">Səbətə əlavə et</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ product: Object })
</script>
