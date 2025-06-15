<template>
  <header class="header_section">
    <div class="container">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <router-link to="/" class="navbar-brand">
          <span> Fior </span>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link to="/" class="nav-link">
                  Home <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link"> About </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/room" class="nav-link"> Room </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/location" class="nav-link"> Location </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header_section {
  padding-right: 25px;
  padding-left: 25px;
  margin: 0 auto;
}

.custom_nav-container.navbar-expand-lg .navbar-nav .nav-link {
  padding: 10px 30px;
  color: #434242;
  text-align: center;
}

.custom_nav-container.navbar-expand-lg .navbar-nav .nav-item.active .nav-link {
  position: relative;
}

.custom_nav-container.navbar-expand-lg .navbar-nav .nav-item.active .nav-link::after {
  content: '';
  position: absolute;
  width: 75px;
  left: 50%;
  height: 2.5px;
  background-color: #f98169;
  bottom: 8px;
  margin: 0 auto;
  display: block;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.custom_nav-container .nav_search-btn {
  background-image: url(../assets/images/search-icon.png);
  background-size: 22px;
  background-repeat: no-repeat;
  background-position-y: 7px;
  width: 35px;
  height: 35px;
  padding: 0;
  border: none;
}

.navbar-brand span {
  font-family: 'Baloo Chettan', cursive;
  font-size: 24px;
  font-weight: 700;
  color: #191919;
  margin-top: 5px;
}

.custom_nav-container {
  z-index: 99999;
  padding: 5px 0;
}

.custom_nav-container .navbar-toggler {
  outline: none;
}

.custom_nav-container .navbar-toggler .navbar-toggler-icon {
  background-image: url(../assets/images/menu.png);
  background-size: 45px;
}
</style>
