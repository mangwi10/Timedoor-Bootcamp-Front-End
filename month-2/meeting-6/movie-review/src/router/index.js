import Home from "../components/HomePage.vue";
import InputPage from "../components/InputPage.vue";
import DetailPage from "../components/DetailPage.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/input",
    name: "inputpage",
    component: InputPage,
  },
  {
    path: "/detail",
    name: "detailPage",
    component: DetailPage,
  },
  {
    path: "/detail/:id",
    name: "detailPage",
    component: DetailPage,
  },
];
