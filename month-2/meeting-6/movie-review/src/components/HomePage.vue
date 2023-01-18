<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template lang="">
  <div>
    <header class="header">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="header__logo mt-3" style="float: left;">
              <a
                href="/"
                aria-current="page"
                class="router-link-exact-active router-link-active"
                ><img
                  style="
                    width: 200px;
                    padding-top: 10px;
                    vertical-align: middle;
                    border-style: none;
                  "
                  src="../assets/logo.png"
                  alt=""
              /></a>
            </div>
          </div>
          <div class="col-lg-6">
            <nav class="header__menu" style="float: right;">
              <ul type="none">
                <li class="mt-3">
                  <router-link to="/input" class="headNav"
                    >Add New Movie</router-link
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <section class="featured">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title"><h2>Movie List</h2></div>
            <div class="featured__controls">
              <ul>
                <li v-for="(item, index) in genreMovieList" :key="index" @click="genreClick(item)">{{item}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
            <div class="row featured__filter">
              <div class="col-lg-3 col-md-4 col-sm-6" v-for="(data, index) in genreData" :key="index">
                <div class="featured__item">
                  <img
                  :src="data.image_url"
                  class="featured__item__pic"
                  />
                  <div class="featured__item__text">
                    <router-link tag="a" :to="{ name: 'detailPage', params: { id: data.id }, query: { data } }" class=""
                    ><h5>{{data.name}}</h5></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <h2 v-if="Object.keys(genreData).length === 0">No Movie with this genre</h2>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      movieList: [],
      genreMovieList: ["All", "Actions", "Science Fiction", "Horror", "Thriller", "Comedy", "Romance", "Adventure", "Fantasy",],
      genreMovie: "All",
      genreData: []
    };
  },
  methods: {
    genreClick(item) {
      if (item === "All") {
        this.genreData = this.movieList
      }
      else {
        this.genreData = this.movieList.filter(function (el) {
          return el.category === item
        });
      }
    }

  },
  created() {
    this.$http.get("https://bootcamp-timedoor-vuejs-default-rtdb.asia-southeast1.firebasedatabase.app/movieslist.json")
      .then(response => {
        return response.json();
      }).then(data => {
        const resultArray = [];
        for (let key in data) {
          resultArray.push(data[key]);
        }
        this.movieList = resultArray;
        this.genreData = this.movieList;
      });
  }
};
</script>
<style>
.headNav {
  text-decoration: none;
  font-size: 14px;
  color: #252525;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  transition: all, 0.3s;
  padding: 5px 0;
  display: block;
}
</style>
<style type="text/css">
body,
html {
  height: 100%;
}

body,
h2,
h5,
h6,
html {
  font-family: Cairo, sans-serif;
}

h2,
h5,
h6 {
  margin: 0;
  color: #111;
  font-weight: 400;
}

h2 {
  font-size: 36px;
}

h5 {
  font-size: 18px;
}

h6,
p {
  font-size: 16px;
}

p {
  font-family: Cairo, sans-serif;
  color: #6f6f6f;
  font-weight: 400;
  line-height: 26px;
  margin: 0 0 15px;
}

img {
  max-width: 100%;
}

button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: none;
}

a:focus,
a:hover {
  text-decoration: none;
  outline: none;
  color: #fff;
}

ol,
ul {
  padding: 0;
  margin: 0;
}
</style>
<style type="text/css">
.featured {
  padding-top: 30px;
  padding-bottom: 40px;
}

.section-title {
  margin-bottom: 20px;
  text-align: center;
}

.section-title h2 {
  color: #1c1c1c;
  font-weight: 700;
  position: relative;
}
</style>
<style type="text/css">
.header__logo[data-v-394207fb] {
  padding: 15px 0;
}

.header__logo img[data-v-394207fb] {
  width: 200px;
  padding-top: 10px;
}

.header__logo a[data-v-394207fb] {
  display: inline-block;
}

.header__menu[data-v-394207fb] {
  padding: 24px 0;
}

.header__menu ul li[data-v-394207fb] {
  list-style: none;
  margin-right: 50px;
  position: relative;
  text-align: right;
}

.header__menu ul li:hover>a[data-v-394207fb] {
  color: #7fad39;
}

.header__menu ul li[data-v-394207fb]:last-child {
  margin-right: 0;
}

.header__menu ul li a[data-v-394207fb] {
  font-size: 14px;
  color: #252525;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  transition: all, 0.3s;
  padding: 5px 0;
  display: block;
}
</style>
<style type="text/css">
.featured__controls {
  text-align: center;
  margin-bottom: 50px;
}

.featured__controls ul li {
  list-style: none;
  font-size: 18px;
  color: #1c1c1c;
  display: inline-block;
  margin-right: 25px;
  position: relative;
  cursor: pointer;
}

.featured__controls ul li.active:after {
  opacity: 1;
}

.featured__controls ul li:after {
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: #7fad39;
  content: "";
  opacity: 0;
}

.featured__controls ul li:last-child {
  margin-right: 0;
}
</style>
