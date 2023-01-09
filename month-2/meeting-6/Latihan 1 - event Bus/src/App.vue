<template>
  <div>
    <header>
      <Header></Header>
    </header>
    <main>
      <div class="container">
        <div class="title">
          <h1>NOW SHOWING IN CINEMAS</h1>
        </div>
        <div class="movies">
          <Movie v-for="(data, index) in dataMovie" :key="index" :movie="data" @showDetailMovie="detail"></Movie>
        </div>
      </div>
      <Detail></Detail>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Movie from "./components/Movie.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Detail from "./components/Detail.vue";

export default {
  name: "App",
  components: {
    Movie,
    Header,
    Footer,
    Detail,
  },
  data() {
    return {
      dataMovie: [
        {
          title: "INANG",
          imageName: "movie1.jpg",
          backgroundName: "background-movie1.jpg",
          synopsis:
            "Wulan, seorang kasir supermarket ditinggalkan oleh pacarnya setelah mengetahui soal kehamilannya yang di luar rencana.Wulan yang enggan mengambil jalur aborsi, membuatnya harus bertanggung jawab atas kandungannya sendirian. Kurangnya wawasan yang dimiliki Wulan membuat pencarian solusi dimulai secara online. Pencarian Wulan membawanya ke sebuah grup di sosial media yang mengaku sebagai kelompok relawan pro-life yang fokus membantu ibu hamil yang mengalami situasi kurang beruntung.",
        },
        {
          title: "KALIAN PANTAS MATI",
          imageName: "movie2.jpg",
          backgroundName: "background-movie2.jpg",
          synopsis:
            "Seorang pemuda yang memiliki kemampuan untuk berkomunikasi dengan orang yang sudah meninggal. Dia harus menggunakan kemampuannya untuk menghentikan roh jahat yang dipenuhi dendam terhadap teman sekolahnya. Sementara itu dia bertekad untuk membantu sesosok hantu cantik untuk mengembalikan ingatannya.",
        },
        {
          title: "HALOWEEN ENDS",
          imageName: "movie3.jpg",
          backgroundName: "background-movie3.jpg",
          synopsis:
            "Berlatar 4 tahun dari Halloween Kills, Laurie yang tinggal bersama cucunya Allyson akan menghadapi Michael Myers untuk terakhir kalinya.",
        },
        {
          title: "PAMALI",
          imageName: "movie4.jpg",
          backgroundName: "background-movie4.jpg",
          synopsis:
            "Jaka Sunarya (Marthino Lio) yang baru saja kehilangan pekerjaan, bersama dengan sang istri, Rika (Putri Ayudya) ingin menjual rumah peninggalan orang tuanya untuk memulai hidup baru. Di desa tersebut, mereka tanpa sengaja melanggar adat yang telah menjadi tradisi, sehingga menghadapi keberadaan makhluk halus yang mengancam nyawa mereka.",
        },
      ],

    };
  },
  methods: {
  },
};
</script>

<style>
body {
  margin: 0px;
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

header {
  position: sticky;
  top: 0px;
  background-color: white;
}

.container {
  margin-left: 200px;
  margin-right: 200px;
}

/* Header */
.header-content {
  display: flex;
  justify-content: space-between;
}

.header-menus {
  display: flex;
}

.menu ul {
  display: flex;
}

.menu ul li {
  margin-left: 15px;
  margin-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.menu ul li a {
  font-weight: 900;
}

.menu.navigasi ul li:hover a {
  color: #00abb3;
}

/* Now Showing */
.movies {
  display: flex;
  justify-content: center;
}

.movie-detail img {
  border-radius: 20px;
  width: 230px;
  height: 350px;
}

.movie-detail {
  margin: 7px;
}

.movie-detail p {
  margin-top: 15px;
  font-weight: 1000;
}

.title h1 {
  font-size: 25px;
}

/* Footer */

.footer-copyright {
  padding-top: 8px;
  padding-bottom: 5px;
  background-color: #04009a;
}

.footer-copyright p {
  padding-bottom: 10px;
  margin-bottom: 0px;
  text-align: center;
}

.footer {
  background-color: #03045e;
  margin-bottom: 0px;
}

.footer,
.footer ul li a {
  color: white;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
}

.footer-content .footer-data {
  width: 30%;
}

.footer-data ul li {
  padding-top: 2px;
  padding-bottom: 2px;
}

.footer-socials {
  display: flex;
  justify-content: flex-start;
  padding: 20px;
}

.footer-socials li {
  margin-right: 20px;
}

.footer-socials-text {
  padding: 20px;
}

.footer-socials-text p {
  margin-top: 0px;
  margin-bottom: 0px;
}

.info-email {
  font-size: 13px;
}
</style>
