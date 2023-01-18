<template>
  <div class="container">
    <h1>Selesai Dibaca</h1>
    <div class="book-detail-container">

      <router-link tag="div" :to="{ name: 'detailPage', params: { id: data.id }, query: { data } }"
        v-for="(data, index) in bookList" :key="index" v-if="data.status === 'finnished'" class="book-detail">
        <div class="book-description">
          <h1 class="book-title">{{ data.bookTitle }}</h1>
          <h1 class="book-author">{{ data.bookAuthor }}</h1>
        </div>
      </router-link>
    </div>
    <h1>Belum Selesai Dibaca</h1>
    <div class="book-detail-container">
      <router-link tag="div" :to="{ name: 'detailPage', params: { id: data.id }, query: { data } }"
        v-for="(data, index) in bookList" :key="index" v-if="data.status === 'notFinnished'" class="book-detail">
        <div class="book-description">
          <h1 class="book-title">{{ data.bookTitle }}</h1>
          <h1 class="book-author">{{ data.bookAuthor }}</h1>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookList: []
    };
  },
  created() {
    this.$http.get("https://vue-js-project-d79c6-default-rtdb.firebaseio.com/booklist.json")
      .then(response => {
        return response.json();
      }).then(data => {
        const resultArray = [];
        for (let key in data) {
          resultArray.push(data[key]);
        }
        this.bookList = resultArray;
      });
  }
}
</script>

<style scoped>
.container {
  width: 60%;
  margin: 0 auto;
}

.book-detail-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap
}

.book-detail {
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px 8px 10px #888888;
  margin: 10px;
  width: 210px;
}

.book-description {
  height: 100px;
}

.book-title {
  font-size: 23px;
  margin-bottom: 0px;
  margin-top: 0px;
}

.book-author {
  font-size: 18px;
  margin-top: 0px;
}
</style>
