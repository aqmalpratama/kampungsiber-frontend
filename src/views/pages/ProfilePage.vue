<template>
  <ion-page>
    <ion-content>
      <NavbarLogged :user="user" :user_id="user_id" />
      <div v-if="action != 'update'">
        <ProfileView :action="action" />
      </div>
      <div v-else>
        <ProfileForm />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import axios from "axios";

import NavbarLogged from "@/views/components/NavbarLogged.vue";
import ProfileView from "@/views/components/Profile/ProfileView.vue";
import ProfileForm from "@/views/components/Profile/ProfileForm.vue";

export default defineComponent({
  name: "ProfilePage",
  components: {
    IonContent,
    IonPage,
    NavbarLogged: NavbarLogged,
    ProfileView: ProfileView,
    ProfileForm: ProfileForm,
  },
  data() {
    return {
      user: null,
      reg_type: null,
      action: "",
      user_id: "",
    };
  },
  methods: {
    getAction() {
      let url = window.location.href;
      let segment = url.split("/");
      this.action = segment[4];
    },
  },
  mounted() {
    this.getAction();
  },
  async created() {
    const response = await axios.get("http://localhost:5000/user", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    this.user = response.data.data;
    this.reg_type = response.data.data.reg_type;
    this.user_id = response.data.data.user_id;
  },
});
</script>

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
