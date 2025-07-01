<template>
  <div v-if="product" class="container py-5">
    <!-- Məhsul əsas hissə -->
    <div class="row">
      <!-- Şəkillər -->
      <div class="col-md-4 text-center">
        <img :src="product.image" class="img-fluid mb-3" alt="Məhsul Şəkli" />
        <div class="d-flex justify-content-center gap-2">
          <img
            v-for="(thumb, i) in product.thumbnails"
            :key="i"
            :src="thumb"
            class="img-thumbnail"
            width="50"
          />
        </div>
      </div>

      <!-- Məhsul məlumatı -->
      <div class="col-md-5">
        <h4 class="fw-bold">{{ product.name }}</h4>

        <div class="my-2">
          <button class="btn btn-light btn-sm me-2">#YeniMəhsullar</button>
          <button class="btn btn-light btn-sm">#ÇoxSatılanlar</button>
        </div>

        <div class="d-flex align-items-center my-2">
          <span class="me-1">★ ★ ★ ★ ☆</span>
          <span class="text-muted ms-2">{{ product.reviewCount }} dəyərləndirmə</span>
        </div>

        <div class="my-3">
          <span class="text-danger fw-bold me-2">-10%</span>
          <del class="text-muted me-2">{{ product.originalPrice }}₼</del>
          <span class="fw-bold fs-5">{{ product.price }}₼</span>
        </div>

        <h6 class="fw-bold mt-4">Məhsul haqqında</h6>
        <ul class="small">
          <li>Ən təbii bitki ekstraktlarından hazırlanmış formula təbiət dərinliklərindən gəlir.</li>
          <li>Dərinin çirklənmədən arınma gücü, makiyaj təmizliyi və ölü dəri hüceyrələrinin sorulması.</li>
          <li>Genişləmiş dəri çalanlarını təravətləndirir və dəri tonunu bərabərləşdirir.</li>
          <li>Qızartı, qaralma və səpkilərin sağalma prosesini sürətləndirir.</li>
          <li>Dərin təmizlik və məsamələri aktiv şəkildə təmizləyir.</li>
        </ul>
        <a href="#" class="text-danger small">Daha çox</a>
      </div>

      <!-- Sağ tərəf -->
      <div class="col-md-3">
        <div class="border p-3 rounded-4 shadow-sm bg-white">
          <p class="mb-3 fs-6">
            Hal-hazırda stokda <span class="text-success fw-bold">688</span> ədəd var
          </p>

          <div class="d-flex align-items-center bg-light rounded p-2 mb-3">
    <img src="/img/kapital.png" alt="Kapital Kart" width="121" height="160" />

            <span class="fw-semibold">6.57 ₼ / ay</span>
          </div>

          <ul class="list-unstyled small text-secondary mb-3">
            <li class="mb-1">✔ 100% orijinal məhsul</li>
            <li class="mb-1">✔ Pulsuz çatdırılma</li>
            <li class="mb-1">✔ Qapıda ödəniş</li>
          </ul>

          <button class="btn btn-danger w-100 py-2 fw-semibold" @click="addToCart">
            Səbətə əlavə et
          </button>
        </div>
      </div>
    </div>

    <!-- Rəy yaz -->
    <div class="mt-5">
      <h4 class="mb-3">Məhsula olan fikrinizi bildirin</h4>
      <textarea
        v-model="userComment"
        class="form-control mb-3"
        rows="4"
        placeholder="Fikirinizi bildirin..."
      ></textarea>
      <button class="btn btn-danger" @click="submitComment">Göndər</button>
    </div>

    <!-- Rəylər -->
    <div class="mt-5">
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

    <!-- Ən çox satılanlar -->
    <div class="mt-5">
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
    originalPrice: 40,
    price: 36,
    description: 'Qısa məhsul təsviri...',
  },
]

const product = ref(null)

onMounted(() => {
  product.value = products.find(p => p.id === productId)
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
img[alt="Kart"] {
  object-fit: contain;
  border-radius: 6px;
}
</style>
