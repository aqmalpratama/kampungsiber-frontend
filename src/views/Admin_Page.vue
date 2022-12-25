<template>
    <ion-page color="primary" style="background-color: black;">
        <ion-header :translucent="true">
            <ion-toolbar style="color:#343A40; height: 113px;">
                <ion-title style="color:white; padding-top: 20px; margin-left :40px; font-size: 40px;">Kampung<span
                        style="color:#00DC72">Siber</span></ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <h1 class="title ">Home</h1>
            <h2 class="txt ">Mentor applicants:</h2>
            <div style="height: 100%; display: flex; justify-content: left; margin-left:45px">
                <ion-card class="card">
                    <ion-card-content>
                        <table class="table1" style="width:100%">
                            <tr class="border_bottom">
                                <th>No</th>
                                <th>Name</th>
                                <th>Date of birth</th>
                                <th>University</th>
                                <th>Details</th>
                            </tr>

                            <tr class="border_bottom">
                                <td>1</td>
                                <td>John Doe</td>
                                <td>00/00/0000</td>
                                <td>State University of</td>
                                <td><ion-button fill="outline" shape="round" color="light"
                                        class="btn1">Details</ion-button></td>
                            </tr>
                            <tr class="border_bottom">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>00/00/0000</td>
                                <td>State University of</td>
                                <td><ion-button fill="outline" shape="round" color="light"
                                        class="btn1">Details</ion-button></td>
                            </tr>
                            <tr class="border_bottom">
                                <td>3</td>
                                <td>John Doe</td>
                                <td>00/00/0000</td>
                                <td>State University of</td>
                                <td><ion-button fill="outline" shape="round" color="light"
                                        class="btn1">Details</ion-button></td>
                            </tr>
                            <tr class="border_bottom">
                                <td>4</td>
                                <td>John Doe</td>
                                <td>00/00/0000</td>
                                <td>State University of</td>
                                <td><ion-button fill="outline" shape="round" color="light"
                                        class="btn1">Details</ion-button></td>
                            </tr>

                        </table>
                    </ion-card-content>
                </ion-card>
            </div>

            <h2 class="txt ">Mentor request:</h2>
            <div style="height: 100%; display: flex; justify-content: left; margin: 0px 45px">
                <ion-card class="card2">
                    <ion-card-content>
                        <table class="table1" style="width:100%">
                            <tr class="border_bottom">
                                <th>No</th>
                                <th>Name</th>
                                <th>Payment Number</th>
                                <th>Mentor</th>
                                <th>Details</th>
                            </tr>
                            <tr class="border_bottom">
                                <td>1</td>
                                <td>John Doe</td>
                                <td>0123456789</td>
                                <td>John Doe</td>
                                <td><ion-button fill="outline" style="color:black"></ion-button></td>
                            </tr>
                            <tr class="border_bottom">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>0123456789</td>
                                <td>John Doe</td>
                                <td><ion-button fill="outline" shape="round" color="success" class="btnstatus">Approved</ion-button></td>
                            </tr>
                            <tr class="border_bottom">
                                <td>3</td>
                                <td>John Doe</td>
                                <td>0123456789</td>
                                <td>John Doe</td>
                                <td><ion-button fill="outline" shape="round" color="light" class="btnstatus">Pending</ion-button></td>
                            </tr>
                            <tr class="border_bottom">
                                <td>4</td>
                                <td>John Doe</td>
                                <td>0123456789</td>
                                <td>John Doe</td>
                                <td><ion-button fill="outline" shape="round" color="danger" class="btnstatus">Expired</ion-button></td>
                            </tr>
                        </table>
                    </ion-card-content>
                </ion-card>
            </div>

            <h2 class="txt ">Mentor request:</h2>
            <div style="height: 100%; display: flex; justify-content: left; margin: 0px 45px">
                <ion-card class="card2">
                    <ion-card-content>
                        <table class="table1" style="width:100%">
                            <tr class="border_bottom">
                                <th>No</th>
                                <th>Name</th>
                                <th>Payment Number</th>
                                <th>Mentor</th>
                                <th>Terms of service<br>PDF Generate</th>
                                <th>Details</th>
                            </tr>
                            <tr class="border_bottom">
                                <td>1</td>
                                <td>John Doe</td>
                                <td>0123456789</td>
                                <td>John Doe</td>
                                <td><ion-button fill="outline" shape="round" color="light"
                                        class="btn1">Generate</ion-button></td>
                                <td><ion-button fill="outline" style="color:black"></ion-button></td>
                            </tr>
                            <tr class="border_bottom">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>0123456789</td>
                                <td>John Doe</td>
                                <td><ion-button fill="outline" shape="round" color="light"
                                        class="btn1">Generate</ion-button></td>
                                <td><ion-button fill="outline" shape="round" color="success" class="btnstatus">Approved</ion-button></td>
                            </tr>
                            <tr class="border_bottom">
                                <td>3</td>
                                <td>John Doe</td>
                                <td>0123456789</td>
                                <td>John Doe</td>
                                <td><ion-button fill="outline" shape="round" color="light"
                                        class="btn1">Generate</ion-button></td>
                                <td><ion-button fill="outline" shape="round" color="light" class="btnstatus">Pending</ion-button></td>
                            </tr>
                            <tr class="border_bottom">
                                <td>4</td>
                                <td>John Doe</td>
                                <td>0123456789</td>
                                <td>John Doe</td>
                                <td><ion-button fill="outline" shape="round" color="light"
                                        class="btn1">Generate</ion-button></td>
                                <td><ion-button fill="outline" shape="round" color="danger" class="btnstatus">Expired</ion-button></td>
                            </tr>
                        </table>
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
    name: 'Admin_Page',
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
    width: 75%;
    height: auto;
    align-items: left;
    border-radius: 20px;
    margin-bottom: 10px;
}

.card2 {
    margin-top: 30px;
    width: 100%;
    height: auto;
    align-items: left;
    border-radius: 20px;
    margin-bottom: 10px;
}

ion-card{
    --background:white;
}

ion-item {
    --background: transparent !important;
    margin-left: 10px;
}

.table1 {
    color: black;
    font-size: 30px;
    margin: 24px 0px;
    text-align: center;
    border-collapse: collapse;
}

.border_bottom {
    border-bottom: 1px solid;

}

.btn1 {
    text-transform: none;
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
}

.title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 70px;
    color: #000;
    margin: 21px 45px;
}

.txt {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #000;
    margin: 0px 45px;

}

ion-button{
    --padding-end:30px;
    --padding-start:30px
}

.btnstatus{
    text-transform: none;
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
    width: 333px;
}
</style>