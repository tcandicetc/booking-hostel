<template>
  <!-- slider section -->
  <section class="slider_section position-relative">
    <div class="slider_number-container">
      <div class="number-box">
        <span> 01 </span>
        <hr />
        <span> 02 </span>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="col-lg-6 col-md-8">
                <div class="detail_box">
                  <h2>Welcome</h2>
                  <h1>Flowers shop</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-lg-6 col-md-8">
                <div class="detail_box">
                  <h2>Welcome</h2>
                  <h1>Flowers shop</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-lg-6 col-md-8">
                <div class="detail_box">
                  <h2>Welcome</h2>
                  <h1>Flowers shop</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel_btn-container">
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end slider section -->
</template>

<style scoped>
.slider_section {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  padding: 45px 0 75px 0;
}

.slider_section .slider_number-container {
  position: absolute;
  top: 45%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 4%;
}

.slider_section .slider_number-container .number-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #0b0a0b;
}

.slider_section .slider_number-container .number-box hr {
  border: none;
  width: 2px;
  height: 320px;
  background-color: #bcbcc0;
}

.slider_section .detail_box h2 {
  margin-bottom: 0;
}

.slider_section .detail_box h1 {
  font-weight: 600;
  color: #e1603a;
  font-size: 5rem;
  margin-bottom: 30px;
}

.slider_section .detail_box a {
  display: inline-block;
  padding: 8px 85px;
  background-color: #0d0806;
  border: 1px solid #0d0806;
  color: #ffffff;
  border-radius: 25px;
  margin: 35px 0;
}

.slider_section .detail_box a:hover {
  background-color: transparent;
  color: #0d0806;
}

.slider_section .carousel_btn-container {
  width: 100px;
  position: absolute;
  bottom: -20%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  left: 2%;
  z-index: 999;
}

.slider_section .carousel_btn-container .carousel-control-prev,
.slider_section .carousel_btn-container .carousel-control-next {
  position: relative;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 100%;
  opacity: 1;
  background-repeat: no-repeat;
  background-size: 12px;
  background-position: center;
  background-color: #e1603a;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-box-shadow: 2px 0px 23px -4px rgba(0, 0, 0, 0.32);
  box-shadow: 2px 0px 23px -4px rgba(0, 0, 0, 0.32);
}

.slider_section .carousel_btn-container .carousel-control-prev:hover,
.slider_section .carousel_btn-container .carousel-control-next:hover {
  background-color: #050505;
}

.slider_section .carousel_btn-container .carousel-control-prev {
  background-image: url(../assets/images/prev.png);
}

.slider_section .carousel_btn-container .carousel-control-next {
  background-image: url(../assets/images/next.png);
}

@media (max-width: 1299px) {
  .slider_section .slider_number-container {
    display: none;
  }
}

@media (max-width: 992px) {
  .slider_section.position-relative {
    padding: 75px 0 150px 0;
  }
}

@media (max-width: 576px) {
  .slider_section .detail_box {
    text-align: center;
  }

  .slider_section .carousel_btn-container {
    position: unset;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 45px;
  }

  .slider_section .carousel_btn-container .carousel-control-prev,
  .slider_section .carousel_btn-container .carousel-control-next {
    position: unset;
    transform: none;
    margin: 0 5px;
  }

  .slider_section.position-relative {
    padding-bottom: 75px;
  }
}

@media (max-width: 480px) {
  .slider_section .detail_box h1 {
    font-size: 3.5rem;
  }
}
</style>
