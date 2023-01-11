<template>
  <section class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-lg-7 d-flex flex-column justify-content-between box-1"
        >
          <h1>
            Klinik Coding <br />
            Pertama di Indonesia!
          </h1>
          <p>
            Sekarang kamu ga perlu overthinking menghadapi error dan bug lagi
            dengan konsultasi sama "dokter-dokter" coding kita sesuai
            spesialisasinya lho
          </p>
          <div class="">
            <button class="btn btn-green">Book Sekarang!</button>
          </div>
        </div>
        <div class="col-md-6 col-lg-5 d-flex justify-content-center box-2">
          <img src="/assets/images/Banner.png" class="banner-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  font-family: "PopPins", sans-serif;
  margin-top: 56px;
  background: linear-gradient(180deg, #000d18 0%, #021c35 100%);
}
.row {
  row-gap: 36px;
}
.box-1 {
  padding-top: 24px;
  row-gap: 16px;
}
.box-2 {
  padding-bottom: 24px;
}
.banner-img {
  width: 280px;
}
h1,
p {
  margin: 0;
  padding: 0;
}
h1 {
  font-size: 26px;
}
p {
  font-weight: 300;
  font-size: 16px;
}
.btn-green {
  background-color: #00dc72;
  color: #000;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
}

@media (min-width: 768px) {
  .row {
    padding-top: 24px;
    padding-bottom: 24px;
  }
  .box-1 {
    padding-top: 0;
  }
  .box-2 {
    padding-bottom: 0;
  }
  .banner-img {
    width: 400px;
  }
}

@media (min-width: 1024px) {
  section {
    height: 50vh;
  }
  .row {
    padding: 0;
  }
  .banner-img {
    width: 450px;
  }
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 20px;
  }
}
@media (min-width: 1440px) {
  section {
    height: 70vh;
  }
  h1 {
    font-size: 58px;
  }
  p {
    font-size: 24px;
  }
  button {
    font-size: 24px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BannerHome",
});
</script>
