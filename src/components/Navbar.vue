<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="container-fluid d-flex flex-column p-0">

        <!-- Yuxarı hissə -->
        <div class="w-100 d-flex justify-content-between align-items-center px-3 py-2 navbar-top small">
          <div class="d-flex align-items-center gap-2 dropdown">
            <img src="https://flagcdn.com/16x12/az.png" alt="AZ" />
            <button
              class="btn btn-link p-0 text-decoration-none dropdown-toggle"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="color: inherit;"
            >
              Azərbaycan
            </button>
        
          </div>

          <div class="d-flex gap-3">
            <a href="#">Şirkət haqqında</a>
            <a href="#">Çatdırılma ilə bağlı məlumat</a>
          </div>

          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-telephone text-danger"></i>
            <span>+994 55 000 00 00</span>
            <a href="#" class="ms-2">Kömək</a>
          </div>
        </div>

        <!-- Orta hissə -->
        <div class="w-100 d-flex align-items-center justify-content-between px-3 py-2">

          <router-link to="/" class="nav-link p-0">
            <img src="/img/logo.png" alt="Logo" class="logo" style="width: 100px;" />
          </router-link>

          <div class="d-flex align-items-center gap-3">
            <div class="dropdown">
              <button
                class="btn btn-outline-danger d-flex align-items-center dropdown-toggle"
                type="button"
                id="productsDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style="white-space: nowrap; width: 162px;"
              >
                <i class="bi bi-list"></i> Bütün məhsullar
              </button>
              <ul class="dropdown-menu" aria-labelledby="productsDropdown">
                <li><router-link to="/shop" class="dropdown-item">Ziaja</router-link></li>
                <li><router-link to="/shop" class="dropdown-item">Eveline</router-link></li>
                <li><router-link to="/shop" class="dropdown-item">Neutrogena</router-link></li>
              </ul>
            </div>
          </div>

          <div class="input-group w-50">
            <input type="text" class="form-control" placeholder="Üz üçün xüsusi..." />
            <button class="btn btn-danger"><i class="bi bi-search"></i></button>
          </div>

          <div class="d-flex align-items-center gap-3">
            <router-link to="/login" class="nav-link">
              <i class="bi bi-person"></i> Giriş
            </router-link>

            <router-link to="/profile" class="nav-link">
              <i class="bi bi-person-circle"></i> Profil
            </router-link>

            <a href="#"><i class="bi bi-bookmark"></i> Sevimlilər</a>

            <a href="#" @click.prevent="showModal = true">
              <i class="bi bi-cart"></i> Səbət
              <span class="badge bg-danger ms-1">{{ basketCount }}</span>
            </a>
          </div>

        </div>

        <!-- Aşağı hissə -->
        <div class="w-100 d-flex justify-content-center gap-4 py-2 navbar-bottom">
          <a href="#">Saç</a>
          <a href="#">MakiYaj</a>
          <a href="#">Üz</a>
          <a href="#">Günəş</a>
          <a href="#">Bədən</a>
          <a href="#">Parfum</a>
          <a href="#">K-Beauty</a>
          <a href="#">Uşaq və ana</a>
          <a href="#">Markalar</a>
          <a href="#">Kampaniyalar</a>
          <a href="#">Hədiyyəlik dəstlər</a>
        </div>

      </div>
    </nav>

    <!-- Modal -->
    <div v-if="showModal" class="modal fade show d-block" tabindex="-1" style="background: rgba(0, 0, 0, 0.5)">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Səbət</h5>
            <button type="button" class="btn-close" @click="showModal = false"></button>
          </div>
          <div class="modal-body" v-if="basketItems.length > 0">
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center"
                  v-for="(item, index) in basketItems" :key="index">
                <span>{{ item.name }}</span>
                <span class="badge bg-secondary">{{ item.price }} ₼</span>
              </li>
            </ul>
          </div>
          <div class="modal-body" v-else>
            <p>Səbətiniz boşdur.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'

const basketCount = inject('basketCount', 0)
const basketItems = inject('basketItems', [])

const showModal = ref(false)
</script>

<style scoped>
a {
  text-decoration: none;
  color: #333;
}
a:hover {
  color: #d63384;
}
.badge {
  font-size: 0.75rem;
}


.navbar-top {
  background-color: #FFF1F4 !important;
}


.navbar-bottom {
  background-color: #FFF1F4 !important;
}
.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0;
}
</style>
