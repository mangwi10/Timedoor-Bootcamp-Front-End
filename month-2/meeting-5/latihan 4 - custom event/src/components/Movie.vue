<template lang="">
    <div class="movie-detail" @click="showDetail">
      <img :src="movieImage" alt="Movie" />
      <p>{{movieTitle}}</p>
    </div>
</template>

<script>
export default {
  props: ["movie"],
  data() {
    return {
      movieTitle: this.movie.title,
      movieImage: require(`../assets/${this.movie.imageName}`)
    }
  },
  methods: {
    showDetail() {
      this.$emit('showDetailMovie', this.movie)
    }
  }
};
</script>

<style lang="">
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

.movie-detail:hover {
  cursor: pointer;
}

</style>
