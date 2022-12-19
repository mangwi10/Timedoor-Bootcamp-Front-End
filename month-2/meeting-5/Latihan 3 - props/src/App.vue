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
          <app-movie v-for="data in dataMovie" :movie="data"></app-movie>
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
  data() {
    return {
      dataMovie: [
        { title: "INANG", imageName: "movie1.jpg" },
        { title: "KALIAN PANTAS MATI", imageName: "movie2.jpg" },
        { title: "HALOWEEN ENDS", imageName: "movie3.jpg" },
        { title: "PAMALI", imageName: "movie4.jpg" }
      ]
    }
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-movie": Movie,
  }
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
</style>
