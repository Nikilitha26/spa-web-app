<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm custom-nav fixed-top">
      <div class="container">
        <!-- Updated brand with image logo -->
        <router-link class="navbar-brand" to="/">
          <img src="https://nikilitha26.github.io/assess-images/Screenshot_2025-03-20_123347-removebg-preview.png" alt="Sharenet Logo" class="navbar-logo" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contactus">Contact Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/workshops">Workshops</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
/* App-level Styles */
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

/* Navbar Customization */
.custom-nav {
  padding: 15px 20px; 
  background-color: #f8f9fa; 
}

.navbar-logo {
  height: 60px; 
  width: auto;
  transition: transform 0.3s ease;
}

.navbar-logo:hover {
  transform: scale(1.1); 
}

.navbar-nav .nav-link {
  font-size: 1.2rem;
  color: #333;
  font-weight: 500;
  padding: 8px 15px; 
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.navbar-nav .nav-link:hover {
  color: #0066cc;
  border-radius: 5px; 
}

.navbar-nav .nav-link.router-link-exact-active {
  font-weight: bold;
  color: #0066cc; 
}

/* Responsive Tweaks */
@media (max-width: 768px) {
  .navbar-logo {
    height: 30px; 
  }

  .nav-link {
    font-size: 0.9rem;
  }
}
</style>
