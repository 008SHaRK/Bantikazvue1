<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Filter Paneli -->
      <div class="col-md-2 sidebar">
        <h5 class="text-danger fw-bold">Makiyaj</h5>
        
        <label for="price" class="text-danger fw-semibold">Qiymət</label>
        <input type="range" class="form-range" min="0" max="100" v-model="price">
        <p class="text-danger">{{ price }} ₼-a qədər</p>

        <div class="filter mt-3">
          <h6 class="text-danger fw-semibold">Filter</h6>
          <div>
            <label class="text-danger">
              <input type="checkbox" v-model="filters.popular"> Ən çox satılanlar
            </label>
          </div>
          <div>
            <label class="text-danger">
              <input type="checkbox" v-model="filters.rated"> Ən çox qiymətləndirilən
            </label>
          </div>
          <div>
            <label class="text-danger">
              <input type="checkbox" v-model="filters.cheap"> Ucuz olan
            </label>
          </div>
          <div>
            <label class="text-danger">
              <input type="checkbox" v-model="filters.expensive"> Bahalı olan
            </label>
          </div>
        </div>

        <div class="brands mt-3">
          <h6 class="text-danger fw-semibold">Markalar</h6>
          <div v-for="brand in allBrands" :key="brand">
            <label class="text-danger">
              <input type="checkbox" :value="brand" v-model="filters.brands"> {{ brand }}
            </label>
          </div>
        </div>
      </div>

      <!-- Məhsul Siyahısı -->
      <div class="col-md-10">
        <!-- Ən çox satılanlar -->
        <h5 class="mt-2 fw-bold">Makiyaj məhsullarında ən çox satılanlar</h5>
        <div class="row">
        <div
  class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti"
  v-for="(product, index) in filteredProducts"
  :key="'filtered' + index"
>
  <div class="kart p-3 border rounded-3 text-center">
    <img :src="product.image" class="img-fluid mb-3" alt="Məhsul Şəkli">
    <h6 class="mehsul-ad text-truncate">
      {{ product.name }}
    </h6>
    <p class="mehsul-kateqoriya text-muted mb-1">{{ product.category }}</p>
    <div class="qiymet d-flex justify-content-between align-items-center mb-2">
      <span class="qiymet-text fw-bold">{{ product.price }} ₼</span>
      <small class="ulduz text-warning">★ {{ product.rating }}</small>
    </div>
    <div class="d-flex align-items-center gap-2">
      <button class="duyme-sebete"
        @click="addToBasket(product)">
        <i class="bi bi-bag-dash"></i>
        <br> Səbətə at
      </button>
      <button class="duyme-sevimli">
        <i class="bi bi-bookmark"></i>
      </button>
    </div>
  </div>
</div>

        </div>

        <!-- Filterlənmiş nəticələr -->
        <h6 class="mt-4">Çeşidləməyə görə Makiyaj məhsulları - {{ filteredProducts.length }} ədəd</h6>
        <div class="row">
          <div
            class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti"
            v-for="(product, index) in filteredProducts"
            :key="'filtered' + index"
          >
            <div class="kart p-3 border rounded-3 text-center">
              <img :src="product.image" class="img-fluid mb-3" alt="Məhsul Şəkli">
              <h6 class="mehsul-ad text-truncate">{{ product.name }}</h6>
              <p class="mehsul-kateqoriya text-muted mb-1">{{ product.category }}</p>
              <div class="qiymet d-flex justify-content-between align-items-center mb-2">
                <span class="qiymet-text fw-bold">{{ product.price }} ₼</span>
                <small class="ulduz text-warning">★ {{ product.rating }}</small>
              </div>
              <div class="d-flex align-items-center gap-2">
                <button class="duyme-sebete" @click="addToCart(product)">
                  <i class="bi bi-bag-dash"></i><br> Səbətə at
                </button>
                <button class="duyme-sevimli">
                  <i class="bi bi-bookmark"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

       <!-- Pagination -->
