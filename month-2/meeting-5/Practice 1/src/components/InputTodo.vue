<template lang="">
  <div>
            <div class="form">
            <form>
                <label for="todo_title" class="form_input">
                    <input type="text" placeholder="Your Todo...">
                </label>
                <label for="todo_title" class="form_input">
                    <textarea placeholder="Todo description..."></textarea>
                </label>
                <button class="submit_button" type="button">Add Todo</button>
            </form>
        </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="">
/** Form Style **/
.form {
  display: flex;
  justify-content: center;
}

.form_input {
  display: block;
  margin-top: 15px;
  margin-bottom: 15px;
}

.form_input input,
.form_input textarea {
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding-left: 10px;
  padding-right: 10px;
}

.form_input input {
  width: 400px;
  height: 35px;
  border-radius: 25px;
}

.form_input textarea {
  width: 400px;
  height: 150px;
  border-radius: 15px;
  padding-top: 10px;
}

.submit_button {
  padding: 10px;
  border: none;
  background-color: #3F51B5;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  width: 100px;
}

button:hover {
  cursor: pointer;
}
</style>
