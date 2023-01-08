<template>
  <section class="signup" v-if="!hasSeenCongrats">
    <h2 class="text-center">Sign Up</h2>
    <div class="container">
      <div class="wrapper">
        <div class="signup-stepper">
          <div
            class="step tes"
            :class="{ 'step-active': step === 1, 'step-done': step > 1 }"
          >
            <span class="step-number">1</span>
          </div>
          <div
            class="step"
            :class="{ 'step-active': step === 2, 'step-done': step > 2 }"
          >
            <span class="step-number">2</span>
          </div>
          <div
            class="step"
            :class="{ 'step-active': step === 3, 'step-done': step > 3 }"
          >
            <span class="step-number">3</span>
          </div>
        </div>

        <Transition name="slide-fade">
          <section class="step-section" v-show="step === 1">
            <h4 class="text-center">Buat Akun Sebagai</h4>
            <form
              class="form mt-3"
              method="post"
              action="#"
              @submit.prevent="next"
            >
              <div class="d-flex">
                <div class="col text-center">
                  <input
                    type="radio"
                    name="imgbackground"
                    id="img1"
                    class="d-none imgbgchk"
                    value="1"
                    v-model="account.reg_type"
                  />
                  <label for="img1">
                    <p><strong>Mentor</strong></p>
                    <img src="/assets/images/reason-1.png" alt="Image 1" />
                    <div class="tick_container">
                      <div class="tick"><i class="bi bi-check"></i></div>
                    </div>
                  </label>
                </div>
                <div class="col text-center">
                  <input
                    type="radio"
                    name="imgbackground"
                    id="img2"
                    class="d-none imgbgchk"
                    value="2"
                    v-model="account.reg_type"
                  />
                  <label for="img2">
                    <p><strong>Individu</strong></p>
                    <img src="/assets/images/reason-4.png" alt="Image 2" />
                    <div class="tick_container">
                      <div class="tick"><i class="bi bi-check"></i></div>
                    </div>
                  </label>
                </div>
                <div class="col text-center">
                  <input
                    type="radio"
                    name="imgbackground"
                    id="img3"
                    class="d-none imgbgchk"
                    value="3"
                    v-model="account.reg_type"
                  />
                  <label for="img3">
                    <p><strong>Business</strong></p>
                    <img src="/assets/images/reason-5.png" alt="Image 3" />
                    <div class="tick_container">
                      <div class="tick"><i class="bi bi-check"></i></div>
                    </div>
                  </label>
                </div>
              </div>

              <div class="text-center mt-5">
                <input type="submit" value="Next" class="btn btn-pink" />
                <p class="mt-3">
                  Ingin kembali ke beranda?
                  <a href="/home" class="pink-link">Klik disini</a>
                </p>
              </div>
            </form>
          </section>
        </Transition>
        <Transition name="slide-fade">
          <section class="step-section" v-show="step === 2">
            <h4 class="text-center">Detail Akun</h4>
            <form
              class="form mt-3"
              method="post"
              action="#"
              @submit.prevent="next"
            >
              <div class="mb-3">
                <label class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="account.first_name"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="account.last_name"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Tanggal Lahir</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="account.birth_date"
                  placeholder="Birth_date ('day'/'month'/'year')"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputemail1" class="form-label"
                  >Email Address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputemail1"
                  aria-describedby="emailHelp"
                  v-model="account.email"
                  autocomplete="false"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="account.password"
                />
              </div>

              <div class="text-center mt-5">
                <a
                  href="#"
                  @click.prevent="prev()"
                  class="btn btn-pink"
                  style="margin-right: 10px"
                  >Sebelumnya</a
                >
                <input type="submit" value="Next" class="btn btn-pink" />
                <p class="mt-3">
                  Ingin kembali ke beranda?
                  <a href="/home" class="pink-link">Klik disini</a>
                </p>
              </div>
            </form>
          </section>
        </Transition>
        <Transition name="slide-fade">
          <section v-show="step === 3">
            <h4 class="text-center">Detail Akun</h4>
            <form
              class="form mt-3"
              action="#"
              @submit.prevent="accountRegister"
            >
              <div class="mb-3" v-if="account.reg_type == 1">
                <label class="form-label">Gelar</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="account.title"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Asal Universitas</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="account.university"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Nomor HP</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="account.no_phone"
                />
              </div>
              <div class="mb-3" v-if="account.reg_type == 1">
                <label class="form-label">Tech Stack</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="account.tech_stack"
                >
                  <option
                    v-for="val in listTechStack"
                    :value="val.id"
                    :key="val.id"
                  >
                    {{ val.stack_name }}
                  </option>
                </select>
              </div>
              <div class="mb-3" v-if="account.reg_type == 1">
                <p>Available Time</p>

                <div
                  class="form-check"
                  v-for="val in listTimeAvailability"
                  :key="val.id"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="val.id"
                    v-model="account.avail_time_arr"
                  />
                  <label class="form-check-label">
                    {{ val.start_time }} - {{ val.end_time }}
                  </label>
                </div>
              </div>
              <div class="mb-3" v-if="account.reg_type == 1">
                <label class="form-label">Total Pengalaman (tahun)</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="account.experience"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Linkedin</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="account.linkedin"
                />
              </div>
              <div class="mb-3" v-if="account.reg_type == 1">
                <label class="form-label">Biaya per Jam</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="account.rate_per_hour"
                />
              </div>

              <div class="text-center mt-5">
                <a
                  href="#"
                  @click.prevent="prev()"
                  class="btn btn-pink"
                  style="margin-right: 10px"
                  >Sebelumnya</a
                >
                <input
                  type="submit"
                  :value="isLoading ? 'Loading...' : 'Register'"
                  class="btn btn-pink"
                />
                <p class="mt-3">
                  Ingin kembali ke beranda?
                  <a href="/home" class="pink-link">Klik disini</a>
                </p>
              </div>
            </form>
          </section>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.signup {
  margin-top: 120px;
  font-family: "Poppins", sans-serif;
  color: black;
}
.wrapper {
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 24px;
  border-radius: 10px;
}
.signup-stepper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin: 0 auto 1.5em;
}
.signup-stepper::before {
  z-index: 0;
  content: "";
  display: block;
  position: absolute;
  height: 2px;
  top: calc(50% - 1px);
  background: #cecece;
  width: calc(100% - 20px);
}
.signup-stepper .step {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border: 2px solid #cecece;
  color: #cecece;
  background-color: #fff;
  border-radius: 50%;
  min-width: 25px;
  min-height: 25px;
  line-height: 20px;
  font-size: 16px;
}
.signup-stepper .step-active {
  color: #00c4b5;
  background-color: #fff;
  border-color: #00c4b5;
}
.signup-stepper .step-done {
  color: #a7e4b5;
  border-color: #a7e4b5;
}
.signup-stepper .step-number {
  font-weight: 800;
  line-height: 1;
  vertical-align: middle;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  display: none;
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.col img {
  height: 150px;
  width: 100%;
  cursor: pointer;
  object-fit: cover;
}
.col label {
  overflow: hidden;
  position: relative;
  transition: 0.5s;
  border: 3px solid #ccc;
  border-radius: 8px;
  padding: 10px;
}
.imgbgchk:checked + label > .tick_container {
  opacity: 1;
}
/*         aNIMATION */
.imgbgchk:checked + label {
  border: 3px solid #00c4b5;
}

.tick_container {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  cursor: pointer;
  text-align: center;
}
.tick {
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  padding: 6px 12px;
  height: 40px;
  width: 40px;
  border-radius: 100%;
}
.btn-pink {
  background-color: #ff5454;
  color: #fff;
}
.pink-link {
  color: #ff5454;
  text-decoration: none;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "FormSignup",
  data() {
    return {
      steps: {},
      step: 1,
      listTechStack: [],
      listTimeAvailability: [],
      disabledBtn: false,
      isLoading: false,
      account: {
        gender: "1",
        reg_type: "1",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        title: "",
        university: "",
        no_phone: "",
        tech_stack: "1",
        experience: "",
        address: "",
        linkedin: "",
        rate_per_hour: "",
        birth_date: "",
        avail_time_arr: [],
        avail_time: "",
      },
      hasSeenCongrats: false,
      tempAccount: {
        gender: "1",
        reg_type: "1",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        title: "",
        university: "",
        no_phone: "",
        tech_stack: "1",
        experience: "",
        address: "",
        linkedin: "",
        rate_per_hour: "",
        birth_date: "",
        avail_time_arr: [],
        avail_time: "",
      },
    };
  },
  methods: {
    prev() {
      this.step--;
      console.log(this.step);
    },
    next() {
      this.step++;
      console.log(this.step);
    },

    accountRegister: function () {
      this.account.avail_time = this.account.avail_time_arr.toString();

      axios
        .post("http://localhost:5000/signup", this.account, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          this.isLoading = false;
          alert(response.data.message);
          this.$router.push("/signin");
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
  async created() {
    const response = await axios
      .get("http://localhost:5000/tech-stack")
      .then((response) => {
        this.listTechStack = response.data;
        return this.listTechStack;
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });

    const response_time_availability = await axios
      .get("http://localhost:5000/avail-consult-time")
      .then((response) => {
        console.log(response);
        this.listTimeAvailability = response.data;
        return this.listTimeAvailability;
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  },
});
</script>
