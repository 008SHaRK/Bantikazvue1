<template>
  <div class="container mt-5">
    <h3>Hesabınıza daxil olun</h3>
    <p>Hesabınıza daxil olaraq, gündəlik ehtiyaclarınızı əldə edə və sifarişlərinizi istənilən vaxtı rəsmiləşdirə bilərsiniz.</p>

    <div class="row mt-4">
      <!-- Login Form -->
      <div class="col-md-6 bg-light p-4 rounded">
        <h6>İlk öncə şəxsi məlumatlarınızı yazın:</h6>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <input type="text" v-model="username" class="form-control" placeholder="Nazim" required />
          </div>
          <div class="mb-3">
            <input type="password" v-model="password" class="form-control" placeholder="Şifrəni daxil edin" required />
          </div>
          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="rememberMe" v-model="rememberMe" />
            <label class="form-check-label" for="rememberMe">Remember me</label>
            <a href="#" class="float-end text-decoration-none">Şifrəni unutmusunuz?</a>
          </div>
          <button type="submit" class="btn btn-danger w-100">Giriş et</button>
        </form>
        <div class="mt-3">
          Hesabınız yoxdur? 
          <router-link to="/register" class="text-danger text-decoration-none">Qeydiyyatdan keçin</router-link>
        </div>
      </div>

      <!-- Registration Box -->
      <div class="col-md-4 offset-md-1 bg-light p-4 rounded text-center">
        <i class="bi bi-person-plus display-3 mb-3"></i>
        <p>Hələ də qeydiyyatdan keçməmisiniz?</p>
        <router-link to="/register">
          <button class="btn btn-danger">Qeydiyyatdan keç</button>
        </router-link>
      </div>
    </div>
  </div>
 
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const rememberMe = ref(false)

const handleLogin = () => {
  console.log('Daxil olunur:', username.value, password.value, rememberMe.value)
 
}
</script>

<style scoped>
i {
  font-size: 3rem;
}

</style>
