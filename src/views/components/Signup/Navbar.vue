<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Kampung<span>Siber</span></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Beranda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Contact Us</a>
            </li>
            <li class="nav-item">
              <a href="/tes" class="btn btn-green">Sign In</a>
            </li>
          </ul>
        </div> -->
    </div>
  </nav>
  <!-- 
    <section style="height: 1000px">adasdasdsa</section> -->
</template>

<style scoped>
nav {
  font-family: var(--font-family);
  background-color: #343a40 !important;
}
.navbar-brand,
.nav-link {
  color: #fff;
}
.nav-link.active {
  color: #fff;
  text-decoration: underline;
}
.navbar-nav {
  column-gap: 1rem;
}
.navbar-brand span {
  color: #00dc72;
}
.navbar-toggler:focus {
  box-shadow: none;
}
.collapse {
  flex-grow: 0;
}
.navbar-toggler {
  border: none;
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
.btn-green {
  background-color: #00dc72;
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavbarSignup",
});
</script>
