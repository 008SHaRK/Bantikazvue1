<template>
 <div v-if="product" class="container py-5">
    <!-- Breadcrumb -->
    <nav class="mb-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Ana səhifə</a></li>
        <li class="breadcrumb-item"><a href="#">Makiyaj</a></li>
        <li class="breadcrumb-item active" aria-current="page">Üz baxım seti</li>
      </ol>
    </nav>

    <h3 class="fw-bold mb-3">MEDI-PEEL Algo-Tox Deep Clear</h3>

    <div class="row gx-5">

      <div class="col-md-7">
        <div class="row">
       
          <div class="col-md-6 text-center mb-4 mb-md-0">
            <img :src="mainImage" alt="Məhsul Şəkli" class="img-fluid mb-3 border rounded" />
            <div class="d-flex justify-content-center gap-2">
              <img
                v-for="(img, index) in images"
                :key="index"
                :src="img"
                @click="mainImage = img"
                class="img-thumbnail"
                style="width: 60px; height: 60px; object-fit: cover; cursor: pointer;"
              />
            </div>
          </div>

       
          <div class="col-md-6">
            <div class="mb-2">
              <span class="badge bg-light text-dark border me-2">#YeniMəhsullar</span>
              <span class="badge bg-light text-dark border">#ÇoxSatılanlar</span>
            </div>

            <div class="d-flex align-items-center mb-2">
              <span class="text-warning me-2">★ 4.8</span>
              <small class="text-muted">(655 dəyərləndirmə)</small>
            </div>

            <div class="mb-3">
              <span class="badge bg-danger me-2">-10%</span>
              <del class="text-muted me-2">40.00₼</del>
              <span class="h5 fw-bold">36.00₼</span>
            </div>

            <h5 class="fw-bold mt-4">Məhsul haqqında</h5>
            <ul class="small text-muted mb-2">
              <li>15 növ bitki ekstraktından hazırlanmış formula təbii detoks effekti verir;</li>
              <li>Dərinin qurudulmadan artıq yağı, çirki, makiyajı təmizləyir və ölü hüceyrələri aşındırır;</li>
              <li>Səpgilər, tıxanmış məsamələr və sebumu tarazlayır;</li>
              <li>İltihabı azaldır, qızartıları və sızanaqların sağalma prosesini sürətləndirir;</li>
              <li>Dərin təmizləmə və məsamə sıxlaşdırma effekti;</li>
            </ul>

            <p class="small text-muted">Həcm: 150 ml</p>
            <button class="btn btn-dark btn-sm mt-2">Daha çox</button>
          </div>
        </div>
      </div>

    
      <div class="col-md-5 w-10 h-50">
        <div class="p-4 rounded-4" style="background-color: #FFE8ED;">
          <p class="mb-3" style="color: #259F2F;">
            Hal-hazırda stokda <span class="fw-bold">588 ədəd</span> var
          </p>

          <div class="d-flex align-items-center gap-3 mb-3">
            <img src="/img/birbank.png" alt="Birbank"
                 style="width: 48px; height: 70px;" />
            <div>
              <div class="border rounded-2 px-2 py-1 text-center fw-semibold" style="width: fit-content;">
                6.67 × 6 Ay
              </div>
              <small class="d-block mt-1 text-black-50" style="font-size: 13px;">
                Birbank taksit kartı ilə 3 və ya 6 aya faizsiz ödə!
              </small>
            </div>
          </div>

          <div class="d-flex justify-content-between text-center mb-3">
            <div>
              <img src="/img/taksıd.png" alt="Taksitlə ödə" style="height: 28px;" />
              <div class="small">taksitlə ödə</div>
            </div>
            <div>
              <img src="/img/qapıda.png" alt="Qapıda ödəniş" style="height: 28px;" />
              <div class="small">qapıda ödəniş</div>
            </div>
            <div>
              <img src="/img/onlıne.png" alt="Online ödəniş" style="height: 28px;" />
              <div class="small">online ödəniş</div>
            </div>
            <div>
              <img src="/img/kartla.png" alt="Kartla ödəniş" style="height: 28px;" />
              <div class="small">kartla ödəniş</div>
            </div>
          </div>

          <div class="d-flex">
            <button class="btn btn-danger flex-grow-1 rounded-3 fw-semibold" style="font-size: 14px; height: 44px;">
              <i class="bi bi-cart me-1"></i> Səbətə əlavə et
            </button>
            <button class="btn btn-outline-danger ms-2 rounded-3" style="width: 44px; height: 44px;">
              <i class="bi bi-bookmark"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- RƏYLƏR BÖLMƏSİ -->
