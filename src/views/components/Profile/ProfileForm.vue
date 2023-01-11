<template>
  <section class="pt-3">
    <div class="container rounded bg-white p-3 mb-5 shadow">
      <div class="row">
        <div class="col-md-4 border-end">
          <div class="d-flex flex-column align-items-center text-center p-3">
            <img
              class="rounded-circle mt-5"
              width="150"
              :src="profile_picture"
            /><span class="font-weight-bold">{{ profile_data.full_name }}</span
            ><span class="text-black-50">{{ profile_data.email }}</span
            ><span> </span>
          </div>
        </div>
        <div class="col-md-8 border-right">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Detail Profile</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">First Name</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="first name"
                  v-model="profile_data.first_name"
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Last Name</label
                ><input
                  type="text"
                  class="form-control"
                  v-model="profile_data.last_name"
                  placeholder="last name"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Phone Number</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter phone number"
                  v-model="profile_data.no_phone"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Email Address</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter email id"
                  v-model="profile_data.email"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Birth Date</label
                ><input
                  type="date"
                  class="form-control"
                  placeholder="enter email id"
                  v-model="profile_data.birth_date"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels">Universitas</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="University"
                  v-model="profile_data.university"
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Gelar</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="title"
                  v-model="profile_data.title"
                />
              </div>
              <div class="col-md-12" v-if="profile_data.reg_type == 1">
                <label class="labels">Tech Spesialis</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="tech spesialis"
                  v-model="profile_data.stack_name"
                  disabled
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Linkedin</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="linkedin"
                  v-model="profile_data.linkedin"
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Experience in Years</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="experience"
                  v-model="profile_data.experience"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12" v-if="profile_data.reg_type == 1">
                <label class="labels">Available Time</label>
                <div class="row row-cols-2">
                  <div
                    class="form-check"
                    v-for="val in listTimeAvailability"
                    :key="val.id"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input"
                      :checked="val.checked"
                      disabled
                    />
                    <label for=""
                      >{{ val.start_time }} - {{ val.end_time }}</label
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-6" v-if="profile_data.reg_type == 1">
                <label class="labels">Rate per Hour</label
                ><input
                  type="text"
                  class="form-control"
                  v-model="profile_data.rate_per_hour"
                  placeholder="rate per hour"
                />
              </div>
            </div>
            <div class="mt-5">
              <button
                class="btn btn-primary"
                type="button"
                @click="handleSubmit()"
              >
                Save Profile
              </button>
            </div>
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

.form-control:focus {
  box-shadow: none;
  border-color: #ba68c8;
}

.profile-button {
  background: rgb(99, 39, 120);
  box-shadow: none;
  border: none;
}

.profile-button:hover {
  background: #682773;
}

.profile-button:focus {
  background: #682773;
  box-shadow: none;
}

.profile-button:active {
  background: #682773;
  box-shadow: none;
}

.back:hover {
  color: #682773;
  cursor: pointer;
}

.labels {
  font-size: 11px;
}

.add-experience:hover {
  background: #ba68c8;
  color: #fff;
  cursor: pointer;
  border: solid 1px #ba68c8;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "ProfilePage",
  props: ["action"],
  data() {
    return {
      profile_data: [],
      listTimeAvailability: [],
      userTimeAvailability: [],
      profile_picture: "",
    };
  },
  methods: {
    formatDDMMYYYY(date: any) {
      let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    getProfile() {
      let uri = window.location.href;
      let id = uri.substring(uri.lastIndexOf("/") + 1);

      axios
        .get("http://localhost:5000/profile/" + id)
        .then((response) => {
          response.data.birth_date = this.formatDDMMYYYY(
            response.data.birth_date
          );
          this.profile_data = response.data;
          console.log(response.data);
          this.profile_picture =
            "http://127.0.0.1:5000/profile/photo/" + response.data.user_id;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getAvailabilityTime() {
      axios
        .get("http://localhost:5000/avail-consult-time")
        .then((response) => {
          let checked = false;
          let valueObj = Object.values(this.userTimeAvailability);
          if (valueObj.length > 0) {
            for (let i = 0; i < response.data.length; i++) {
              for (let j = 0; j < valueObj.length; j++) {
                if (response.data[i]["id"] == valueObj[j]["avail_time_id"]) {
                  checked = true;
                  break;
                } else {
                  checked = false;
                }
              }
              response.data[i].checked = checked;
            }
          }

          this.listTimeAvailability = response.data;
          // console.log(this.listTimeAvailability);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getMentorAvailabilityTime() {
      let uri = window.location.href;
      let id = uri.substring(uri.lastIndexOf("/") + 1);

      axios
        .get("http://localhost:5000/profile/avail-time/" + id)
        .then((response) => {
          this.userTimeAvailability = response.data;
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleSubmit() {
      let uri = window.location.href;
      let id = uri.substring(uri.lastIndexOf("/") + 1);
      // console.log(this.profile_data);
      axios
        .post("http://localhost:5000/profile/" + id, this.profile_data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          // console.log(response.data);
          alert("Profile Updated");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getProfile();
    this.getMentorAvailabilityTime();
    this.getAvailabilityTime();
  },
});
</script>
