<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="header__logo mt-3" style="float: left;">
              <a href="/" aria-current="page" class="router-link-exact-active router-link-active"><img style="
                    width: 200px;
                    padding-top: 10px;
                    vertical-align: middle;
                    border-style: none;
                  " src="../assets/logo.png" alt="" /></a>
            </div>
          </div>
          <div class="col-lg-6">
            <nav class="header__menu" style="float: right;">
              <ul type="none">
                <li class="mt-3">
                  <router-link to="/" class="headNav">Back to Home</router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <div class="contact-form">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="contact__form__title">
              <h2>Add New Movie</h2>
            </div>
          </div>
        </div>
        <form>
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <input type="text" placeholder="Movie Name" v-model="movieData.name" />
            </div>
            <div class="col-lg-4 col-md-4">
              <input type="text" placeholder="Image Link" v-model="movieData.image_url" />
            </div>
            <div class="col-lg-4 col-md-4">
              <input type="number" placeholder="Release Year" v-model="movieData.year_release" />
            </div>
            <div class="genre__input__checkbox">
              <label><input type="radio" name="genre" value="All" v-model="movieData.category" />
                All </label><label><input type="radio" name="genre" value="Actions" v-model="movieData.category" />
                Actions </label><label><input type="radio" name="genre" value="Science Fiction"
                  v-model="movieData.category" />
                Science Fiction </label><label><input type="radio" name="genre" value="Horror"
                  v-model="movieData.category" />
                Horror </label><label><input type="radio" name="genre" value="Thriller" v-model="movieData.category" />
                Thriller </label><label><input type="radio" name="genre" value="Comedy" v-model="movieData.category" />
                Comedy </label><label><input type="radio" name="genre" value="Romance" v-model="movieData.category" />
                Romance </label><label><input type="radio" name="genre" value="Adventure"
                  v-model="movieData.category" />
                Adventure </label><label><input type="radio" name="genre" value="Fantasy"
                  v-model="movieData.category" />
                Fantasy
              </label>
            </div>
            <div class="col-lg-12 text-center">
              <textarea placeholder="Your Review" v-model="movieData.review"></textarea>
              <button type="button" @click="addmovieData" class="site-btn">Add Review</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InputForm",
  data() {
    return {
      movieData: {
        id: 0,
        category: "",
        image_url: "",
        name: "",
        review: "",
        year_release: ""
      }
    }
  },
  methods: {
    postData() {
      this.$http.post("https://bootcamp-timedoor-vuejs-default-rtdb.asia-southeast1.firebasedatabase.app/movieslist.json", this.movieData)
        .then(() => {
          this.$router.push('/')
        }, error => {
          console.log(error)
        }
        );
    },
    addmovieData() {
      this.$http.get('https://bootcamp-timedoor-vuejs-default-rtdb.asia-southeast1.firebasedatabase.app/movieslist.json')
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.bookList = resultArray;
          if (this.bookList.length === 0) {
            this.movieData.id = 1;
            this.postData();
            return;
          }
          this.movieData.id = this.bookList[this.bookList.length - 1].id + 1;
          this.postData();
        });
    }
  }
}
</script>
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
.featured__controls[data-v-634bc046] {
  text-align: center;
  margin-bottom: 50px;
}

.featured__controls ul li[data-v-634bc046] {
  list-style: none;
  font-size: 18px;
  color: #1c1c1c;
  display: inline-block;
  margin-right: 25px;
  position: relative;
  cursor: pointer;
}

.featured__controls ul li.active[data-v-634bc046]:after {
  opacity: 1;
}

.featured__controls ul li[data-v-634bc046]:after {
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: #7fad39;
  content: "";
  opacity: 0;
}

.featured__controls ul li[data-v-634bc046]:last-child {
  margin-right: 0;
}
</style>
<style type="text/css">
.featured__item {
  margin-bottom: 50px;
}

.featured__item__pic {
  height: 330px;
  width: 270px;
  position: relative;
  overflow: hidden;
  background-position: 50%;
}

.featured__item__text {
  text-align: center;
  padding-top: 15px;
}

.featured__item__text h6 {
  margin-bottom: 10px;
}

.featured__item__text h6 a {
  color: #252525;
}

.featured__item__text h5 {
  color: #252525;
  font-weight: 700;
}
</style>
<style type="text/css">
.contact__form__title {
  margin-bottom: 50px;
  text-align: center;
}

.contact__form__title h2 {
  color: #1c1c1c;
  font-weight: 700;
}

.contact-form {
  padding-top: 80px;
  padding-bottom: 80px;
}

.contact-form form input {
  width: 100%;
  height: 50px;
  font-size: 16px;
  color: #6f6f6f;
  padding-left: 20px;
  margin-bottom: 30px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
}

.contact-form form input::placeholder {
  color: #6f6f6f;
}

.contact-form form textarea {
  width: 100%;
  height: 150px;
  font-size: 16px;
  color: #6f6f6f;
  padding-left: 20px;
  margin-bottom: 24px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  padding-top: 12px;
  resize: none;
}

.contact-form form textarea::placeholder {
  color: #6f6f6f;
}

.contact-form form button {
  font-size: 18px;
  letter-spacing: 2px;
}
</style>
<style type="text/css">
.genre__input input.genre__input__add {
  margin-bottom: 20px;
}

.genre__input input::placeholder {
  color: #b2b2b2;
}

.genre__input__checkbox {
  margin-bottom: 10px;
}

.genre__input__checkbox label {
  position: relative;
  font-size: 16px;
  color: #1c1c1c;
  padding-left: 30px;
  cursor: pointer;
}

.genre__input__checkbox label input {
  width: 20px;
  height: 20px;
}
</style>