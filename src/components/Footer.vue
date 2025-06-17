<template>
    <div class="container">
       <!-- footer start -->
       <footer class="section-p1">
        <div class="col">
            <img class="logo2"   src="/img/0b44def0465340297eff4bef20d8860586d80d39.png" alt="">
            <h4>Contact</h4>
            <p> <strong>Adress:</strong> 562 Welligington Rood. Street 32. San Francisco</p>
            <p> <strong>Phone:</strong>+01 222 365 /(+91) 01 2345 6789</p>
            <p> <strong>Hours:</strong>10:00 - 18:00 , Mon - Sat</p>
            <div class="follow">
                <h4>Follow us</h4>
                <div class="icon">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-pinterest-p"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
        <div class="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact us</a>
        </div>
        <div class="col">
            <h4>My Account</h4>
            <a href="#">Sign In </a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>
        <div class="copyright">
            <p>2021, P138-etc HTML CSS Ecommerce Template</p>
        </div>
    </footer>
    <!-- footer end -->
   </div>
</template>

 <style scoped>
 footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 9 px;
  background-color: #da1247;
  padding-top: 10px;
  margin-left: 5.5px;
  padding-left: 14px;
}

footer .col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

footer .logo2 {
  width: 35%;
  height: 15vh;
  margin-bottom: 5%;
}

footer h4 {
  font-size: 14px;
  padding-bottom: 20px;
}

footer p {
  font-size: 13px;
  margin: 0 0 8px 0;
}

footer a {
  font-size: 13px;
  text-decoration: none;
  color: #222;
  margin-bottom: 10px;
}

footer .follow {
  margin-top: 20px;
}

footer .follow i {
  color: #465b52;
  padding-right: 4px;
  cursor: pointer;
}

footer .install .row img {
  border: 1px solid #088178;
  border-radius: 6px;
}


footer .install img {
  margin: 10px 0 15px 0;
}

footer .follow i:hover,
footer a:hover {
  color: #088178;
}

footer .copyright {
  width: 100%;
  text-align: center;
}
</style>