<template>
  <div>
    <RecipeList :dataRecipes="recipes"></RecipeList>
    <!-- <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1> -->
  </div>

</template>

<script>
import RecipeList from '../components/recipe/RecipeList.vue';
export default {
  middleware: "check-auth",
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
