<template>
  <section class="banner">
    <div class="container my-5">
      <div class="row g-3">
        <!-- Böyük Banner -->
        <div class="col-lg-8">
          <div
            class="banner-boyuk position-relative rounded p-4 text-white"
            style="background-color: #e20035; height: 480px"
          >
            <h2 class="fw-bold fs-3">
              İndi alış-verişdə <br />20% endirim əldə edin
            </h2>
            <button class="btn btn-danger text-light" id="btn1">
              <i class="bi bi-bag"></i>Ətraflı məlumat
            </button>
        
          </div>
        </div>

        <!-- Kiçik Bannerlər -->
        <div class="col-lg-4 d-flex flex-column gap-3">
          <!-- Üst Banner -->
          <div
            class="banner-kicik position-relative text-white rounded p-3"
            style="background-color: #f59bac; height: 230px"
          >
            <h5 class="fw-bold">Endirimli <br />Setlərimiz</h5>
            <button
              class="btn btn-danger text-light position-absolute"
              style="bottom: 15px; left: 15px"
            >
              <i class="bi bi-bag"></i> Ətraflı məlumat
            </button>
            <img
              src="/img/99acdb66c80580a40c528333cc225cd3068ae0e9.png"
              alt="Set"
              class="position-absolute top-0 end-0 w-50 h-auto"
              style="object-fit: cover"
            />
          </div>

          <!-- Alt Bannerlər -->
          <div class="d-flex gap-3">
            <!-- Sol Kiçik -->
            <div
              class="rounded p-3 position-relative bg-light"
              style="flex: 1; height: 230px; background: #e48a8a"
            >
              <h6 class="fw-bold">Saç baxım setləri</h6>
              <img
                src="/img/94a600e11451339e8bb7450f6252be8af19758da.png"
                alt="Dove"
                class="position-absolute bottom-0 start-0 w-100 h-auto"
                style="object-fit: contain"
              />
            </div>

            <!-- Sağ Kiçik -->
            <div
              class="rounded p-3 text-white position-relative"
              style="flex: 1; background-color: #8f8ae4; height: 230px"
            >
              <h6 class="fw-bold">Üz kremlərində 50% endirim</h6>
              <img
                src="/img/8f955f5ad25c5efce02b93e5eb4593b8edbb9f21.png"
                alt="Üz kremi"
                class="position-absolute bottom-0 start-0 w-100 h-auto"
                style="object-fit: contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="xidmetler py-5">
      <div class="container">
        <div class="row text-center">
    
          <div class="col-6 col-md-3 col-lg-2 mx-auto mb-4">
            <i class="bi bi-bag-dash fs-1 text-danger mb-2"></i>
            <p class="mb-0">İndi bir toxunuşla <br> kosmetika əşyalarını sifariş edin</p>
          </div>
    
          <div class="col-6 col-md-3 col-lg-2 mx-auto mb-4">
            <i class="bi bi-droplet-half fs-1 text-danger mb-2"></i>
            <p class="mb-0">Üz baxımı setlərimizə <br> indi saytımızdan baxa bilərsiniz</p>
          </div>
    
          <div class="col-6 col-md-3 col-lg-2 mx-auto mb-4">
            <i class="bi bi-pencil-square fs-1 text-danger mb-2"></i>
            <p class="mb-0">Sifarişləriniz qeyd <br>  olunduqdan sonra sizinlə əlaqəyə keçirik</p>
          </div>
    
          <div class="col-6 col-md-3 col-lg-2 mx-auto mb-4">
            <i class="bi bi-truck fs-1 text-danger mb-2"></i>
            <p class="mb-0">Çatdırılmamız <br> təhlükəsiz və sürətlidir,  həm də ödənişsiz!</p>
          </div>
    
        </div>

          <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap" id="yeni-mehsul">
            <h2 class="mb-0 fs-4 fw-bold">Yeni Məhsullarımız</h2>
            <a href="#" class="text-danger fw-semibold text-decoration-none">
              Bütün məhsullar <i class="bi bi-arrow-right-short"></i>
            </a>
          </div>
           </div>
    </section>
    <section class="mehsul-karusel py-5">
  <div class="container">
    <div class="row overflow-auto flex-nowrap gx-4">
      
    <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
    <div class="kart p-3 border rounded-3 text-center">
      <img src="/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
      <h6 class="mehsul-ad text-truncate">
        Eveline Royal Snail Oil <br> Body Lotion Intensely ...
      </h6>
      <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
      <div class="qiymet d-flex justify-content-between align-items-center mb-2">
        <span class="qiymet-text fw-bold">22.10 ₼</span>
        <small class="ulduz text-warning">★ 5.0</small>
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="duyme-sebete"
          @click="addToBasket({ name: 'Eveline Royal Snail Oil', price: 22.10 })">
          <i class="bi bi-bag-dash"></i>
          <br> Səbətə at
        </button>
        <button class="duyme-sevimli">
          <i class="bi bi-bookmark"></i>
        </button>
      </div>
    </div>
  </div>

    <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
    <div class="kart p-3 border rounded-3 text-center">
      <img src="/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
      <h6 class="mehsul-ad text-truncate">
        Eveline Royal Snail Oil <br> Body Lotion Intensely ...
      </h6>
      <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
      <div class="qiymet d-flex justify-content-between align-items-center mb-2">
        <span class="qiymet-text fw-bold">22.10 ₼</span>
        <small class="ulduz text-warning">★ 5.0</small>
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="duyme-sebete"
          @click="addToBasket({ name: 'Eveline Royal Snail Oil', price: 22.10 })">
          <i class="bi bi-bag-dash"></i>
          <br> Səbətə at
        </button>
        <button class="duyme-sevimli">
          <i class="bi bi-bookmark"></i>
        </button>
      </div>
    </div>
  </div>

    <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
    <div class="kart p-3 border rounded-3 text-center">
      <img src="/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
      <h6 class="mehsul-ad text-truncate">
        Eveline Royal Snail Oil <br> Body Lotion Intensely ...
      </h6>
      <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
      <div class="qiymet d-flex justify-content-between align-items-center mb-2">
        <span class="qiymet-text fw-bold">22.10 ₼</span>
        <small class="ulduz text-warning">★ 5.0</small>
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="duyme-sebete"
          @click="addToBasket({ name: 'Eveline Royal Snail Oil', price: 22.10 })">
          <i class="bi bi-bag-dash"></i>
          <br> Səbətə at
        </button>
        <button class="duyme-sevimli">
          <i class="bi bi-bookmark"></i>
        </button>
      </div>
    </div>
  </div>

  <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
    <div class="kart p-3 border rounded-3 text-center">
      <img src="/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
      <h6 class="mehsul-ad text-truncate">
        Eveline Royal Snail Oil <br> Body Lotion Intensely ...
      </h6>
      <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
      <div class="qiymet d-flex justify-content-between align-items-center mb-2">
        <span class="qiymet-text fw-bold">22.10 ₼</span>
        <small class="ulduz text-warning">★ 5.0</small>
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="duyme-sebete"
          @click="addToBasket({ name: 'Eveline Royal Snail Oil', price: 22.10 })">
          <i class="bi bi-bag-dash"></i>
          <br> Səbətə at
        </button>
        <button class="duyme-sevimli">
          <i class="bi bi-bookmark"></i>
        </button>
      </div>
    </div>
  </div>

      <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
    <div class="kart p-3 border rounded-3 text-center">
      <img src="/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
      <h6 class="mehsul-ad text-truncate">
        Eveline Royal Snail Oil <br> Body Lotion Intensely ...
      </h6>
      <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
      <div class="qiymet d-flex justify-content-between align-items-center mb-2">
        <span class="qiymet-text fw-bold">22.10 ₼</span>
        <small class="ulduz text-warning">★ 5.0</small>
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="duyme-sebete"
          @click="addToBasket({ name: 'Eveline Royal Snail Oil', price: 22.10 })">
          <i class="bi bi-bag-dash"></i>
          <br> Səbətə at
        </button>
        <button class="duyme-sevimli">
          <i class="bi bi-bookmark"></i>
        </button>
      </div>
    </div>
  </div>

     <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
    <div class="kart p-3 border rounded-3 text-center">
      <img src="/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
      <h6 class="mehsul-ad text-truncate">
        Eveline Royal Snail Oil <br> Body Lotion Intensely ...
      </h6>
      <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
      <div class="qiymet d-flex justify-content-between align-items-center mb-2">
        <span class="qiymet-text fw-bold">22.10 ₼</span>
        <small class="ulduz text-warning">★ 5.0</small>
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="duyme-sebete"
          @click="addToBasket({ name: 'Eveline Royal Snail Oil', price: 22.10 })">
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
  </div>
   <section class="endirim-bloku">
      <div class="endirim-icerik d-flex align-items-center justify-content-center">
        <div class="icon-qutu">
          <img src="/img/crc_transparent.png" alt="Endirim iconu" />
        </div>
        <div class="endirim-yazi ms-4">
          <h2>İndi bütün alış-verişlərdə</h2>
          <p><span class="vurqulu">20% endirim</span> əldə edin</p>
        </div>
      </div>
    </section>
     <section class="mehsul-karusel py-5">
    <div class="container">
         <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap" id="yeni-mehsul">
      <h2 class="mb-0 fs-4 fw-bold">Ən çox satılan məhsullar</h2>
      <a href="#" class="text-danger fw-semibold text-decoration-none">
        Bütün məhsullar <i class="bi bi-arrow-right-short"></i>
      </a>
    </div>
      <div class="row overflow-auto flex-nowrap gx-4">
        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
          <div class="kart p-3 border rounded-3 text-center">
            <img src="/img/242814557cd7298d0069ee097f1af9a8e6dee948.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
            <h6 class="mehsul-ad text-truncate">Eveline Royal Snail Oil <br> Body Lotion Intensely ...</h6>
            <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
            <div class="qiymet d-flex justify-content-between align-items-center mb-2">
              <span class="qiymet-text fw-bold">22.10 ₼</span>
              <small class="ulduz text-warning">★ 5.0</small>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="duyme-sebete">
                <i class="bi bi-bag-dash"></i>
               <br> Səbətə at
              </button>
              <button class="duyme-sevimli">
                <i class="bi bi-bookmark"></i>
              </button>
            </div>
          </div>
        </div>
  


        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
          <div class="kart p-3 border rounded-3 text-center">
            <img src="/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
            <h6 class="mehsul-ad text-truncate">Eveline Royal Snail Oil <br> Body Lotion Intensely ...</h6>
            <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
            <div class="qiymet d-flex justify-content-between align-items-center mb-2">
              <span class="qiymet-text fw-bold">62.10 ₼</span>
              <small class="ulduz text-warning">★ 1.0</small>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="duyme-sebete">
                <i class="bi bi-bag-dash"></i>
               <br> Səbətə at
              </button>
              <button class="duyme-sevimli">
                <i class="bi bi-bookmark"></i>
              </button>
            </div>
          </div>
        </div>


        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
          <div class="kart p-3 border rounded-3 text-center">
            <img src="/img/a49a7e056684900b475932f243777f68bdcfdb38.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
            <h6 class="mehsul-ad text-truncate">Eveline Royal Snail Oil <br> Body Lotion Intensely ...</h6>
            <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
            <div class="qiymet d-flex justify-content-between align-items-center mb-2">
              <span class="qiymet-text fw-bold">35.10 ₼</span>
              <small class="ulduz text-warning">★ 2.5</small>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="duyme-sebete">
                <i class="bi bi-bag-dash"></i>
               <br> Səbətə at
              </button>
              <button class="duyme-sevimli">
                <i class="bi bi-bookmark"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
          <div class="kart p-3 border rounded-3 text-center">
            <img src="/img/11fadd755e5882e67a3787d3ef0dabce1bf1d008.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
            <h6 class="mehsul-ad text-truncate">Eveline Royal Snail Oil <br> Body Lotion Intensely ...</h6>
            <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
            <div class="qiymet d-flex justify-content-between align-items-center mb-2">
              <span class="qiymet-text fw-bold">25.10 ₼</span>
              <small class="ulduz text-warning">★ 4.0</small>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="duyme-sebete">
                <i class="bi bi-bag-dash"></i>
               <br> Səbətə at
              </button>
              <button class="duyme-sevimli">
                <i class="bi bi-bookmark"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
          <div class="kart p-3 border rounded-3 text-center">
            <img src="/img/0d693b11598f992f3afad136b497a2943d5db52f.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
            <h6 class="mehsul-ad text-truncate">Eveline Royal Snail Oil <br> Body Lotion Intensely ...</h6>
            <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
            <div class="qiymet d-flex justify-content-between align-items-center mb-2">
              <span class="qiymet-text fw-bold">18.90 ₼</span>
              <small class="ulduz text-warning">★ 5.0</small>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="duyme-sebete">
                <i class="bi bi-bag-dash"></i>
               <br> Səbətə at
              </button>
              <button class="duyme-sevimli">
                <i class="bi bi-bookmark"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
          <div class="kart p-3 border rounded-3 text-center">
            <img src="/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
            <h6 class="mehsul-ad text-truncate">Eveline Royal Snail Oil <br> Body Lotion Intensely ...</h6>
            <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
            <div class="qiymet d-flex justify-content-between align-items-center mb-2">
              <span class="qiymet-text fw-bold">22.10 ₼</span>
              <small class="ulduz text-warning">★ 5.0</small>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="duyme-sebete">
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
    </div>
  </section>
  <section class="mehsul-karusel py-5">
    <div class="container">
      <div class="row overflow-auto flex-nowrap gx-4">
        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
          <div class="kart p-3 border rounded-3 text-center">
            <img src="/img/487eda6a280362fa31ec27beb34f0b9f457ed712.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
            <h6 class="mehsul-ad text-truncate">Eveline Royal Snail Oil <br> Body Lotion Intensely ...</h6>
            <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
            <div class="qiymet d-flex justify-content-between align-items-center mb-2">
              <span class="qiymet-text fw-bold">22.10 ₼</span>
              <small class="ulduz text-warning">★ 5.0</small>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="duyme-sebete">
                <i class="bi bi-bag-dash"></i>
               <br> Səbətə at
              </button>
              <button class="duyme-sevimli">
                <i class="bi bi-bookmark"></i>
              </button>
            </div>
          </div>
        </div>
  


        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
          <div class="kart p-3 border rounded-3 text-center">
            <img src="/img/96a2e02af0d1e71f8a5b08ad4ead9f4ef8bc4a19.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
            <h6 class="mehsul-ad text-truncate">Eveline Royal Snail Oil <br> Body Lotion Intensely ...</h6>
            <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
            <div class="qiymet d-flex justify-content-between align-items-center mb-2">
              <span class="qiymet-text fw-bold">62.10 ₼</span>
              <small class="ulduz text-warning">★ 1.0</small>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="duyme-sebete">
                <i class="bi bi-bag-dash"></i>
               <br> Səbətə at
              </button>
              <button class="duyme-sevimli">
                <i class="bi bi-bookmark"></i>
              </button>
            </div>
          </div>
        </div>


        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
          <div class="kart p-3 border rounded-3 text-center">
            <img src="/img/a49a7e056684900b475932f243777f68bdcfdb38.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
            <h6 class="mehsul-ad text-truncate">Eveline Royal Snail Oil <br> Body Lotion Intensely ...</h6>
            <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
            <div class="qiymet d-flex justify-content-between align-items-center mb-2">
              <span class="qiymet-text fw-bold">35.10 ₼</span>
              <small class="ulduz text-warning">★ 2.5</small>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="duyme-sebete">
                <i class="bi bi-bag-dash"></i>
               <br> Səbətə at
              </button>
              <button class="duyme-sevimli">
                <i class="bi bi-bookmark"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
          <div class="kart p-3 border rounded-3 text-center">
            <img src="/img/11fadd755e5882e67a3787d3ef0dabce1bf1d008.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
            <h6 class="mehsul-ad text-truncate">Eveline Royal Snail Oil <br> Body Lotion Intensely ...</h6>
            <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
            <div class="qiymet d-flex justify-content-between align-items-center mb-2">
              <span class="qiymet-text fw-bold">25.10 ₼</span>
              <small class="ulduz text-warning">★ 4.0</small>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="duyme-sebete">
                <i class="bi bi-bag-dash"></i>
               <br> Səbətə at
              </button>
              <button class="duyme-sevimli">
                <i class="bi bi-bookmark"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
          <div class="kart p-3 border rounded-3 text-center">
            <img src="/img/0d693b11598f992f3afad136b497a2943d5db52f.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
            <h6 class="mehsul-ad text-truncate">Eveline Royal Snail Oil <br> Body Lotion Intensely ...</h6>
            <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
            <div class="qiymet d-flex justify-content-between align-items-center mb-2">
              <span class="qiymet-text fw-bold">18.90 ₼</span>
              <small class="ulduz text-warning">★ 5.0</small>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="duyme-sebete">
                <i class="bi bi-bag-dash"></i>
               <br> Səbətə at
              </button>
              <button class="duyme-sevimli">
                <i class="bi bi-bookmark"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mehsul-karti">
          <div class="kart p-3 border rounded-3 text-center">
            <img src="/img/242814557cd7298d0069ee097f1af9a8e6dee948.png" class="img-fluid mb-3" alt="Məhsul Şəkli">
            <h6 class="mehsul-ad text-truncate">Eveline Royal Snail Oil <br> Body Lotion Intensely ...</h6>
            <p class="mehsul-kateqoriya text-muted mb-1">Günəş kremi</p>
            <div class="qiymet d-flex justify-content-between align-items-center mb-2">
              <span class="qiymet-text fw-bold">22.10 ₼</span>
              <small class="ulduz text-warning">★ 5.0</small>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="duyme-sebete">
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
    </div>
  </section>
   
