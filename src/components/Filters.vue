<template>
  <div class="filters p-3 border-end">
    <h5>Makiyaj</h5>
    <label>Qiymət</label>
    <input type="range" v-model="price[1]" min="0" max="100" class="form-range" />

    <h6 class="mt-3">Markalar</h6>
    <div v-for="b in brands" :key="b">
      <input type="checkbox" :value="b" v-model="selectedBrands" /> {{ b }}
    </div>

    <button @click="applyFilters" class="btn btn-sm btn-primary mt-3">Filtrlə</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({ brands: Array })
const emit = defineEmits(['filter-change'])

const price = ref([0, 100])
const selectedBrands = ref([])

const applyFilters = () => {
  emit('filter-change', {
    brand: selectedBrands.value,
    price: price.value
  })
}
</script>
