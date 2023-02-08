<template>
  <div>
    <h1 class="title mb-4">LOGIN</h1>
    <form @submit.prevent="onSubmit">
      <!-- <div class="container">
        <input type="email" placeholder="Enter Email" name="uname" required v-model="email" />
        <input type="password" placeholder="Enter Password" name="psw" required v-model="password" />
        <button type="submit">Log In</button>
      </div> -->

      <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 text-center">Your Email</label>
      <div class="relative mb-6">
        <input type="text" id="input-group-1"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@info.com" name="uname" required v-model="email">
      </div>
      <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 text-center">Your
        Password</label>
      <div class="relative mb-6">
        <input type="password" id="input-group-1"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="psw" required v-model="password">
      </div>
      <button type="submit"
        class=" place-items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-auto mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Log
        In</button>
      <p class="new-account">
        Belum Punya Akun?
        <nuxt-link to="/user/signup">Buat Akun</nuxt-link>
      </p>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("authenticateUser", {
        isLogin: true,
        email: this.email,
        password: this.password,
      })
        .then(() => {
          this.$router.push("/");
        })

    },
  },
};
</script>
<style>
.title {
  text-align: center;
}

.new-account {
  text-align: center;
}

input[type="email"],
input[type="password"] {
  width: 20%;
  padding: 12px 20px;
  margin: 8px auto;
  display: block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px auto;
  display: block;
  border: none;
  cursor: pointer;
  width: 20%;
}

button:hover {
  opacity: 0.8;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}
</style>
