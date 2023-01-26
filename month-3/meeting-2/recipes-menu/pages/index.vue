<template>
  <div>
    <RecipeList :dataRecipes="recipes"></RecipeList>
  </div>

</template>

<script>
import RecipeList from '../components/recipe/RecipeList.vue';
export default {
  components: {
    RecipeList
  },
  name: 'IndexPage',
  computed: {
    recipes() {
      return this.$store.getters.recipeData // call function getter untuk mendapatkan data
    },
  }
}
</script>

<style>

</style>
