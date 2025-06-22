<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
    <Profile />
     <Shop />
      
</template>

<script setup>
import { ref, provide } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'





const basketCount = ref(0)
const basketItems = ref([])

function addToBasket(product) {
  basketCount.value++
  basketItems.value.push(product)
}

provide('basketCount', basketCount)
provide('addToBasket', addToBasket)
provide('basketItems', basketItems)
</script>