<nav aria-label="Page navigation" class="d-flex justify-content-center mt-4" id="pageshop">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">←</a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item">
      <a class="page-link" href="#">→</a>
    </li>
  </ul>
</nav>

      </div>
    </div>
  </div>
<section class="en-cox-satilanlar mt-5">
  <div class="container position-relative">
    <h3 class="fw-bold mb-4">Bugün ən çox satılanlar</h3>

    <!-- Sağ-sol düymələri -->
    <button @click="scrollLeft" class="arrow left-arrow">
      <i class="bi bi-chevron-left"></i>
    </button>
    <button @click="scrollRight" class="arrow right-arrow">
      <i class="bi bi-chevron-right"></i>
    </button>

    <!-- Slider hissəsi -->
    <div class="slider-wrapper" ref="slider">
      <div
        class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti"
        v-for="(item, index) in popularProducts"
        :key="index"
      >
        <div class="kart p-3 border rounded-3 text-center">
          <img :src="item.image" class="img-fluid mb-3" alt="Məhsul Şəkli" />
          <h6 class="mehsul-ad text-truncate">{{ item.name }}</h6>
          <p class="mehsul-kateqoriya text-muted mb-1">{{ item.category }}</p>
          <div class="qiymet d-flex justify-content-between align-items-center mb-2">
            <span class="qiymet-text fw-bold">{{ item.price }} ₼</span>
            <small class="ulduz text-warning">★ {{ item.rating }}</small>
          </div>
          <div class="d-flex align-items-center gap-2">
            <button class="duyme-sebete" @click="addToBasket(item)">
              <i class="bi bi-bag-dash"></i><br />Səbətə at
            </button>
            <button class="duyme-sevimli">
              <i class="bi bi-bookmark"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



</template>

<script>
export default {
 data() {
  return {
    price: 50,
    filters: {
      popular: false,
      rated: false,
      cheap: false,
      expensive: false,
      brands: []
    },
    allBrands: ['Ziaja', 'Eveline', 'Neutrogena'],
    allProducts: [
      {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 22.10,
        rating: 5.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Eveline'
      },
  {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 35.10,
        rating: 5.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Ziaja'
      },
       {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 22.10,
        rating: 5.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Eveline'
      },
       {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 10.10,
        rating: 5.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Eveline'
      },



       {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 222.10,
        rating: 5.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Eveline'
      },
       {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 225.10,
        rating: 5.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Eveline'
      },
       {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 5.10,
        rating: 5.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Eveline'
      },
       {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 12.10,
        rating: 5.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Neutrogena'
      },
      {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 12.10,
        rating: 5.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Neutrogena'
      },


      {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 12.10,
        rating: 5.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Neutrogena'
      },
      {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 89.90,
        rating: 5.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Neutrogena'
      },
      {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 22.10,
        rating: 3.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Neutrogena'
      },
        {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 22.10,
        rating: 3.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Neutrogena'
      },
        {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 22.10,
        rating: 3.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Neutrogena'
      },
        {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 22.10,
        rating: 3.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Neutrogena'
      },
        {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 22.10,
        rating: 3.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Neutrogena'
      },
        {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 22.10,
        rating: 3.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Neutrogena'
      },

      {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 12.10,
        rating: 1.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Neutrogena'
      },
      {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 12.10,
        rating: 5.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Neutrogena'
      },
      {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 32.10,
        rating: 5.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Neutrogena'
      },
       {
        name: 'Eveline Royal Snail Oil Body Lotion Intensely',
        category: 'Günəş kremi',
        price: 23.10,
        rating: 5.0,
        image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
        brand: 'Eveline'
      },
    ]
  }
},
computed: {
  filteredProducts() {
    return this.allProducts.filter(product => {
      if (product.price > this.price) return false;
      if (this.filters.brands.length && !this.filters.brands.includes(product.brand)) return false;
      if (this.filters.popular && product.rating < 4.5) return false;
      if (this.filters.rated && product.rating < 4.2) return false;
      if (this.filters.cheap && product.price >= 10) return false;
      if (this.filters.expensive && product.price < 20) return false;
      return true;
    });
  }
},
methods: {
  addToBasket(product) {
    console.log('Səbətə əlavə olundu:', product.name, '-', product.price);
  }
}

};
</script>
<script setup>
import { ref } from 'vue'

