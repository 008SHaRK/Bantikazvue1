<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 sidebar">
        <h5>Makiyaj</h5>
        <label for="price">Qiymət</label>
        <input type="range" class="form-range" min="0" max="100" v-model="price">

        <div class="filter mt-3">
          <h6>Filter</h6>
          <div><input type="checkbox" v-model="filters.popular"> Ən çox satılanlar</div>
          <div><input type="checkbox" v-model="filters.rated"> Ən çox qiymətləndirilən</div>
          <div><input type="checkbox" v-model="filters.cheap"> Ucuz olan</div>
          <div><input type="checkbox" v-model="filters.expensive"> Bahalı olan</div>
        </div>

        <div class="brands mt-3">
          <h6>Markalar</h6>
          <div v-for="brand in allBrands" :key="brand">
            <input type="checkbox" :value="brand" v-model="filters.brands"> {{ brand }}
          </div>
        </div>
      </div>

      <div class="col-md-10">
        <h5>Makiyaj məhsullarında ən çox satılanlar</h5>
        <div class="row">
          <div
            class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti"
            v-for="(product, index) in popularProducts"
            :key="index">
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

        <h6 class="mt-4">Çeşidləməyə görə Makiyaj məhsulları - {{ allProducts.length }} ədəd</h6>
        <div class="row">
          <div
            class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti"
            v-for="(product, index) in filteredProducts"
            :key="index">
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

        <nav class="mt-4 d-flex justify-content-center">
          <ul class="pagination">
            <li class="page-item" v-for="page in totalPages" :key="page">
              <a class="page-link" href="#" @click.prevent="currentPage = page">{{ page }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="page-buttons">
  <button
    v-for="page in totalPages"
    :key="page"
    :class="{ active: page === currentPage }"
    @click="currentPage = page"
  >
    {{ page }}
  </button>
</div>

</template>

<script>

export default {
  name: "MakiyajPage",
  data() {
    return {
      price: 100,
      filters: {
        popular: true,
        rated: false,
        cheap: false,
        expensive: false,
        brands: []
      },
        paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.allProducts.slice(start, start + this.itemsPerPage);
  }, 
      allBrands: ["Eveline", "Pupa", "Garnier", "Note", "Victoria's Secret"],
      popularProducts: [
        {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
          {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 10.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },


           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
      ],
      allProducts: [
        {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },

           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },

           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },

           {
          image: "/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png",
          price: 22.10,
          brand: "Eveline",
          name: "Eveline Royal Snail Oil Body Lotion Intensely ...",
          category: "Günəş kremi",
          rating: 5.0
        },
      ],
      cart: [],
      currentPage: 1,
      itemsPerPage: 20
    };
  },
  computed: {
    filteredProducts() {
      let result = this.allProducts.filter(p =>
        (!this.filters.brands.length || this.filters.brands.includes(p.brand)) &&
        (this.price >= p.price)
      );
      return result.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.allProducts.length / this.itemsPerPage);
    }
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
      alert(`${product.name} səbətə əlavə olundu!`);
    }
  }
};
</script>
<style scoped>
.sidebar {
  padding: 20px;
}
.mehsul-karti {
  margin-bottom: 20px;
}
.kart {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  height: 100%;
}
.img-fluid {
  max-height: 140px;
  object-fit: contain;
  margin-bottom: 10px;
}
.mehsul-ad {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  color: #000;
  min-height: 36px;
  margin-bottom: 5px;
}
.mehsul-kateqoriya {
  font-size: 12px;
  color: #6c757d;
  margin-bottom: 5px;
}
.qiymet {
  font-size: 14px;
  margin-bottom: 8px;
}
.qiymet-text {
  font-weight: bold;
  color: #000;
}
.ulduz {
  font-size: 13px;
  color: #f1c40f;
}
.d-flex.align-items-center.gap-2 {
  gap: 4px !important;
}
.duyme-sebete {
  background-color: #e60023;
  color: white;
  border: none;
  font-size: 12px;
  border-radius: 6px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
}
.duyme-sebete i {
  font-size: 14px;
  margin-right: 4px;
}
.duyme-sevimli {
  background-color: #FDC5D0;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 4px 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  color: #000;
}
</style>

