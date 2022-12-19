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
          <div class="movie-detail">
            <img src="./assets/movie1.jpg" alt="Movie">
            <p>INANG</p>
          </div>
          <div class="movie-detail">
            <img src="./assets/movie2.jpg" alt="Movie">
            <p>KALIAN PANTAS MATI</p>
          </div>
          <div class="movie-detail">
            <img src="./assets/movie3.jpg" alt="Movie">
            <p>HALLOWEEN ENDS</p>
          </div>
          <div class="movie-detail">
            <img src="./assets/movie4.jpg" alt="Movie">
            <p>PAMALI</p>
          </div>
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
export default {
  components: {
    "app-header": Header,
    "app-footer" : Footer,
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


</style>
