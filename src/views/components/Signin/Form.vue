<template>
  <section>
    <div class="container">
      <form @submit.prevent="handleSubmit">
        <h3 class="text-center">Sign In</h3>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            v-model="email"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password"
            v-model="password"
          />
        </div>
        <button type="submit" class="btn btn-pink">Sign in</button>
        <div class="forgot-regist mt-4">
          <p>
            Lupa Password? <a href="/signup" class="pink-link">Klik disini</a>
          </p>
          <p>
            Belum punya akun?
            <a href="/signup" class="pink-link">Klik disini</a>
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
section {
  font-family: "Poppins", sans-serif;
  color: #000;
  margin-top: 120px;
}
h3,
p {
  padding: 0;
  margin: 0;
}
form {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 80%;
  margin: 0 auto;
  padding: 24px;
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
  name: "FormSignin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        email: this.email,
        password: this.password,
      };
      console.log(data);
      const response = await axios.post("http://localhost:5000/signin", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      if (response.data.status_code === 200) {
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        this.$router.push("/dashboard");
      } else {
        alert(response.data.message);
      }
    },
  },
});
</script>
