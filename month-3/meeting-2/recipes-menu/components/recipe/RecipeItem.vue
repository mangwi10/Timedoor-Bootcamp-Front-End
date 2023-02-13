<template>
  <div class="col-sm-6 col-md-3">
    <div>
      <div class="card">
        <img class="recipes-content__img card-img-top rounded" alt="Pasta" :src="recipe.recipeImage">
        <div class="card-body">
          <p class="mb-0">{{ recipe.username }}</p>
          <nuxt-link tag="h1" :to="{
            name: 'recipe-recipeId',
            params: { recipeId: recipe.id }
          }" class="card-text fs-5 text" style="height: 45px; align-item: center;">
            {{
              recipe.recipeTitle
            }}</nuxt-link>
          <div class="recipes-content__body__review card-footer bg-transparent">
            <img :src="likeImage" @click="likeClick" />
            <p>{{ likeCount }} Likes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["recipe"],
  computed: {
    likeCount() {
      if (this.recipe.dataLikes.length === 1) {
        if (this.recipe.dataLikes[0] === "null") {
          return 0
        }
        return 1
      }
      return this.recipe.dataLikes.length
    },
    likeImage() {
      const userEmail = this.$store.getters.userEmail;
      const checkLike = this.recipe.dataLikes.filter(
        (item) => item === userEmail
      );
      if (checkLike.length === 0) {
        return "icons/heart-black.png"
      }
      return "icons/heart-red.png"
    }
  },
  methods: {
    likeClick() {
      if (!this.$store.getters.isAuthenticated) {
        this.$router.push("/user/login");
      }
      const userEmail = this.$store.getters.userEmail;
      const recipe = this.recipe;
      if (recipe.dataLikes.length === 1 && recipe.dataLikes[0] === "null") {
        recipe.dataLikes[0] = userEmail;
      } else {
        const checkLike = recipe.dataLikes.filter(
          (item) => item === userEmail
        );
        if (checkLike.length === 0) {
          recipe.dataLikes.push(userEmail);
        } else {
          if (recipe.dataLikes.length === 1) {
            recipe.dataLikes[0] = "null"
          } else {
            const userEmailIndex = recipe.dataLikes.
              findIndex(item => item === userEmail
              )
            recipe.dataLikes.splice(userEmailIndex, 1)
          }
        }
      }
      let { id: _, ...newRecipe } = recipe
      this.$store.dispatch("likeUpdate", {
        recipeId: this.recipe.id, newDataRecipe: newRecipe
      })
    },
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
  width: 100%;
  height: auto;
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
  text-decoration: none;
}

.recipes-content__body__review img:hover {
  cursor: pointer;
}

.recipes-content__body__title {
  margin: 5px 0px;
}
</style>
