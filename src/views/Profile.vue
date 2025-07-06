<template>
  <div class="container py-5">
    <div class="row">
      <!-- Profil tərəfi -->
      <div class="col-md-3 d-flex flex-column align-items-center">
        <div class="profile-circle mb-3">
          <i class="bi bi-person fs-2 text-danger"></i>
        </div>
        <p class="fw-semibold">Nazim Ibrahimov</p>
      </div>

      <!-- Məlumatlar və Sifarişlər -->
      <div class="col-md-9">
        <ul class="nav nav-tabs border-0">
          <li class="nav-item">
            <a
              class="nav-link px-3"
              :class="{ active: activeTab === 'profile' }"
              href="#"
              @click.prevent="activeTab = 'profile'"
            >
              Hesab məlumatlarım
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link px-3"
              :class="{ active: activeTab === 'orders' }"
              href="#"
              @click.prevent="activeTab = 'orders'"
            >
              Bütün sifarişlərim
            </a>
          </li>
        </ul>

        <!-- Hesab məlumatları -->
        <div v-if="activeTab === 'profile'" class="pt-4">
          <form @submit.prevent="handleSubmit">
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Ad Soyad</label>
                <input type="text" class="form-control" v-model="form.name" required />
              </div>
              <div class="col-md-6">
                <label class="form-label">Telefon</label>
                <input type="text" class="form-control" v-model="form.phone" required />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Email ünvanı</label>
                <input type="email" class="form-control" v-model="form.email" required />
              </div>
              <div class="col-md-6">
                <label class="form-label">Çatdırılma ünvanı</label>
                <input type="text" class="form-control" v-model="form.address" required />
              </div>
            </div>
            <button type="submit" class="btn btn-danger px-4 py-2 rounded">
              Yadda saxla
            </button>
          </form>
        </div>

        <!-- Sifarişlər -->
        <div v-if="activeTab === 'orders'" class="pt-4">
          <h5 class="fw-semibold mb-4">Sifarişlərim</h5>
          <div
            v-for="item in orders"
            :key="item.id + item.title"
            class="d-flex justify-content-between align-items-center mb-4"
          >
            <div class="d-flex align-items-center gap-3">
              <img
                :src="item.image"
                alt="product"
                class="rounded"
                style="width: 64px; height: 64px; object-fit: cover"
              />
              <div>
                <p class="mb-1 fw-semibold">{{ item.title }}</p>
                <small class="text-muted">Sifariş tarixi: {{ item.date }}</small>
              </div>
            </div>
            <div class="text-end">
              <p class="mb-1 text-muted">{{ item.qty }} {{ item.unit }}</p>
              <p class="fw-semibold">{{ item.total }} AZN</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="successModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Uğurla yadda saxlanıldı</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Bağla"></button>
          </div>
          <div class="modal-body">Məlumatlar uğurla yadda saxlanıldı.</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bağla</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('profile')

const form = ref({
  name: 'Nazim Ibrahimov',
  phone: '+994 (50) 123–45–67',
  email: 'nazimibrahimov@gmail.com',
  address: 'Gəncə pr. 321b, 14-cü mərtəbə'
})

const orders = ref([
  {
    id: 1,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
    title: 'Eveline Royal Snail Oil Bo...',
    date: '19.12.2022',
    qty: '4 ədəd',
    unit: '',
    total: 50
  },
  {
    id: 2,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
    title: 'Morphe 35F Fall Into Fabulous',
    date: '19.12.2022',
    qty: '3 ədəd',
    unit: '',
    total: 80
  },
  {
    id: 3,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
    title: 'Revolution Eyeshadow Palette',
    date: '19.12.2022',
    qty: '2 ədəd',
    unit: '',
    total: 88
  },
  {
    id: 4,
    image: '/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png',
    title: 'LYKD Eyeshadow Palette 38b',
    date: '19.12.2022',
    qty: '1 ədəd',
    unit: '',
    total: 225
  }
])

const handleSubmit = () => {
  const allFilled = Object.values(form.value).every(field => field.trim() !== '')
  if (allFilled) {
    const modal = new bootstrap.Modal(document.getElementById('successModal'))
    modal.show()
  }
}
</script>

<style scoped>
.profile-circle {
  width: 70px;
  height: 70px;
  background-color: #ffeef0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-tabs .nav-link.active {
  border-bottom: 2px solid #dc3545;
  color: #dc3545;
  font-weight: 500;
}

.nav-tabs .nav-link {
  color: #6c757d;
}
</style>
