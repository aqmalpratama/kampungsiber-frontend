<template>
  <ion-page>
    <ion-content>
      <NavbarSignin />
      <FormSignin />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import NavbarSignin from "@/views/components/Signin/Navbar.vue";
import FormSignin from "@/views/components/Signin/Form.vue";

export default defineComponent({
  name: "SigninPage",
  components: {
    IonContent,
    IonPage,
    NavbarSignin: NavbarSignin,
    FormSignin: FormSignin,
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
