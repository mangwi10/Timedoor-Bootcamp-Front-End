<template>
  <div class="movie-detail" @click="showDetail">
    <img :src="movieImage" alt="Movie" />
    <p>{{ movieTitle }}</p>
  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {

  name: "MovieVue",
  props: ["movie"],
  data() {
    return {
      movieTitle: this.movie.title,
      movieImage: require(`../assets/${this.movie.imageName}`),
    };
  },
  methods: {
    showDetail() {
      eventBus.$emit("showDetailMovie", this.movie);
    },
  },
};
</script>

<style>
.movie-detail:hover {
  cursor: pointer;
}
</style>
