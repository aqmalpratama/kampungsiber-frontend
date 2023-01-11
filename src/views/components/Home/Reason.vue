<template>
  <section>
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-4">
        <div class="col">
          <h2>
            Mengapa kita lebih <br />
            baik dari yang lain
          </h2>
          <p>
            Tentu jika kamu ingin memilih kami maka kamu harus tau alasan untuk
            memilih kami kan?
          </p>
          <p>nah ini dia alasannya!</p>
        </div>
        <div
          class="col d-flex justify-content-center align-items-center align-items-lg-start"
        >
          <div class="box">
            <div class="wrapper-img">
              <img src="/assets/images/reason-1.png" />
            </div>
            <p>Konsultan kami adalah orang orang yang berpengalaman</p>
          </div>
        </div>
        <div
          class="col d-flex justify-content-center align-items-center mt-lg-4"
        >
          <div class="box">
            <div class="wrapper-img">
              <img src="/assets/images/reason-2.png" />
            </div>
            <p>
              Konsultan kami menguasai lebih dari 4 bahasa pemrograman dan lebih
              dari 7 framework!
            </p>
          </div>
        </div>
        <div
          class="col d-flex justify-content-center align-items-center align-items-lg-start"
        >
          <div class="box">
            <div class="wrapper-img">
              <img src="/assets/images/reason-3.png" />
            </div>
            <p>Konsultasi kami memiliki success rate diatas 97% :)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  font-family: "Poppins", sans-serif;
  margin-top: 56px;
  color: #000 !important;
}
.col h2 {
  font-weight: 600;
}
.col p {
  font-size: 16px;
}
.row {
  row-gap: 24px;
}
.box {
  padding: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  /* height: 100%; */
}
.box p {
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
}

@media (min-width: 768px) {
  .col h2 {
    font-size: 26px;
  }
  .col p {
    font-size: 16px;
  }
}
@media (min-width: 1024px) {
  .col h2 {
    font-size: 30px;
  }
  .col p {
    font-size: 18px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ReasonHome",
});
</script>
