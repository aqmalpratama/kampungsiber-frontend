<template>
  <ion-page>
    <ion-content>
      <NavbarSignup />
      <FormSignup />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import NavbarSignup from "@/views/components/Signup/Navbar.vue";
import FormSignup from "@/views/components/Signup/Form.vue";

export default defineComponent({
  name: "SignupPage",
  components: {
    IonContent,
    IonPage,
    NavbarSignup: NavbarSignup,
    FormSignup: FormSignup,
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