<div class="container mt-5">
  <div class="row align-items-start">
    <!-- Rəy yaz -->
    <div class="col-md-7">
      <h4 class="fw-bold mb-3">Məhsula olan fikrinizi bildirin</h4>
      <div class="border border-danger rounded-3 p-3" style="min-height: 200px;">
        <textarea
          class="form-control border-0"
          rows="5"
          placeholder="Fikrini bildir...."
          style="resize: none; outline: none; box-shadow: none;"
        ></textarea>
        <div class="text-end mt-3">
          <button class="btn text-white" style="background-color: #E40046; padding: 6px 24px; border-radius: 6px;">
            Göndər
          </button>
        </div>
      </div>
    </div>

    <!-- Statistik rəy -->
    <div class="col-md-5 mt-4 mt-md-0">
      <h5 class="fw-bold mb-3">Rəylər</h5>
      <div v-for="n in 5" :key="n" class="d-flex align-items-center mb-2">
        <span class="me-2" style="width: 16px;">{{ n }}</span>
        <div class="progress flex-grow-1" style="height: 8px;">
          <div
            class="progress-bar"
            role="progressbar"
            :style="`width: ${ratings[n]}%; background-color: #E40046;`"
          ></div>
        </div>
      </div>

      <!-- Ümumi dəyərləndirmə -->
      <div class="d-flex align-items-center mt-4">
        <svg width="36" height="36" fill="#FFD93A" class="me-3" viewBox="0 0 16 16">
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.63.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
        <div>
          <div class="small">Ümumi dəyərləndirmə</div>
          <div class="fw-bold fs-4">4.8</div>
        </div>
      </div>
    </div>
  </div>
</div>
 <div class="container mt-4">
    <h5 class="fw-semibold mb-4">(22 rəy)</h5>

    <div v-for="(review, index) in reviews" :key="index" class="border-bottom pb-3 mb-3">
      <div class="mb-1 text-warning" style="font-size: 16px;">
        ★★★★★
      </div>
      <p class="mb-2" style="font-size: 14px;">
        {{ review.text }}
      </p>
      <div class="d-flex justify-content-between align-items-center small text-muted">
        <div>
          {{ review.user }} · {{ review.date }}
        </div>
        <div class="d-flex align-items-center" style="cursor: pointer;">
          <i class="bi bi-hand-thumbs-up me-1"></i> Şərhi bəyən ({{ review.likes }})
        </div>
      </div>
    </div>
  </div>

   <section class="en-cox-satilanlar py-5">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h2 class="fs-4 fw-bold mb-0">Bu gün ən çox satılanlar</h2>
        <a href="#" class="text-danger fw-medium">Bütün məhsullar</a>
      </div>

      <div class="position-relative">
        <button class="btn btn-light rounded-circle position-absolute start-0 top-50 translate-middle-y">
          <i class="bi bi-chevron-left text-danger fs-5"></i>
        </button>

        <div class="d-flex gap-3 overflow-auto pe-2">
          <div class="product-card bg-white shadow-sm p-3 rounded" v-for="(product, index) in products" :key="index">
            <img :src="product.image" alt="Məhsul şəkli" class="img-fluid mb-3" style="height: 160px; object-fit: contain;" />
            <h6 class="fw-medium fs-6 lh-sm mb-1">{{ product.title }}</h6>
            <p class="text-muted small mb-2">{{ product.category }}</p>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="fw-semibold">{{ product.price }} ₼</span>
              <span class="text-warning small"><i class="bi bi-star-fill"></i> {{ product.rating }}</span>
            </div>
            <div class="d-flex gap-2">
              <button class="btn btn-danger w-100 d-flex align-items-center justify-content-center gap-1">
                <i class="bi bi-bag"></i> <span class="d-none d-md-inline">Səbətə at</span>
              </button>
              <button class="btn btn-light text-danger">
                <i class="bi bi-bookmark"></i>
              </button>
            </div>
          </div>
        </div>

        <button class="btn btn-light rounded-circle position-absolute end-0 top-50 translate-middle-y">
          <i class="bi bi-chevron-right text-danger fs-5"></i>
        </button>
      </div>
    </div>
  </section>
  </div>
   


  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Rəylər
