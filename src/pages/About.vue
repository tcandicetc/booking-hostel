<template>
  <!-- about section -->
  <section class="about_section">
    <div class="section_number">01</div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-xl-7">
          <div class="img-box">
            <img src="../assets/images/about-img.png" alt="" />
          </div>
        </div>
        <div class="col-md-5 col-xl-5">
          <div class="detail_box">
            <div class="heading_container justify-content-end">
              <h2>About Flowers</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since ever since ever since
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end about section -->

  <!-- why section -->
  <section class="why_section layout_padding">
    <div class="section_number">02</div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Why Choose Us</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin wordsContrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from 45 BC, making it over
            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
            Virginia, looked up one of the more obscure Latin words
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- end why section -->
</template>

<style scoped>
.about_section {
  padding: 125px 0;
  position: relative;
}

.about_section .section_number {
  display: block;
  position: absolute;
  width: 75px;
  height: 75px;
  text-align: center;
  line-height: 75px;
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
  border-radius: 100%;
  background: -webkit-gradient(linear, left top, left bottom, from(#e1603a), to(#dc373d));
  background: linear-gradient(to bottom, #e1603a, #dc373d);
  right: 5%;
  top: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.about_section .detail_box {
  text-align: right;
}

.about_section .detail_box p {
  margin: 35px 0;
}

.about_section .img-box img {
  width: 100%;
}

.why_section {
  text-align: center;
  color: #ffffff;
  background-image: url(../assets/images/why-bg.jpg);
  background-size: cover;
  position: relative;
}

.why_section .section_number {
  display: block;
  position: absolute;
  width: 75px;
  height: 75px;
  text-align: center;
  line-height: 75px;
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
  border-radius: 100%;
  background: -webkit-gradient(linear, left top, left bottom, from(#e1603a), to(#dc373d));
  background: linear-gradient(to bottom, #e1603a, #dc373d);
  top: 0;
  left: 5%;
  top: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.why_section h2 {
  font-weight: bold;
}

.why_section p {
  margin: 60px 0;
}

.why_section a {
  display: inline-block;
  padding: 10px 55px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  color: #e1603a;
  border-radius: 30px;
}

.why_section a:hover {
  background-color: transparent;
  color: #ffffff;
}

.heading_container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.heading_container h2 {
  position: relative;
  font-weight: bold;
}

.heading_container h2::before {
  content: url(../images/tulip.png);
  position: absolute;
  top: 50%;
  left: -35px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

@media (max-width: 768px) {
  .about_section .img-box {
    margin-bottom: 45px;
  }
}

@media (max-width: 576px) {
  .heading_container h2::before {
    left: 0;
  }

  .heading_container h2 {
    padding-left: 45px;
  }
}

@media (max-width: 420px) {
  .about_section .img_container {
    height: 185px;
  }
}
</style>
