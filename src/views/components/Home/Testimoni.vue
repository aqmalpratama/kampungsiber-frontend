<template>
  <!-- <div v-for="data of datas" :key="data.id">
    <p>{{ data.testimonial_content }}</p>
  </div> -->

  <section>
    <div class="container">
      <div class="col-lg-12">
        <h2 class="text-center">Beberapa testimoni dari client kami!</h2>
      </div>
      <div class="row box-card">
        <div v-for="data of datas" :key="data.id" class="col-lg-4">
          <div class="card">
            <img src="/assets/images/haewon.jpg" alt="" />
            <div class="card-body">
              <h4 class="card-title text-center">{{ data.full_name }}</h4>
              <p class="card-text">{{ data.testimonial_content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <button
            @click="load"
            class="mt-4 btn btn-success text-white align-items-center"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  font-family: "Poppins", sans-serif;
  color: #000;
  margin-top: 56px;
}
.row {
  row-gap: 120px;
}
.box-card {
  margin-top: 120px;
}
.card img {
  position: absolute;
  width: 120px;
  top: -95px;
  left: 38%;
  border-radius: 50%;
}
.card p {
  white-space: pre-wrap;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "TestimoniHome",
  data() {
    return {
      datas: [],
    };
  },
  methods: {
    async load() {
      let limit = this.datas.length + 3;
      try {
        const response = await axios.get(
          "http://localhost:5000/testimonial/compro?limit=" + limit
        );
        console.log(response.data);
        this.datas = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    try {
      const response = await axios.get(
        "http://localhost:5000/testimonial/compro?limit=3"
      );
      console.log(response.data);
      this.datas = response.data;
    } catch (error) {
      console.log(error);
    }
  },
});
</script>