const slider = ref(null)

const scrollLeft = () => {
  slider.value.scrollBy({ left: -300, behavior: 'smooth' })
}
const scrollRight = () => {
  slider.value.scrollBy({ left: 300, behavior: 'smooth' })
}

const addToBasket = (item) => {
  console.log('Səbətə atıldı:', item)
}

const popularProducts = [
  {
    name: 'Eveline Royal Snail Oil',
    category: 'Günəş kremi',
    price: 22.10,
    rating: 5.0,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
  {
    name: 'Bielenda Vitamin C Serum',
    category: 'Üz serumu',
    price: 35.99,
    rating: 4.9,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
  {
    name: 'Farmstay Black Snail',
    category: 'Krem',
    price: 28.50,
    rating: 4.8,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
  {
    name: 'Loreal Hyaluron Şampun',
    category: 'Saç baxımı',
    price: 19.99,
    rating: 4.7,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
    {
    name: 'Loreal Hyaluron Şampun',
    category: 'Saç baxımı',
    price: 19.99,
    rating: 4.7,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
    {
    name: 'Loreal Hyaluron Şampun',
    category: 'Saç baxımı',
    price: 19.99,
    rating: 4.7,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
    {
    name: 'Loreal Hyaluron Şampun',
    category: 'Saç baxımı',
    price: 19.99,
    rating: 4.7,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
]
</script>


<style scoped>
.text-danger {
  color: #d6002f !important;
}
.fw-semibold {
  font-weight: 600;
}
.mehsul-karti {
  min-width: 188px;
  border: none;
}

.kart img {
  height: 140px;
  object-fit: contain;
}

.qiymet-text {
  font-size: 16px;
  color: #000;
}


.duyme-sebete {
  border: none;
  background-color: #f8d7da;
  padding: 5px;
  font-size: 0.85rem;
  border-radius: 5px;
  color: #842029;
  transition: 0.3s ease;
}
.duyme-sebete:hover {
  background-color: #f1b0b7;
  cursor: pointer;
}
.duyme-sevimli {
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  color: #dc3545;
}


.btn-qutu button {
  width: 160px;
  height: 50px;
}


.btn-light i {
  color: #e6003e;
  width: 67px;
  height: 18px;
}

.mehsul-kateqoriya{
  margin-right: 88px;
padding-bottom: 21px;
font-size: small;
}
.kart{
  margin-left: 50px;
}

.duyme-sebete {
  background-color: #e6003e;
  color: #fff;
  border: none;
  padding: 4px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 2px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  margin-right: 5px;
  transition: background-color 0.3s ease;
}


.duyme-sebete i {
  font-size: 14px;
}

.duyme-sebete:hover {
  background-color: #c40035;
}

.duyme-sevimli {
  width: 36px;
  height: 36px;
  background-color: #FDC5D0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.duyme-sevimli i {
  font-size: 16px;
}
.pagination .page-item .page-link {
  border: none;
  color: #000;
  font-weight: 600;
  margin: 0 5px;
  border-radius: 12px;
  width: 36px;
  transition: background-color 0.3s ease;
}

.pagination .page-item .page-link:hover {
  background-color: #f2f2f2;
}

.pagination .page-item.active .page-link {
  background-color: #FDC5D0;
  color: #fff;
}
#pageshop{
  padding-left: 800px;
  padding-top: 25PX;
}


.slider-wrapper {
  display: flex;
  overflow-x: auto;
  gap: 16px;
  scroll-behavior: smooth;
  padding-bottom: 10px;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  z-index: 10;
}

.left-arrow {
  left: -18px;
}

.right-arrow {
  right: -18px;
}

</style>
