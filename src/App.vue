<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm custom-nav fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">SHARENET</router-link>
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
    <router-view/>
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
  padding: 15px 20px; /* Increased height slightly for a more spacious look */
  background-color: #f8f9fa; /* Light background */
}

.navbar-brand {
  font-size: 1.8rem;
  font-weight: bold;
  color: #0066cc; /* Primary blue color */
}

.navbar-brand:hover {
  color: #004085; /* Slightly darker blue on hover */
}

.navbar-nav .nav-link {
  font-size: 1.2rem;
  color: #333;
  font-weight: 500;
  padding: 8px 15px; /* Added extra padding for better spacing */
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.navbar-nav .nav-link:hover {
  color: #0066cc;
  background-color: rgba(0, 102, 204, 0.1); /* Soft blue highlight on hover */
  border-radius: 5px; /* Rounded look */
}

.navbar-nav .nav-link.router-link-exact-active {
  font-weight: bold;
  color: #0066cc; /* Highlight active link */
}

/* Responsive Tweaks */
@media (max-width: 768px) {
  .navbar-brand {
    font-size: 1.5rem;
  }

  .nav-link {
    font-size: 0.9rem;
  }
}
</style>
