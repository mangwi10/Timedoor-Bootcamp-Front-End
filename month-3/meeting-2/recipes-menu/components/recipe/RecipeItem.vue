<template>
  <div class="col-sm-6 col-md-3 col-lg-2">
    <nuxt-link tag='div' :to="{
      name: 'recipe-recipeId',
      params: { recipeId: recipe.id }
    }">
      <div class="card">
        <img class="recipes-content__img card-img-top rounded" alt="Pasta" :src="recipe.recipeImage">
        <div class="card-body">
          <h1 class="card-text fs-5 text" style="height: 45px; align-item: center;">
            {{
              recipe.recipeTitle
            }}</h1>
          <div class="recipes-content__body__review card-footer bg-transparent">
            <img src="icons/heart.png" alt="Heart">
            <p>{{ recipe.likes }} Likes</p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>

</template>
<script>
export default {
  props: ["recipe"]
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