</section>
 <div class="container">
    <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap" id="yeni-mehsul">
      <h2 class="mb-0 fs-4 fw-bold">Mağazalarımız</h2>
    </div>
  </div>
   <section class="magazalarimiz">

   <dic class="container">
    <div class="slider-container">

      <div class="slider-container">
        <button class="slider-btn sol">
          <img src="/img/indir.svg" alt="sol">
        </button>
      
        <div class="slider-items">
          <div class="slider-items">
            <div class="magaza" id="nerimanov">
              <img src="/img/nerimanov.png" alt="Nərimanov filialı">
              <div class="overlay"></div>
              <div class="etiket">Nərimanov filialımız</div>
            </div>
      
            <div class="magaza" id="qarayev">
              <img src="/img/qarayev.png" alt="Qara Qarayev filialı">
              <div class="overlay"></div>
              <div class="etiket">Qara Qarayev filialımız</div>
            </div>
          </div>
        </div>
      
        <button class="slider-btn sag">
          <img src="/img/indir (2).svg" alt="sag">
        </button>
      </div>
    
    </div>
   </dic>
  </section>
 <section class="elaqe-banner">

  <div class="sol">
    <h2>Xidmətlərimizdən <br> yararlanmaq üçün:</h2>
  </div>

  <div class="sag">
    <div class="nomre">+99477-200-77-77</div>
    <p class="destek">texniki dəstəklə danış</p>
  </div>

  </section>



