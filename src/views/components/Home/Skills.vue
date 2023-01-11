<template>
  <section>
    <div class="container">
      <div class="box d-flex flex-column align-items-center">
        <h2 class="text-center mb-3">Konsultan kita bisa apa aja sih?</h2>
        <p class="text-center">
          Kamu pasti kurang lebih penasaran dengan bahasa dan framework apa aja
          <br />
          yang konsultan kami kuasai kan? ini nih garis besarnya!
        </p>
        <div
          class="row d-flex align-items-center justify-content-center row-cols-4"
        >
          <div class="col d-flex flex-column flex-md-row align-items-center">
            <div class="wrapper-img">
              <img src="/assets/images/python.png" alt="" />
            </div>
            <p>Python</p>
          </div>
          <div class="col d-flex flex-column flex-md-row align-items-center">
            <div class="wrapper-img">
              <img src="/assets/images/vue.png" alt="" />
            </div>
            <p>Vue</p>
          </div>
          <div class="col d-flex flex-column flex-md-row align-items-center">
            <div class="wrapper-img">
              <img src="/assets/images/cpp.png" alt="" />
            </div>
            <p>C++</p>
          </div>
          <div class="col d-flex flex-column flex-md-row align-items-center">
            <div class="wrapper-img">
              <img src="/assets/images/angular.png" alt="" />
            </div>
            <p>Angular</p>
          </div>
          <div class="col d-flex flex-column flex-md-row align-items-center">
            <div class="wrapper-img">
              <img src="/assets/images/csharp.png" alt="" />
            </div>
            <p>C#</p>
          </div>
          <div class="col d-flex flex-column flex-md-row align-items-center">
            <div class="wrapper-img">
              <img src="/assets/images/laravel.png" alt="" />
            </div>
            <p>Laravel</p>
          </div>
          <div class="col d-flex flex-column flex-md-row align-items-center">
            <div class="wrapper-img">
              <img src="/assets/images/csharp.png" alt="" />
            </div>
            <p>C#</p>
          </div>
          <div class="col d-flex flex-column flex-md-row align-items-center">
            <div class="wrapper-img">
              <img src="/assets/images/laravel.png" alt="" />
            </div>
            <p>Laravel</p>
          </div>
          <div class="col d-flex flex-column flex-md-row align-items-center">
            <div class="wrapper-img">
              <img src="/assets/images/laravel.png" alt="" />
            </div>
            <p>Laravel</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  color: #000;
  margin-top: 56px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}
h2,
p {
  padding: 0;
  margin: 0;
}
.box {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 16px;
}
.box h2 {
  font-weight: 600;
}
.row {
  margin-top: 20px;
  row-gap: 8px;
  column-gap: 36px;
  width: 100%;
  flex-wrap: wrap;
}
.col {
  row-gap: 16px;
  column-gap: 20px;
}
.wrapper-img {
  width: 60px;
}

@media (min-width: 768px) {
  .box {
    padding: 24px;
  }
  .box h2 {
    font-size: 28px;
  }
  .box p {
    font-size: 18px;
  }
  .row {
    margin-top: 28px;
    row-gap: 32px;
    column-gap: 36px;
  }
  .col {
    row-gap: 24px;
    column-gap: 20px;
  }
  .wrapper-img {
    width: 70px;
  }
}

@media (min-width: 1024px) {
  .box {
    padding: 48px;
  }
  .box h2 {
    font-size: 32px;
  }
  .box p {
    font-size: 20px;
  }
  .row {
    margin-top: 36px;
  }
}
@media (min-width: 1440px) {
  .wrapper-img {
    width: 80px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SkillsHome",
});
</script>
