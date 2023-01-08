<template>
  <ion-page>
    <ion-content>
      <NavbarLogged :user="user" :user_id="user_id" />
      <div v-if="reg_type == 4">
        <MentorRequest :user="user" />
        <MentorApproved :user="user" />
      </div>
      <!-- {{ user.reg_type }} -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import axios from "axios";

// import NavbarDashboard from "@/views/components/Dashboard/Navbar.vue";
import NavbarLogged from "@/views/components/NavbarLogged.vue";
import MentorRequest from "../components/Dashboard/MentorRequest.vue";
import MentorApproved from "../components/Dashboard/MentorApproved.vue";

export default defineComponent({
  name: "DashboardPage",
  components: {
    IonContent,
    IonPage,
    NavbarLogged: NavbarLogged,
    MentorRequest: MentorRequest,
    MentorApproved: MentorApproved,
  },
  data() {
    return {
      user: null,
      reg_type: null,
      user_id: "",
    };
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
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
