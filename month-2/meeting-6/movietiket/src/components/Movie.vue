<template>
  <div class="movie-detail" @click="showDetail">
    <img :src="movieImage" alt="Movie" />
    <div class="coming-soon">
      <slot></slot>
    </div>
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

.movie-detail {
  position: relative;
}

.coming-soon {
  position: absolute;
  background-color: rgba(153, 153, 153, 0.82);
  top: 0;
  width: 100%;
  font-size: 13px;
  border-radius: 20px 20px 0px 0px;
  text-align: center;
  color: white;
  padding-top: 0px;
}
</style>