const reviews = [
  {
    text: "Anlatıldığı gibi güzel bir ürün satıcıyı tebrik ederim, sipariş aşaması, kargo teslim zamanı və paketləmə mükəmməl. 5 yıldız fazlası ilə hak ediyorlar, hayırlı işleriniz olsun",
    user: "E** Y*** - İstifadəçi",
    date: "3 fevral 2023",
    likes: 5,
  },
  {
    text: "Anlatıldığı gibi güzel bir ürün satıcıyı tebrik ederim, sipariş aşaması, kargo teslim zamanı və paketləmə mükəmməl. 5 yıldız fazlası ilə hak ediyorlar, hayırlı işleriniz olsun",
    user: "E** Y*** - İstifadəçi",
    date: "3 fevral 2023",
    likes: 5,
  },
  {
    text: "Anlatıldığı gibi güzel bir ürün satıcıyı tebrik ederim, sipariş aşaması, kargo teslim zamanı və paketləmə mükəmməl. 5 yıldız fazlası ilə hak ediyorlar, hayırlı işleriniz olsun",
    user: "E** Y*** - İstifadəçi",
    date: "3 fevral 2023",
    likes: 5,
  },
  {
    text: "Anlatıldığı gibi güzel bir ürün satıcıyı tebrik ederim, sipariş aşaması, kargo teslim zamanı və paketləmə mükəmməl. 5 yıldız fazlası ilə hak ediyorlar, hayırlı işleriniz olsun",
    user: "E** Y*** - İstifadəçi",
    date: "3 fevral 2023",
    likes: 5,
  },
];

// Reytinq faizləri
const ratings = {
  1: 65,
  2: 10,
  3: 40,
  4: 30,
  5: 5
}


const images = [
  '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
]
const mainImage = ref(images[0])

const route = useRoute()
const productId = route.params.id

const userComment = ref('')

const products = [
  {
    id: '1',
    title: 'Eveline Royal Snail Oil Body Lotion Intensely ...',
    category: 'Günəş kremi',
    price: '22.10',
    rating: '4.8',
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
  {
    id: '2',
    title: 'Vivienne Sabo Volume Lip Gloss - 08',
    category: 'Günəş kremi',
    price: '65.90',
    rating: '4.8',
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
  {
    id: '3',
    title: 'FarmStay Collagen Cream',
    category: 'Üz kremi',
    price: '34.50',
    rating: '4.9',
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
  {
    id: '4',
    title: 'Missha BB Cream SPF42',
    category: 'Makiyaj',
    price: '29.90',
    rating: '4.5',
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
    {
    id: '5',
    title: 'Missha BB Cream SPF42',
    category: 'Makiyaj',
    price: '29.90',
    rating: '4.5',
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
  },
]


const product = ref(null)
onMounted(() => {
  product.value = products.find(p => p.id === productId)
})


const comments = ref([
  { name: 'Aysel', date: '28.06.2025', text: 'Çox gözəl məhsuldur!' },
  { name: 'Elvin', date: '27.06.2025', text: 'Məhsul keyfiyyətlidir və tez çatdırıldı.' },
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

// Səbətə əlavə et
function addToCart() {
  alert(`"${product.value?.title}" səbətə əlavə edildi!`)
}

// Rəy göndər
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
img.img-thumbnail {
  border: 2px solid transparent;
}
img.img-thumbnail:hover {
  border-color: #198754;
}
.en-cox-satilanlar .d-flex {
  scrollbar-width: thin;
  scrollbar-color: #e40046 transparent;
}
.en-cox-satilanlar .d-flex::-webkit-scrollbar {
  height: 6px;
}
.en-cox-satilanlar .d-flex::-webkit-scrollbar-thumb {
  background-color: #e40046;
  border-radius: 4px;
}

</style>
