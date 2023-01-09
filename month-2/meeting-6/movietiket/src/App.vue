<template>
  <div>
    <header>
      <Header></Header>
    </header>
    <main>
      <div class="list-movie">
        <div class="buttons">
          <button v-for="(tab, index) in tabs" :key="index" @click="currentTab = tab.componentName"
            :class="['tab-button', { active: currentTab === tab.componentName }]">
            {{ tab.buttonName }}
          </button>
        </div>
        <div class="container">
          <component :is="currentTab"></component>
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
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Detail from "./components/Detail.vue";
import NowShowing from "./components/NowShowing.vue";
import ComingSoon from "./components/ComingSoon.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Detail,
    NowShowing,
    ComingSoon,
  },
  data() {
    return {
      tabs: [
        { componentName: "NowShowing", buttonName: "NOW SHOWING" },
        { componentName: "ComingSoon", buttonName: "COMING SOON" }
      ],
      currentTab: "NowShowing",

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

/* Tab Button */
.list-movie {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 0px;
  margin-top: 50px;
  margin-bottom: 40px;
  margin-left: 165px;
  margin-right: 165px;
  position: relative;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: none;
  cursor: pointer;
  background: #00AFC1;
  margin-bottom: -1px;
  margin-right: -1px;
  color: white;
}

.buttons {
  position: absolute;
  top: -29px;
}

.tab-button:hover {
  background: #5F6F94;
}

.tab-button.active {
  background: #153462;
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
