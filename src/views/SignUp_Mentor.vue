<template>
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <ion-page color="primary" style="background-color: black;">
        <ion-header :translucent="true">
            <ion-toolbar style="color:#343A40; height: 113px;">
                <ion-title style="color:white; padding-top: 20px; margin-left :40px; font-size: 40px;">Kampung<span
                        style="color:#00DC72">Siber</span></ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div style="height: 100%; display: flex; justify-content: left; margin-left:10em">
                <ion-card class="card">
                    <ion-card-header>
                        <ion-card-title class="title">Sign Up</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <h2 class="signup">
                            Riwayat Pendidikan (minimum S1)
                        </h2>
                        <div class="textbox">
                            <ion-input class="text-box" placeholder="Sarjana..."></ion-input>

                        </div>
                        <h2 class="signup">
                            Universitas
                        </h2>
                        <div class="textbox">
                            <ion-input class="text-box" placeholder="Universitas"></ion-input>
                        </div>

                        <h2 class="signup">
                            Upload Ijazah
                        </h2>

                        <input type="file" id="fileUpload" accept="application/pdf">
                        <div style="display: flex; align-items: center;">
                            <ion-button fill="outline" class="btnfile"
                                onclick="document.getElementById('fileUpload').click()">
                                <div>
                                    <img src="http://cdn.onlinewebfonts.com/svg/img_150954.png" style="height: 50px;">
                                </div>
                            </ion-button>
                            <p class="uploadfile">
                                File harus berupa .PDF
                            </p>
                        </div>

                        <h2 class="signup">
                            Total Pengalaman
                        </h2>

                        <div style="display: flex; align-items: center;">
                            <div class="textbox2" style="width: 141px">
                                <ion-input class="text-box" type="number"></ion-input>
                            </div>
                            <p class="tahuntext">
                                Tahun
                            </p>
                        </div>

                        <h2 class="signup">
                            Linkedin
                        </h2>
                        <div class="textbox">
                            <ion-input class="text-box" placeholder="linkedin.com/in/....."></ion-input>
                        </div>

                        <h2 class="signup">
                            nomor Telepon
                        </h2>
                        <div class="textbox">
                            <ion-input class="text-box" type="number" placeholder="08..."></ion-input>
                        </div>

                        <h3 id="beranda">
                            Syarat dan ketentuan <a href="" style="color:#FF5454;text-decoration: none;">Klik
                                disini</a>
                        </h3>

                        <ion-item>
                            <ion-checkbox slot="start"></ion-checkbox>
                            <h3 class="checkbox">Saya sudah membaca dan menyetujui Syarat & Ketentuan yang berlaku</h3>
                        </ion-item>

                        <ion-button class="btn1">
                            <div class=btn1text>
                                Submit
                            </div>
                        </ion-button>

                    </ion-card-content>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SignUp_Mentor',
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
    },
});
</script>
  
<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: "Poppins";
}

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

ion-checkbox {
    --size: 50px;

}

ion-button {
    margin-bottom: 20px;
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

.card {
    margin-top: 30px;
    width: 914px;
    align-items: left;
    border-radius: 40px;
    margin-bottom: auto;
}

ion-item {
    --background: transparent !important;
    margin-left: 10px;
}

.title {
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    text-align: left;
    color: black;
    padding: 20px 40px
}

.signup {
    font-weight: 600;
    padding-top: 15px;
    font-size: 35px;
    line-height: 52px;
    color: black;
    padding-left: 41px;
}

.textbox2 {
    margin: 0px 30px;
    width: 141px;
    height: 133px;
    padding-right: 20px;
    background: linear-gradient(0deg, #EFEFEF, #EFEFEF), linear-gradient(0deg, #EFEFEF, #EFEFEF), #EFEFEF;
    border-radius: 30px;
    color: black;

}

.textbox {
    margin: 0px 30px;
    width: auto;
    height: 133px;
    padding-right: 40px;
    background: linear-gradient(0deg, #EFEFEF, #EFEFEF), linear-gradient(0deg, #EFEFEF, #EFEFEF), #EFEFEF;
    border-radius: 30px;
    color: black;

}

.text-box {
    font-weight: 500;
    font-size: 35px;
    line-height: 52px;
    line-height: 110px;
    margin-left: 20px;

}

.btn1 {
    --background: #F98585;
    --color: white;
    --border-radius: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 30px;
    text-transform: none;
    width: 232px;
    height: 100px;
    --padding-start: 150px;
    --padding-end: 150px;

}

.btn1text {
    font-weight: 400;
    font-size: 40px;
    line-height: 60px;
}

#signup {
    font-weight: 400;
    font-size: 25px;
    padding-left: 30px;
    padding-top: 20px;
    color: #A7A4A4;
}

#beranda {
    font-weight: 400;
    font-size: 25px;
    line-height: 38px;
    color: #A7A4A4;
    text-align: left;
    margin-left: 30px;
    padding-top: 20px
}

.btn-text img {
    width: 48.75px;
    margin: 20px 20px;
}

.btn {
    height: auto;
    align-items: right;
    margin-left: 200px;
    /* margin-left: 80%; */
}

.checkbox {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 38px;
    color: #000000;
    padding: 20px 20px;
}

.btnfile {
    margin-left: 45px;
    margin-top: 20px;
    width: 100px;
    height: auto;
    --color: black;
    --border-color: black;
    --padding-start: 20px;
    --padding-end: 20px;
    --padding-top: 20px;
    --padding-bottom: 20px;
    --border-radius: 20px
}

.btnfile img {
    width: auto;
    height: 30px;
}

input[type="file"] {
    display: none;
}

.uploadfile {
    display: inline;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    margin-left: 15px;
    color: #BFB9B9;
    text-align: middle;
}

.tahuntext {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    margin-left: 5px;
    color: black;
}
</style>