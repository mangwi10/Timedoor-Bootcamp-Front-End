<template>
  <div style="margin: 0px;">
    <main>
      <div class="recipes">
        <div class="recipes-content" v-for="(recipe, index) in recipes" :key="index">
          <img class="recipes-content__img" alt="Pasta" :src="recipe.recipeImage">
          <div class="recipes-content__body">
            <nuxt-link tag="h1" :to="{ name: 'detail', params: { detail: recipe } }"
              class="recipes-content__body__title">
              {{
                recipe.recipeTitle
              }}</nuxt-link>
            <div class="recipes-content__body__review">
              <img src="images/heart.png" alt="Heart">
              <p>{{ recipe.likes }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      recipes: [
        {
          id: 1,
          recipeImage: "https://i.ibb.co/SBsMYNC/Rendang.jpg",
          recipeTitle: "Rendang",
          likes: 100,
          body: "Rendang Recipe"
        },
        {
          id: 2,
          recipeImage: "https://i.ibb.co/MRNhgzW/Tomyam.jpg",
          recipeTitle: "Tomyam",
          likes: 40,
          body: "Tomyam Recipe"
        },
        {
          id: 3,
          recipeImage: "https://i.ibb.co/CW4tVvp/Spaghetti-aglioo-o-lio.jpg",
          recipeTitle: "Spagethi Aglio Olio",
          likes: 200,
          body: "Spagethi Aglio Olio Recipe"
        },
        {
          id: 4,
          recipeImage: "https://i.ibb.co/z7zRVxV/Spaghetti-Carbonara.jpg",
          recipeTitle: "Spagethi Carbonara",
          likes: 200,
          body: "Spagethi Carbonara Recipe"
        },
        {
          id: 5,
          recipeImage: "https://i.ibb.co/Cn1XPNB/Kimchi.jpg",
          recipeTitle: "Kimchi",
          likes: 10,
          body: "Kimchi Recipe"
        }
      ]
    }
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #EEF2E6;
}

main {
  margin: 22px;
}

.recipes {
  display: flex;
  flex-wrap: wrap;
}

.header-nav__link {
  margin-left: 20px;
  color: black;
  text-decoration: none;
  font-size: 20px;
}

/* Recipe Content */
.recipes-content {
  background-color: #EEF2E6;
  padding: 10px;
  margin: 13px 13px;
}

.recipes-content__body {
  padding: 5px;
}

.recipes-content__img {
  width: 280px;
  height: 210px;
}

.recipes-content__body__review {
  display: flex;
  align-items: center;
}

.recipes-content__body__review img {
  width: 20px;
  height: 20px;
  margin: 5px 10px 5px 0px;
}

.recipes-content__body__review p {
  margin: 0px;
}

.recipes-content__body__review img:hover {
  cursor: pointer;
}

.recipes-content__body__title {
  margin: 5px 0px;
}
</style>