</template>
<script setup>
import { inject } from 'vue'
const addToBasket = inject('addToBasket')
</script>
<style scoped>
/* Bütün CSS buraya yazılır */

.banner-boyuk {
  background-image: url('/img/esas.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#btn1 {
  margin-top: 320px;
}

.banner-kicik {
  overflow: hidden;
  border-radius: 3px;
  color: white;
  height: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner-kicik h5,
.banner-kicik button {
  z-index: 2;
  position: relative;
}

#kiçik1 {
  width: 450px;
  height: 228px;
}
#kiçik2 {
  width: 233px;
  height: 228px;
}

.banner-endirimli {
  background-color: #e81f41;
  background-image: url('/img/99acdb66c80580a40c528333cc225cd3068ae0e9.png');
  background-size: cover;
  background-position: right;
}

.banner-sac {
  background-color: #f7e1e3;
  background-image: url('/img/94a600e11451339e8bb7450f6252be8af19758da.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  color: black;
}

.banner-krem {
  background-color: #9c95d7;
  background-image: url('/img/8f955f5ad25c5efce02b93e5eb4593b8edbb9f21.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
}

.btn-etrafli {
  background-color: white;
  color: #e81f41;
  font-weight: 500;
  border-radius: 3px;
}
.butun-mehsullar {
  font-size: 1rem;
  transition: all 0.3s ease;
}

.butun-mehsullar:hover {
  color: #b1002e;
  text-decoration: underline;
}

.xidmetler i {
  transition: transform 0.3s ease;
}

.xidmetler i:hover {
  transform: scale(1.2);
}

#yeni-mehsul {
padding-top: 25px;
}
.basliq {
  font-size: 24px;
  font-weight: bold;
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

.endirim-bloku {
position: relative;
margin-top: 40px;
 margin-left:121px ;
  width: 1296px;
  height: 375px;
  background-color: #e6003e;
  overflow: hidden;
}

.endirim-bloku::before {
  content: "";
  width: 797px;
  position: absolute;
  inset: 0;
  background-image: url("/img/b7e77854ec69103843bc020495e88a077962896a.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  z-index: 1;
}

.endirim-icerik {
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 0 60px;
  display: flex;
  align-items: center;
}

.icon-qutu img {
  width: 120px;
  height: auto;
}

.endirim-yazi h2 {
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  color: #000;
}

.endirim-yazi p {
  font-size: 26px;
  margin: 10px 0 0;
  color: #000;
}

.endirim-yazi .vurqulu {
  color: #fff;
  font-weight: bold;
}
.magazalarimiz {
  text-align: center;
  padding: 60px 0;
  font-family: 'Inter', sans-serif;
}

.magazalarimiz h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 40px;
  color: #2D2D2D;
}

.slider-container {
  /* padding-right: 135px; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}


.slider-btn {
  position: relative;
  z-index: 2;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #F93B82;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.slider-btn:hover {
  background-color: #e42f72;
}

.slider-btn img {
  width: 16px;
  height: 16px;
  filter: brightness(0) invert(1); 
}


.slider-items {
  display: flex;
  gap: 30px;
}

.magaza {
  position: relative;
  width: 500px;
  height: auto;
  overflow: hidden;
}

.magaza img {

  width: 564px;
  height: 375px;
  display: block;
  align-items: center;
}




.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(255,255,255,0.45), rgba(255,255,255,0));
}

.etiket {
  position: absolute;
  bottom: 20px;
  left: 120px;
  transform: translateX(-50%);
  border: 2px solid #F93B82;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #2D2D2D;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.slider-btn:hover {
  opacity: 0.8;
}
.elaqe-banner {
  margin-left: 100px;
  width: 1290px;
  height: px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 120px;
  background-color: #E40046;
  color: white;
  overflow: hidden;
}


.elaqe-banner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url('/img/b7e77854ec69103843bc020495e88a077962896a.png') no-repeat center;
  background-size: cover;
  opacity: 0.15;
  z-index: 0;
}

.sol h2 {
  font-size: 36px;
  line-height: 1.4;
  font-weight: 500;
  z-index: 1;
  position: relative;
  margin: 0;
}

.sag {
  z-index: 1;
  position: relative;
  text-align: center;
}

.nomre {
  font-size: 24px;
  font-weight: 600;
  color: white;
  padding: 14px 30px;
  border: 3px solid black;
  border-radius: 40px;
  display: inline-block;
  background-color: transparent;
}

.destek {
  margin-top: 12px;
  font-size: 14px;
  color: white;
}

</style>
