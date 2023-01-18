<template>
  <div>
    <app-book-list></app-book-list>
    <router-link tag="button" to="/add" class="add-button">
      +
    </router-link>
  </div>

</template>

<script>
import BookList from '../BookList.vue'
export default {
  components: {
    'app-book-list': BookList
  }
}
</script>
<style>
.add-button {
  padding: 10px 18px;
  border-radius: 50%;
  font-size: 25px;
  position: fixed;
  bottom: 60px;
  right: 60px;
  background-color: #282A3A;
  border-color: #282A3A;
  color: white;
}

.add-button:hover {
  cursor: pointer;
  background-color: #393E46;
}
</style>
