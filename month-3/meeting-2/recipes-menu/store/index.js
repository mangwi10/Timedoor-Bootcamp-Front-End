import axios from "axios";

//state
export const state = () => ({
  // recipes: [
  //   {
  //     id: 1,
  //     recipeImage: "https://i.ibb.co/SBsMYNC/Rendang.jpg",
  //     recipeTitle: "Rendang",
  //     likes: 100,
  //     body: "Rendang Recipe",
  //   },
  //   {
  //     id: 2,
  //     recipeImage: "https://i.ibb.co/MRNhgzW/Tomyam.jpg",
  //     recipeTitle: "Tomyam",
  //     likes: 40,
  //     body: "Tomyam Recipe",
  //   },
  //   {
  //     id: 3,
  //     recipeImage: "https://i.ibb.co/CW4tVvp/Spaghetti-aglioo-o-lio.jpg",
  //     recipeTitle: "Spagethi Aglio Olio",
  //     likes: 200,
  //     body: "Spagethi Aglio Olio Recipe",
  //   },
  //   {
  //     id: 4,
  //     recipeImage: "https://i.ibb.co/z7zRVxV/Spaghetti-Carbonara.jpg",
  //     recipeTitle: "Spagethi Carbonara",
  //     likes: 200,
  //     body: "Spagethi Carbonara Recipe",
  //   },
  //   {
  //     id: 5,
  //     recipeImage: "https://i.ibb.co/Cn1XPNB/Kimchi.jpg",
  //     recipeTitle: "Kimchi",
  //     likes: 10,
  //     body: "Kimchi Recipe",
  //   },
  // ],
  recipes: [],
});
// getter
export const getters = {
  recipeData(state) {
    return state.recipes; // getter untuk di panggil oleh commponent atau function untuk mendapatkan data.
  },
  lastIdRecipe(state) {
    let recipesLength = state.recipes.length;
    return state.recipes[recipesLength - 1].id;
  },
  detailRecipe: (state) => (id) => {
    return state.recipes.find((recipe) => recipe.id === id);
  },
};
//mutations

export const mutations = {
  addNewRecipe(state, payload) {
    return state.recipes.push(payload);
  },
  setRecipe(state, payload) {
    state.recipes = payload;
  },
};

// actions
export const actions = {
  nuxtServerInit({ commit }) {
    return axios
      .get(
        "https://bootcamp-timedoor-vuejs-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json"
      )
      .then((response) => {
        const recipeArray = [];
        for (const key in response.data) {
          recipeArray.push({ ...response.data[key], id: key });
        }
        commit("setRecipe", recipeArray);
      })
      .catch((e) => context.error(e));
  },
  addRecipe({ commit }, recipe) {
    return axios
      .post(
        "https://bootcamp-timedoor-vuejs-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json",
        recipe
      )
      .then(() => {
        commit("addNewRecipe", recipe);
      });
  },
};
