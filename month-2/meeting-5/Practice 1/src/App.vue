<template>
  <div>
    <app-input-todo></app-input-todo>
    <app-todo-list></app-todo-list>
  </div>
</template>

<script>
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';
export default {
  components: {
    "app-input-todo": InputTodo,
    "app-todo-list": TodoList
  }
}
</script>

<style>
/** Body Style **/
body {
  font-family: 'Open Sans', sans-serif
}

button:hover {
  cursor: pointer;
}
</style>
