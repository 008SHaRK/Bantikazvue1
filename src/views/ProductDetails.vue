<template>
  <div v-if="product" class="container py-5">
    <div class="container py-5">
    <div class="row">
      <!-- Sol: Şəkil -->
      <div class="col-md-4 text-center">
        <img :src="mainImage" class="img-fluid mb-3" style="max-height: 350px;" />
        <div class="d-flex flex-column align-items-center">
          <img
            v-for="(img, index) in images"
            :key="index"
            :src="img"
            class="img-thumbnail my-1"
            style="width: 60px; cursor: pointer;"
            @click="mainImage = img"
          />
        </div>
      </div>

      <!-- Sağ: Məlumat -->
      <div class="col-md-8">
        <div class="d-flex flex-wrap align-items-center mb-2">
          <button class="btn btn-outline-secondary btn-sm me-2">#YeniMəhsullar</button>
          <button class="btn btn-outline-secondary btn-sm">#ÇoxSatılanlar</button>
        </div>

        <h4>MEDI-PEEL Algo-Tox Deep Clear</h4>

        <div class="d-flex align-items-center mb-2">
          <span class="text-warning me-2">★★★★☆</span>
          <small>685 dəyərləndirmə</small>
        </div>

        <div class="d-flex align-items-center mb-3">
          <span class="badge bg-danger me-2">-10%</span>
          <del class="text-muted me-2">40.00₼</del>
          <span class="fs-5 fw-bold text-dark">36.00₼</span>
        </div>

        <h6>Məhsul haqqında</h6>
        <ul>
          <li>5% bitki ekstraktından hazırlanmış formula təbii detoks effekti verir.</li>
          <li>Dərinin quruluşunu və səth yağını təmizləyir.</li>
          <li>İltihabı azaldır, yaraların və sızanaqların sağalmasına kömək edir.</li>
          <li>Dəri məsamələrini effektiv şəkildə təmizləyir və genişlənmiş məsamələri kiçildir.</li>
          <li>Həcmi: 150 ml</li>
        </ul>

        <div class="d-flex align-items-center justify-content-between mt-4 p-3 border rounded-3 bg-light">
          <div>
            <span class="text-success">Hal-hazırda stokda</span>
            <strong class="text-dark">588</strong>
            <span>ədəd var</span>
          </div>
          <button class="btn btn-danger">Səbətə əlavə et</button>
        </div>
      </div>
    </div>
  </div>

    <div class="mb-5">
      <h4 class="mb-3">Məhsula olan fikrinizi bildirin</h4>
      <textarea
        v-model="userComment"
        class="form-control mb-3"
        rows="4"
        placeholder="Fikirinizi bildirin..."
      ></textarea>
      <button class="btn btn-danger" @click="submitComment">Göndər</button>
    </div>

    <div class="mb-5">
      <h5 class="mb-3">Rəylər</h5>
      <div
        v-for="(comment, index) in comments"
        :key="index"
        class="border rounded p-3 mb-3"
      >
        <div class="d-flex justify-content-between">
          <strong>{{ comment.name }}</strong>
          <small class="text-muted">{{ comment.date }}</small>
        </div>
        <div class="text-warning">⭐⭐⭐⭐⭐</div>
        <p class="mb-0">{{ comment.text }}</p>
      </div>
    </div>

    <div>
      <h4 class="mb-3">Bu gün ən çox satılanlar</h4>
      <div class="d-flex overflow-auto gap-3 pb-3">
        <div
          v-for="item in bestSellers"
          :key="item.id"
          class="card"
          style="min-width: 200px;"
        >
          <img :src="item.image" class="card-img-top" />
          <div class="card-body">
            <h6 class="card-title">{{ item.name }}</h6>
            <p class="card-text">{{ item.price }}₼</p>
            <div>⭐ {{ item.rating }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container py-5">
    <h3>Məhsul tapılmadı.</h3>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.id

const userComment = ref('')

const products = [
  {
    id: '1',
    name: 'MEDI-PEEL Algo-Tox Deep Clear',
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
    thumbnails: [
      '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
      '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
      '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
    ],
    isNew: true,
    isDiscounted: true,
    rating: 4.3,
    reviewCount: 18,
    originalPrice: 35,
    price: 30,
    description:
      'Məhsul haqqında qısa təsvir. Bu sahə məhsulun xüsusiyyətlərini əks etdirir və istifadəçiyə məlumat verir.',
  },
  // İstəyə görə əlavə məhsullar əlavə edə bilərsən
]

const product = ref(null)

onMounted(() => {
  product.value = products.find(p => p.id == productId)
})

const comments = ref([
  { name: 'Aysel', date: '28.06.2025', text: 'Çox gözəl məhsuldur!' },
  { name: 'Elvin', date: '27.06.2025', text: 'Məhsul keyfiyyətlidir və tez çatdırıldı.' },
  { name: 'Nigar', date: '26.06.2025', text: 'Təklif edirəm. Əla nəticə.' },
])

const bestSellers = ref([
  {
    id: '101',
    name: 'Black Snail Mask',
    price: 30.0,
    rating: 4.6,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
  {
    id: '102',
    name: 'Vitamin C Serum',
    price: 25.0,
    rating: 4.7,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
  {
    id: '103',
    name: 'Royal Snail Toner',
    price: 29.0,
    rating: 4.8,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
  {
    id: '104',
    name: 'Lip Balm',
    price: 15.0,
    rating: 4.4,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
])

function addToCart() {
  alert(`"${product.value?.name}" səbətə əlavə edildi!`)
}

function submitComment() {
  if (!userComment.value.trim()) {
    alert('Zəhmət olmasa, fikrinizi yazın.')
    return
  }
  comments.value.push({
    name: 'İstifadəçi',
    date: new Date().toLocaleDateString('az-AZ'),
    text: userComment.value.trim(),
  })
  userComment.value = ''
}
</script>

<style scoped>
ul {
  padding-left: 1.2rem;
}
.card {
  border-radius: 12px;
}
.card img {
  height: 180px;
  object-fit: cover;
}
</style>
