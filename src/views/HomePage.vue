<template>
  <ion-page>
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <ion-content :fullscreen="true">
      <ion-row>
        <ion-toolbar style="color:#343A40">
          <ion-title
            style="color:white; margin-left :3vh;margin-top: 10px; margin-bottom: 10px; font-size: 25px;">Kampung<span
              style="color:#00DC72; font-size: 25px;">Siber</span></ion-title>
          <ion-buttons class="button-nav" slot="primary" style="margin-bottom: 3vh;">
            <ion-button class="ion-text-capitalize" style="font-size: 3vh; margin: 3vh; margin-left: 30px;"
              href="/LandingPage">
              Beranda
            </ion-button>
            <ion-button class="ion-text-capitalize" style="font-size: 3vh; margin: 3vh; margin-left: 30px;"
              href="/FaqPage">
              FAQ
            </ion-button>
            <ion-button class="ion-text-capitalize" style="font-size: 3vh; margin: 3vh; margin-left: 30px;"
              href="/ContactUs">
              Contact Us
            </ion-button>
            <ion-button class="ion-text-capitalize" style="font-size: 3vh; margin: 3vh; margin-left: 30px;"
              href="/SignIn">
              Sign In
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-row>

      <ion-grid>
        <ion-row class="back1">
          <ion-col style="margin-left: 100px;">
            <span class="text1">Klinik Coding<br> Pertama di Indonesia!</span>
            <span class="text2"><span class="text2.a"><br><br>Sekarang kamu ga perlu overthinking menghadapi <br>error dan bug
                lagi dengan konsultasi sama "dokter-dokter"</span><br>coding kita sesuai spesialisasinya lho<br></span>
            <ion-button id="btn1" color="success" size="large" href="/Dashboard" style=" margin-top: 80px;"><span class=btn1text>Book
                Sekarang!</span></ion-button>
          </ion-col>
          <ion-col style="right: 0; position: relative; float:right; margin-right: 70px;">
            <ion-img id="img1" src="https://i.postimg.cc/8kKqbpjg/Group-17.png" alt="pict1"></ion-img>
            <ion-img id="img2" src="https://i.postimg.cc/44jq78Yz/Group-18.png" alt="pict1"></ion-img>
          </ion-col>
        </ion-row>

        <!-- <div class="container-fluid"> -->
        <ion-row class="row2">
          <ion-col size-xl="auto">
            <!-- <h2 style='color:black;'>Mengapa kita lebih baik dari yang lain</h2> -->
            <span class="text3">Mengapa kita lebih <br>baik dari yang lain</span>
            <span class="text4"><br>Tentu jika kamu ingin memilih kami
              <br>maka kamu harus tau alasan untuk
              <br>memilih kami kan?
              <br>nah ini dia alasannya!</span>
          </ion-col>
          <ion-col size-xl="2.2" style="margin-right: 1vh; margin-left: 2vh; width: 5vh;">
            <ion-img src="https://i.postimg.cc/MTNbyJpY/Card1.png"></ion-img>
          </ion-col>
          <ion-col size-xl="2.2" style="margin-right: 1vh; top: 5vh; margin-left: 2vh; width: 5vh;">
            <ion-img src="https://i.postimg.cc/xTKyb7DK/Group-21.png"></ion-img>
          </ion-col>
          <ion-col size-xl="2.2" style="margin-left: 2vh; width: 5vh;">
            <ion-img src="https://i.postimg.cc/KvXDjbVG/Group-22.png"></ion-img>
          </ion-col>
        </ion-row>

        <!-- </div> -->
        <ion-row style="background-color: #F6F9FC;">
          <ion-col size-xl="10" style="margin:auto">
            <ion-img src="https://i.postimg.cc/WzXx74xk/list-bahasa.png"></ion-img>
          </ion-col>
        </ion-row>

        <h2 class="testimoni">Beberapa testimoni dari client kami!</h2>

        <ion-row style="background-color: #F6F9FC; padding-left: 129px; padding-right: 129px; ">
          <ion-col style="z-index: +100">
            <ion-img src="https://i.postimg.cc/T1WbWbgm/Ellipse-4.png"
              style="height:270px; margin-bottom: -100px;"></ion-img>
            <ion-card class="testimoni-card" style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title class="testimoni-card-title">Andy Rahmayadi</ion-card-title>
              </ion-card-header>
              <ion-card-content class="testimoni-card-content">
                KampungSiber sangat membantu saya
                untuk menyelesaikan pekerjaan saya,
                karena kemarin kena error code dan
                sampai minum kopi 3 gelas pun masih
                belum ketemu permasalahannya, nah dan
                kebetulan saat itu saya diberitahu oleh
                temen saya kalau ada jasa konsultan
                programming nah itu saya tertarik dan coba
                coba, dan sehabis session dengan konsultan
                kampungsiber saya langsung diberi solusi
                untuk penyelesaiannya,
                <br>terimakasih kampungsiber
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100;padding-left: 85px;padding-right:85px;">
            <ion-img src="https://i.postimg.cc/T1WbWbgm/Ellipse-4.png"
              style="height:270px; margin-bottom: -100px;"></ion-img>
            <ion-card style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title class="testimoni-card-title">Indra Kusuma</ion-card-title>
              </ion-card-header>
              <ion-card-content class="testimoni-card-content">
                KampungSiber sangat membantu saya
                untuk menyelesaikan pekerjaan saya,
                karena kemarin kena error code dan
                sampai minum kopi 3 gelas pun masih
                belum ketemu permasalahannya, nah dan
                kebetulan saat itu saya diberitahu oleh
                temen saya kalau ada jasa konsultan
                programming nah itu saya tertarik dan coba
                coba, dan sehabis session dengan konsultan
                kampungsiber saya langsung diberi solusi
                untuk penyelesaiannya,
                <br>terimakasih kampungsiber
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100;">
            <ion-img src="https://i.postimg.cc/T1WbWbgm/Ellipse-4.png"
              style="height:270px; margin-bottom: -100px;"></ion-img>
            <ion-card style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title class="testimoni-card-title">Sultan Basyha</ion-card-title>
              </ion-card-header>
              <ion-card-content class="testimoni-card-content">
                KampungSiber sangat membantu saya
                untuk menyelesaikan pekerjaan saya,
                karena kemarin kena error code dan
                sampai minum kopi 3 gelas pun masih
                belum ketemu permasalahannya, nah dan
                kebetulan saat itu saya diberitahu oleh
                temen saya kalau ada jasa konsultan
                programming nah itu saya tertarik dan coba
                coba, dan sehabis session dengan konsultan
                kampungsiber saya langsung diberi solusi
                untuk penyelesaiannya,
                <br>terimakasih kampungsiber
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-center" style="background-color: #F6F9FC;">
          <ion-col></ion-col>
          <ion-col>
            <ion-button expand="block" shape="round" color="light" fill="outline" class="testimoni-button" style="width: fit-content; height: 10vh;"><span
                class="testimoni-text" href="/Testimoni">Lihat Testimoni lainnya~~</span></ion-button>
          </ion-col>
          <ion-col></ion-col>
        </ion-row>

        <h2 class="konsultan">Konsultan rekomendasi dari kami untukmu hari ini!</h2>
        <div style="background-color: #F6F9FC;">
          <hr style="border: 10px;
    border-top: 3px double #333;
    color: #000000;
    overflow: visible;
    text-align: center;
    margin:0px 20vh;
    z-index: +80;">
        </div>

        <ion-row style="background-color: #F6F9FC; padding: 6vh;">
          <ion-col style="z-index: +100">
            <ion-card style="z-index: -1;top: 8vh; ">
              <ion-card-header>
                <ion-card-title style="font-size:4.5vh; text-align: center; padding-top: 2vh;">John Doe</ion-card-title>
                <hr style="border: 10vh;
                  border-top: 3px double #333;
                  color: #000000;
                  font-weight: 100px;
                  overflow: visible;
                  text-align: center;
                  margin:0px 35px;
                  height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 6vh;"></ion-img>
                <ion-card-subtitle style="font-size:4.4vh; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:3vh; justify-content: center; padding:3vh 6vh">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="margin-top: 1vh; height: 3vh; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 3.7vh; float:left; margin-top: 2.2vh;  margin-left: 0.4vh;">
                <h3 style="font-size:20px; padding:2vh 4vh">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large" href="/booking-consultation"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100;margin-left:62px">
            <ion-card style="z-index: -1;top: 8vh;">
              <ion-card-header>
                <ion-card-title style="font-size:4.5vh; text-align: center; padding-top: 2vh;">John Doe</ion-card-title>
                <hr style="border: 10vh;
                  border-top: 3px double #333;
                  color: #000000;
                  font-weight: 100px;
                  overflow: visible;
                  text-align: center;
                  margin:0px 35px;
                  height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 6vh;"></ion-img>
                <ion-card-subtitle style="font-size:4.4vh; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:3vh; justify-content: center; padding:3vh 6vh">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="margin-top: 1vh; height: 3vh; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 3.7vh; float:left; margin-top: 2.2vh;  margin-left: 0.4vh;">
                <h3 style="font-size:20px; padding:2vh 4vh">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large" href="/booking-consultation"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100;margin-left:62px">
            <ion-card style="z-index: -1;top: 8vh;">
              <ion-card-header>
                <ion-card-title style="font-size:4.5vh; text-align: center; padding-top: 2vh;">John Doe</ion-card-title>
                <hr style="border: 10vh;
                  border-top: 3px double #333;
                  color: #000000;
                  font-weight: 100px;
                  overflow: visible;
                  text-align: center;
                  margin:0px 35px;
                  height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 6vh;"></ion-img>
                <ion-card-subtitle style="font-size:4.4vh; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:3vh; justify-content: center; padding:3vh 6vh">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="margin-top: 1vh; height: 3vh; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 3.7vh; float:left; margin-top: 2.2vh;  margin-left: 0.4vh;">
                <h3 style="font-size:20px; padding:2vh 4vh">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large" href="/booking-consultation"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100; margin-left:62px">
            <ion-card style="z-index: -1;top: 8vh;">
              <ion-card-header>
                <ion-card-title style="font-size:4.5vh; text-align: center; padding-top: 2vh;">John Doe</ion-card-title>
                <hr style="border: 10vh;
                  border-top: 3px double #333;
                  color: #000000;
                  font-weight: 100px;
                  overflow: visible;
                  text-align: center;
                  margin:0px 35px;
                  height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 6vh;"></ion-img>
                <ion-card-subtitle style="font-size:4.4vh; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:3vh; justify-content: center; padding:3vh 6vh">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="margin-top: 1vh; height: 3vh; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 3.7vh; float:left; margin-top: 2.2vh;  margin-left: 0.4vh;">
                <h3 style="font-size:20px; padding:2vh 4vh">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large" href="/booking-consultation"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row style="background-color: #F6F9FC; padding: 4vh;">
          <ion-col style="z-index: +100">
            <ion-card style="z-index: -1;top: 8vh;">
              <ion-card-header>
                <ion-card-title style="font-size:4.5vh; text-align: center; padding-top: 2vh;">John Doe</ion-card-title>
                <hr style="border: 10vh;
                  border-top: 3px double #333;
                  color: #000000;
                  font-weight: 100px;
                  overflow: visible;
                  text-align: center;
                  margin:0px 35px;
                  height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 6vh;"></ion-img>
                <ion-card-subtitle style="font-size:4.4vh; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:3vh; justify-content: center; padding:3vh 6vh">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="margin-top: 1vh; height: 3vh; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 3.7vh; float:left; margin-top: 2.2vh;  margin-left: 0.4vh;">
                <h3 style="font-size:20px; padding:2vh 4vh">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large" href="/booking-consultation"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100;margin-left:62px">
            <ion-card style="z-index: -1;top: 8vh;">
              <ion-card-header>
                <ion-card-title style="font-size:4.5vh; text-align: center; padding-top: 2vh;">John Doe</ion-card-title>
                <hr style="border: 10vh;
                  border-top: 3px double #333;
                  color: #000000;
                  font-weight: 100px;
                  overflow: visible;
                  text-align: center;
                  margin:0px 35px;
                  height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 6vh;"></ion-img>
                <ion-card-subtitle style="font-size:4.4vh; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:3vh; justify-content: center; padding:3vh 6vh">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="margin-top: 1vh; height: 3vh; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 3.7vh; float:left; margin-top: 2.2vh;  margin-left: 0.4vh;">
                <h3 style="font-size:20px; padding:2vh 4vh">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large" href="/booking-consultation"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100;margin-left:62px">
            <ion-card style="z-index: -1;top: 8vh;">
              <ion-card-header>
                <ion-card-title style="font-size:4.5vh; text-align: center; padding-top: 2vh;">John Doe</ion-card-title>
                <hr style="border: 10vh;
                  border-top: 3px double #333;
                  color: #000000;
                  font-weight: 100px;
                  overflow: visible;
                  text-align: center;
                  margin:0px 35px;
                  height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 6vh;"></ion-img>
                <ion-card-subtitle style="font-size:4.4vh; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:3vh; justify-content: center; padding:3vh 6vh">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="margin-top: 1vh; height: 3vh; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 3.7vh; float:left; margin-top: 2.2vh;  margin-left: 0.4vh;">
                <h3 style="font-size:20px; padding:2vh 4vh">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large" href="/booking-consultation"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100; margin-left:62px">
            <ion-card style="z-index: -1;top: 8vh;">
              <ion-card-header>
                <ion-card-title style="font-size:4.5vh; text-align: center; padding-top: 2vh;">John Doe</ion-card-title>
                <hr style="border: 10vh;
                  border-top: 3px double #333;
                  color: #000000;
                  font-weight: 100px;
                  overflow: visible;
                  text-align: center;
                  margin:0px 35px;
                  height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 6vh;"></ion-img>
                <ion-card-subtitle style="font-size:4.4vh; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:3vh; justify-content: center; padding:3vh 6vh">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="margin-top: 1vh; height: 3vh; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="margin-top: 1vh; height: 3vh; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 3.7vh; float:left; margin-top: 2.2vh;  margin-left: 0.4vh;">
                <h3 style="font-size:20px; padding:2vh 4vh">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large" href="/booking-consultation"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-center" style="background-color: #F6F9FC;">
          <ion-col></ion-col>
          <ion-col>
            <ion-button expand="block" shape="round" color="light" fill="outline" class="testimoni-button" href="/Dashboard"><span
                class="testimoni-text">...Lihat Selengkapnya</span></ion-button>
          </ion-col>
          <ion-col></ion-col>
        </ion-row>

        <ion-row justify-content-center style="background-color: #F6F9FC; height: 100%; padding: 14vh;">
          <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
            <ion-card class="card-center" style="width: fit-content; height: fit-content;">
              <ion-card-header>
                <ion-card-title
                  style="font-size:55px; text-align: center; padding: 23px 147px; font-weight:bolder;">Konsultan kami
                  sudah kerja dimana aja sih?</ion-card-title>
              </ion-card-header>
              <ion-card-content style="padding: 70px 20px">
                <div style="display:flex; justify-content:center">
                  <img
                    src="https://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png"
                    class="company-img">
                  <img src="https://logos-download.com/wp-content/uploads/2020/06/Gojek_Logo.png" class="company-img">
                  <img
                    src="https://www.freepnglogos.com/uploads/logo-tokopedia-png/tokopedia-oralgen-nupearl-advanced-teeth-whitening-system-with-11.png"
                    class="company-img">
                </div>
                <div style="display:flex; padding-top:auto; justify-content:center">
                  <img src="https://logodownload.org/wp-content/uploads/2021/03/shopee-logo.png" class="company-img">
                  <img src="https://logos-download.com/wp-content/uploads/2018/03/Grab_logo_green.png"
                    class="company-img" style="margin-top: 20px;">
                  <img
                    src="https://1.bp.blogspot.com/-x0AXKXB9uqU/XnKxGP2VVfI/AAAAAAAASbY/r1872kTuFVQWfHJg0DqI8mzoTuo-_IttgCLcBGAsYHQ/s1600/ruang%2Bguru.png"
                    class="company-img" style="height:130px;">
                  <img src="https://spectrathailand.com/wp-content/uploads/2019/11/Lazada-logo.png" class="company-img" style="margin-top: 20px;">
                </div>
              </ion-card-content>
            </ion-card>
          </div>
        </ion-row>

        <h2 class="penutup" style="font-size:45px">Nah dengan itu menutup semua perkenalan dari kami,
          tunggu apalagi? ayo konsultasi dengan konsultasi kami sekarang! :)</h2>
        <div style="background-color: #F6F9FC;">
          <hr style="border: 10px;
    border-top: 3px double #333;
    color: #000000;
    overflow: visible;
    text-align: center;
    margin:0px 20vh;
    z-index: +100;">
        </div>
        <ion-row style="background-color: #F6F9FC; padding-bottom: 100px;">
          <h3 class="informasi">Untuk Informasi Lebih Lanjut</h3>
          <div class="more-information">
            <ion-col size="8">
              <h3 class="pertanyaan">Jika ada pertanyaan mengenai konsultasi yang kami
                sediakan, bisa langsung aja chat kami! </h3>

            </ion-col>
            <ion-col size="auto">
              <ion-button href="ContactUs" expand="block" shape="round" color="light" fill="outline" class="chat-button">
                <ion-img slot="start" src="https://i.postimg.cc/65Y5M1GH/Vector-1.png" size="auto"
                  style="padding-right: 15px; padding-left: 45px;"></ion-img>
                <span style="padding-right: 100px">Chat Kami</span></ion-button>

            </ion-col>
          </div>
        </ion-row>

        <div style="background-color: #F6F9FC;">
          <hr style="border: 10px;
    border-top: 3px double #333;
    color: #000000;
    overflow: visible;
    text-align: center;
    z-index: +100;">
        </div>

        <ion-row class="ion-justify-content-between" style="background-color: #F6F9FC;">
          <ion-col size="3" style="margin: 4vh;">
            <h3 id="footer1">Kampungsiber@2077</h3>
          </ion-col>
          <ion-col size="3" style="text-align: end; margin: 2vh;">
            <div style="display:inline-block;vertical-align:top; text-align: end;">
              <img src="https://clipground.com/images/e-mail-clipart-2.jpg" style="height: 2vh; margin-top: 8vh; margin-right: 0.4vh;">
            </div>
            <div style="display:inline-block;">
              <p id="footer2">Kampungsiber@mail.com</p>
            </div>
            <div style="display:inline-block;vertical-align:top;">
              <img src="https://cdn.onlinewebfonts.com/svg/img_424458.png" style="height: 2vh; margin-top: 8vh; margin-right: 0.4vh;">
              <img src="http://seldomsounds.com/images/social/twitter.png" style="height: 2vh; margin-top: 8vh; margin-right: 0.4vh; padding-left: 5px;">
              <img src="https://pluspng.com/img-png/instagram-logo-eps-png-instagram-logo1-instagram-logo-1915.png" style="height: 2vh; margin-top: 8vh; margin-right: 0.4vh; padding-left: 5px;">
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonCol,
  IonRow,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePageSignedIn",
  components: {
    IonContent,
    IonPage,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonCol,
    IonRow,
  },
  mounted(){
      let user= localStorage.getItem('user');
      if(user){
        this.$router.push({name:'Homepage'})
      }
    }
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
#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}
#container a {
  text-decoration: none;
}
ion-card {
  --background: #FFFFFF;
  --color: #000000;
}
ion-card-title {
  --color: #000000;
}
.testimoni-card-title {
  font-size: 35px;
  padding-top: 100px;
  text-align: center;
}
ion-card-content {
  --color: #000000;
}
.testimoni-card-content {
  font-size: 20px;
  padding: 1em;
  text-align: center;
}
.title1 {
  position: absolute;
  width: 381px;
  height: 36px;
  left: 30px;
  top: 51px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 68px;
  color: #FFFFFF;
}
.button-nav {
  color: white;
  font-family: 'Times New Roman';
  padding-top: 20px;
  height: 50px;
}
.back1 {
  /* position: absolute; */
  width: 100%;
  height: 90vh;
  left: 0px;
  background: linear-gradient(180deg, #000D18 0%, #021C35 100%);
}
.row2 {
  padding: 150px 50px;
  background-color: #F6F9FC;
}
.text1 {
  position: absolute;
  left: 3vh;
  top: 20vh;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 7vh;
  line-height: 7vh;
  /* identical to box height */
  color: #FFFFFF;
}
.text2 {
  position: absolute;
  width: 150vh;
  left: 3vh;
  top: 26vh;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 3.4vh;
  color: #FFFFFF;
}
#img1 {
  margin-left: 25vh;
  box-sizing: border-box;
  position: absolute;
  width: 40vh;
  height: 50vh;
  /* left: 1138px; */
  top: 6vh;
}
#img2 {
  box-sizing: border-box;
  position: absolute;
  width: 40vh;
  height: 50vh;
  margin-left: 39vh;
  /* left: 1353px; */
  top: 29vh;
}
.text2.a {
  left: 42px;
}
.testimoni-button {
  font-family: "Poppins";
  background-color: white;
  border-radius: 50px;
  /* margin: 69px 685px; */
  margin-top: 69px;
  font-size: 35px;
  font-weight: light;
  /* width: fit-content; */
  text-align: center;
  margin: 48px 100px;
  height: 100px;
}
.chat-button {
  font-family: "Poppins";
  background-color: white;
  border-radius: 50px;
  justify-content: center;
  font-size: 35px;
  font-weight: light;
  text-align: center;
  margin-top: 13%;
  height: 100px;
}
ion-button {
  text-transform: inherit;
}
#img1,
#img2 {
  float: right;
}
#btn1 {
  position: absolute;
  width: 40vh;
  height: 7vh;
  margin-left: 8vh;
  top: 45vh;
}
.btn1text {
  font-size: 4vh;
  font-weight: bold;
  color: rgb(255, 255, 255);
}
.btn2text {
  font-family: "Poppins";
  font-size: 20px;
  color: #FFFFFF;
}
.text3 {
  /* position: absolute; */
  width: 30vh;
  height: 10vh;
  left: 55px;
  top: 30vh;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 7vh;
  line-height: 82px;
  color: #000000;
}
.text4 {
  /* position: absolute; */
  width: 40vh;
  height: 20vh;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 4vh;
  color: #000000;
}
.testimoni {
  background-color: #F6F9FC;
  color: black;
  font-weight: bold;
  font-family: "Poppins";
  font-size: 7vh;
  text-align: center;
  padding-top: 24vh;
  padding-bottom: 6vh;
}
.konsultan {
  background-color: #F6F9FC;
  color: black;
  font-weight: bolder;
  font-size: 6vh;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 13px;
}
.penutup {
  background-color: #F6F9FC;
  color: black;
  padding: 0px 180px;
  font-weight: bolder;
  font-size: 45px;
  text-align: center;
  padding-top: 143px;
  padding-bottom: 55px;
}
ion-card {
  border-radius: 20px;
}
.company-img {
  height: 70px;
  padding: 0px 40px;
}
.informasi {
  font-family: 'Poppins';
  font-size: 25px;
  color: #000000;
  padding-top: 154px;
  padding-left: 21px;
  font-weight: bold;
}
.more-information {
  display: flex;
  background-color: #000D18;
  width: 100%;
  margin: 18px 10px;
  border-radius: 20px;
}
.pertanyaan {
  color: #FFFFFF;
  padding: 61px 55px;
  font-family: 'Poppins';
  font-size: 40px;
  font-weight: 60px;
}
#footer1,
#footer2 {
  font-family: 'Poppins';
  color: #7C7676;
  font-size: 2vh;
  margin-top: 7.4vh;
  margin-right: 0.4vh;
}
#footer1 {
  text-align: left;
}
#footer2 {
  text-align: right;
}
/* .card1{
  position: absolute;
  left: 708px;
top: 1092px;
} */
</style>
