<template>
  <!-- info section -->
  <section class="info_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="info_logo">
            <h5>Fior</h5>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration
            </p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_links pl-lg-5">
            <h5>Useful Link</h5>
            <ul>
              <li>
                <router-link to="/"> Home </router-link>
              </li>
              <li class="active">
                <router-link to="/about"> About </router-link>
              </li>
              <li>
                <router-link to="/room"> Room </router-link>
              </li>
              <li>
                <router-link to="/location"> Location </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_contact">
            <h5>Contact</h5>
            <div>
              <img src="../assets/images/location-white.png" alt="" />
              <p>It is a long fact that a reader</p>
            </div>
            <div>
              <img src="../assets/images/telephone-white.png" alt="" />
              <p>+01 1234567890</p>
            </div>
            <div>
              <img src="../assets/images/envelope-white.png" alt="" />
              <p>demo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end info_section -->

  <!-- footer section -->
  <footer class="container-fluid footer_section">
    <p>
      &copy; <span id="displayYear"></span> All Rights Reserved By
      <a href="https://html.design/">Free Html Templates</a>
    </p>
  </footer>
  <!-- footer section -->
</template>

<style scoped>
.container-fluid {
  padding-right: 25px;
  padding-left: 25px;
}

.info_section {
  background-color: #252525;
  color: #ffffff;
}

.info_section h5 {
  margin-bottom: 20px;
  font-weight: 700;
}

.info_section .info_logo h5 {
  font-size: 38px;
  font-family: 'Baloo Chettan', cursive;
}

.info_links ul {
  padding-left: 15px;
}

.info_links ul .active::before {
  background-color: #e1603a;
}

.info_links ul .active a {
  color: #e1603a;
}

.info_links ul li {
  list-style-type: none;
  position: relative;
  margin-bottom: 10px;
}

.info_links ul li::before {
  content: '';
  left: -15px;
  top: 50%;
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #ffffff;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.info_links ul li a {
  color: #ffffff;
}

.info_contact > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.info_contact > div img {
  width: 20px;
  height: auto;
  margin-right: 12px;
}

/* footer section*/
.footer_section {
  background-color: #252525;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
}

.footer_section::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 239px;
  height: 217px;
  background-image: url(../assets/images/flower.png);
  background-size: cover;
}

.footer_section p {
  border-top: 1px solid #ffffff;
  color: #ffffff;
  margin: 0;
  text-align: center;
  padding: 20px 35px;
  margin: 0;
  position: relative;
}

.footer_section a {
  color: #ffffff;
}

@media (max-width: 768px) {
  .info_section {
    text-align: center;
  }

  .info_section .col-md-3 {
    margin: 25px 0;
  }

  .info_links ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .info_insta,
  .info_contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
