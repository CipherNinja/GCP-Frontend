<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm custom-navbar">
    <div class="container">
      <!-- Logo -->
      <a href="#" class="navbar-brand">
        <img src="@/assets/logo.png" alt="Logo" class="brand-logo" />
      </a>
      <!-- Toggler Button -->
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
      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbarNav"> 
        <ul class="navbar-nav ms-auto"> 
          <li class="nav-item"> <router-link to="/" class="nav-link">Home</router-link> </li> 
          <li class="nav-item"> <router-link to="/about" class="nav-link">About</router-link> </li> 
          <li class="nav-item"> <router-link to="/products" class="nav-link">Products</router-link> </li> 
          <li class="nav-item"> <router-link to="/services" class="nav-link">Services</router-link> </li> 
          <li class="nav-item"> <router-link to="/contact" class="nav-link">Contact</router-link> </li> 
          <li class="nav-item"> <router-link to="/faq" class="nav-link">FAQ</router-link> </li> 
        </ul> 
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    // Ensure Bootstrap JS components work when Vue updates the DOM
    const bootstrapCollapse = new window.bootstrap.Collapse(
      document.querySelector('#navbarNav'),
      {
        toggle: false,
      }
    );
  },
};
</script>

<style scoped>
/* Navbar Styling */
.custom-navbar {
  background: radial-gradient(ellipse 160px 120px at center, #111204, #111204);
  backdrop-filter: blur(134.37px);
  transition: all 0.3s ease-in-out;
}

/* Logo Styling */
.brand-logo {
  height: 65px;
  transition: transform 0.3s ease;
}

.brand-logo:hover {
  transform: scale(1.2);
}

/* Adjusted Logo Positioning */
.navbar-brand {
  margin-left: -80px; /* Moves the logo further left */
}

/* Navbar Links Styling */
.navbar-nav .nav-link {
  font-weight: 500;
  font-size: 16px;
  color: #f8f9fa;
  transition: color 0.3s ease, box-shadow 0.3s ease;
  padding: 8px 12px;
  border-radius: 5px;
}

.navbar-nav .nav-link:hover {
  color: #f3f6f9;
  box-shadow: inset 0 -2px 0 #17a2b8;
}

.navbar-nav .nav-link.active {
  color: #17a2b8;
}

/* Navbar Items Margin */
.navbar-nav .nav-item {
  margin: 0 10px;
}

/* Navbar Button Animation */
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23f8f9fa' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28248,249,250,0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* Responsive Design */
@media (max-width: 992px) {
  .custom-navbar {
    border-bottom: none;
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  }

  .navbar-nav .nav-link {
    font-size: 14px;
    margin: 5px 0;
  }

  .navbar-brand {
    text-align: center;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .brand-logo {
    height: 40px;
  }
}
</style>
