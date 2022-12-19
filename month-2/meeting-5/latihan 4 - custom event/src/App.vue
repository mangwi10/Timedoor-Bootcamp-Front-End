<template>
  <div>
    <header>
      <app-header></app-header>
    </header>
    <main>
      <div class="container">
        <div class="title">
          <h1>NOW SHOWING IN CINEMAS</h1>
        </div>
        <div class="movies">
          <app-movie v-for="data in dataMovie" :movie="data" @showDetailMovie="detail"></app-movie>
        </div>
      </div>
      <div class="movie-list-detail" v-if="isDetailStatus" :style="{ backgroundImage: detailBackgroundImage }">
        <div class="detail-img">
          <img :src="require(`./assets/${detailData.imageName}`)" alt="Movie">
        </div>
        <div>
          <h1>{{ detailData.title }}</h1>
          <p>{{ detailData.synopsis }}</p>
        </div>
      </div>
    </main>
    <footer>
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Movie from './components/Movie.vue';

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-movie": Movie,
  },
  data() {
    return {
      dataMovie: [
        {
          title: "INANG",
          imageName: "movie1.jpg",
          backgroundName: "background-movie1.jpg",
          synopsis: "Wulan, seorang kasir supermarket ditinggalkan oleh pacarnya setelah mengetahui soal kehamilannya yang di luar rencana.Wulan yang enggan mengambil jalur aborsi, membuatnya harus bertanggung jawab atas kandungannya sendirian. Kurangnya wawasan yang dimiliki Wulan membuat pencarian solusi dimulai secara online. Pencarian Wulan membawanya ke sebuah grup di sosial media yang mengaku sebagai kelompok relawan pro-life yang fokus membantu ibu hamil yang mengalami situasi kurang beruntung."
        },
        {
          title: "KALIAN PANTAS MATI",
          imageName: "movie2.jpg",
          backgroundName: "background-movie2.jpg",
          synopsis: "Seorang pemuda yang memiliki kemampuan untuk berkomunikasi dengan orang yang sudah meninggal. Dia harus menggunakan kemampuannya untuk menghentikan roh jahat yang dipenuhi dendam terhadap teman sekolahnya. Sementara itu dia bertekad untuk membantu sesosok hantu cantik untuk mengembalikan ingatannya."
        },
        {
          title: "HALOWEEN ENDS",
          imageName: "movie3.jpg",
          backgroundName: "background-movie3.jpg",
          synopsis: "Berlatar 4 tahun dari Halloween Kills, Laurie yang tinggal bersama cucunya Allyson akan menghadapi Michael Myers untuk terakhir kalinya."
        },
        {
          title: "PAMALI",
          imageName: "movie4.jpg",
          backgroundName: "background-movie4.jpg",
          synopsis: "Jaka Sunarya (Marthino Lio) yang baru saja kehilangan pekerjaan, bersama dengan sang istri, Rika (Putri Ayudya) ingin menjual rumah peninggalan orang tuanya untuk memulai hidup baru. Di desa tersebut, mereka tanpa sengaja melanggar adat yang telah menjadi tradisi, sehingga menghadapi keberadaan makhluk halus yang mengancam nyawa mereka."
        }
      ],
      detailData: "",
      isDetailStatus: false,
      detailBackgroundImage: ""

    }
  },
  methods: {
    detail(data) {
      this.isDetailStatus = true;
      this.detailData = data;
      this.detailBackgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7),
rgba(0, 0, 0, 0.7)), url(${require('./assets/' +
        this.detailData.backgroundName)})`
    }
  },

}
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


/* Now Showing */
.movies {
  display: flex;
  justify-content: center;
}


.title h1 {
  font-size: 25px;
}

/* Movie Detail */
.movie-list-detail {
  height: 400px;
  color: white;
  margin-top: 50px;
  margin-bottom: 50px;
  background-size: cover;
  padding: 100px 200px;

  display: flex;
  align-items: center;

}

.bg-movie-list-detail {
  display: flex;
  align-items: center;

}

.detail-img img {
  width: 280px;
  height: 400px;
  border-radius: 20px;

}

.detail-img {
  margin-right: 50px;

}
</style>
