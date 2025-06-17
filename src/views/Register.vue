
<template>
  <div class="container py-5">
    <h3>Hesabınıza daxil olun</h3>
    <p class="text-muted">
      Hesabınıza daxil olaraq, gündəlik ehtiyaclarınızı əldə edə və sifarişlərinizi istənilən vaxtı rəsmiləşdirə bilərsiniz.
    </p>

    <div class="row mt-4">
      <!-- Form hissəsi -->
      <div class="col-md-6 bg-light p-4 rounded">
        <h6>İlk öncə şəxsi məlumatlarınızı yazın:</h6>
        <form @submit.prevent="registerUser">
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Adınız və soyadınız" v-model="name" required />
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" placeholder="Email ünvanı" v-model="email" required />
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" placeholder="Şifrə" v-model="password" required />
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" placeholder="Təkrar şifrə" v-model="confirmPassword" required />
          </div>
          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="agree" v-model="agree" required />
            <label class="form-check-label" for="agree">
              <a href="#" class="text-danger text-decoration-none">Qaydalar və Şərtlər</a> hissəsini oxudum və razıyam
            </label>
          </div>
          <button type="submit" class="btn btn-danger w-100">Qeydiyyatdan keç</button>
        </form>

        <div class="mt-3 text-center">
          Artıq hesabınız var? <router-link to="/login" class="text-danger text-decoration-none">Giriş edin!</router-link>
        </div>
      </div>

      <!-- Sağ panel -->
      <div class="col-md-4 offset-md-1 bg-light p-4 rounded text-center">
        <i class="bi bi-person-plus display-3 mb-3"></i>
        <p>Artıq Bantik-də hesabınız var?</p>
        <router-link to="/login">
          <button class="btn btn-danger">Giriş et</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const agree = ref(false)

const registerUser = () => {
  if (password.value !== confirmPassword.value) {
    alert('Şifrələr eyni deyil!')
    return
  }

  // Əlavə: email doğrulama kodu göndərmə (aşağıda izah olunacaq)
  sendVerificationEmail(email.value)
}
</script>

<style scoped>
.container {
  max-width: 1000px;
}
</style>
