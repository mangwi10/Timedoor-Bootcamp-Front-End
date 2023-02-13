<template>
  <div>
    <div class="container w-50">
      <div class="row g-3 justify-content-md-center">
        <Input placeholder="Chicken friedrice" v-model="newRecipe.recipeTitle">
        <label class="form-label">Recipe Title</label>
        </Input>
        <Input placeholder="www.imgelink.com/fried-rice.jpg" v-model="newRecipe.recipeImage">
        <label class="form-label">Recipe Image</label>
        </Input>
        <TextArea v-model="newRecipe.desciption">
      <label class="form-label">Recipe Description</label>
    </TextArea>
      </div>

      <div class="col-12">
        <h2>Ingredients</h2>
      </div>
      <div class="row g-1 justify-content-md-center" style="margin-top: 5px" v-for="item in ingredientCount"
        :key="item">
        <Input colStyle="col-8" placeholder="2 large eggs" v-model="newRecipe.ingredients[item - 1]"></Input>

        <Button :buttonType="item !== ingredientCount ? 'delete' : 'add'" @click="addIngredient(item)">
          {{ item !== ingredientCount ? "Delete" : "Add" }}
        </Button>
      </div>

      <div class="col-12">
        <h2>Directions</h2>
      </div>
      <div class="row g-1 justify-content-md-center" style="margin-top: 5px" v-for="item in directionCount" :key="item">
        <Input colStyle="col-8" :placeholder="`Step ${item}`" v-model="newRecipe.directions[item - 1]"></Input>
        <Button :buttonType="item !== directionCount ? 'delete' : 'add'" @click="addDirection(item)">{{ item !==
        directionCount ? "Delete" : "Add" }}</Button>
      </div>

      <Button @click="addRecipe">Submit</Button>
    </div>
  </div>
  <!-- <div style="margin: 0px">
    <main>
      <div class="add-recipe">
        <label>
          <b>Image Link : </b>
          <input type="text" placeholder="https://www.image.com/..." class="add-recipe__img"
            v-model="newRecipe.recipeImage">
        </label>
        <input type="text" placeholder="Title ..." class="add-recipe__title" v-model="newRecipe.recipeTitle">
        <hr>
        <textarea placeholder="Your Recipe ....." class="add-recipe__desc" v-model="newRecipe.body"></textarea>
        <button class="add-recipe__button" @click="addRecipe">Add Recipe</button>
      </div>
    </main>
  </div> -->
</template>
<script>
import Input from '../../components/newRecipe/Input.vue';
import Button from '../../components/newRecipe/Button.vue';
import TextArea from '../../components/newRecipe/TextArea.vue';

export default {
  middleware: ["check-auth", "auth"],
  components: {
    Input,
    Button,
    TextArea
  },
  data() {
    return {
      newRecipe: {
        recipeImage: "",
        recipeTitle: "",
        ingredients: [],
        directions: [],
        desciption: "",
      },
      ingredientCount: 1,
      directionCount: 1,
    }
  },
  methods: {
    addRecipe() {
      // let newId = this.$store.getters.lastIdRecipe + 1
      // this.$store.commit('addNewRecipe', { id: newId, ...this.newRecipe })
      // this.$router.push("/");
      //   axios.post(
      //     "https://bootcamp-timedoor-vuejs-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json",
      //     this.newRecipe
      //   ).then(response => {
      //     console.log(response)
      //     this.$router.push("/");

      //   })
      // }
      this.$store.dispatch("addRecipe", this.newRecipe)
        .then(() => {
          this.$router.push("/");
        });
    },
    addIngredient(item) {
      if (item === this.ingredientCount) {
        this.ingredientCount += 1;
      } else {
        this.newRecipe.ingredients.splice(item - 1, 1);
        this.ingredientCount -= 1;
      }
    },
    addDirection(item) {
      if (item === this.directionCount) {
        this.directionCount += 1;
      } else {
        this.newRecipe.directions.splice(item - 1, 1);
        this.directionCount -= 1;
      }
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

/* Add Recipe */
.add-recipe__title,
.add-recipe__desc {
  display: block;
  width: 100%;
  margin: 10px 0px;
  border: none;
}

.add-recipe__title {
  height: 50px;
  font-size: 25px;
}

.add-recipe__desc {
  height: 300px;
}

.add-recipe__img {
  border: none;
  height: 30px;
}

.add-recipe__button {
  color: white;
  background-color: #4B56D2;
  border: none;
  padding: 20px;
  border-radius: 15px;
  font-weight: bold;
}

.add-recipe__button:hover {
  cursor: pointer;
  background-color: #82C3EC;
  color: #4B56D2;
}
</style>
