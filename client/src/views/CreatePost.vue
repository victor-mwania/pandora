<template>
  <div class="container">
    <h2 class="frm">Create a new Article</h2>
    <b-form @submit.prevent="onSubmit" >
    <b-form-group label="Title:">
      <b-form-textarea
        v-model="post.title"
        :rows="1"
        placeholder="Title of the Article"
        required
      ></b-form-textarea>
    </b-form-group>
    <b-form-group label="Body:">
      <b-form-textarea
        v-model="post.body"
        :rows="5"
        placeholder="Body of the Article"
        required
      ></b-form-textarea>
    </b-form-group>
    <button type="submit" class="btn">
      submit
    </button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

const user = localStorage.user;

export default {
  name: "createPost",
  data() {
    return {
      post: {
        title: null,
        body: null,
        publisher: user
      }
    };
  },
  methods: {
    onSubmit(e) {
      axios.post("https://panapi.herokuapp.com/pandora/posts/create", this.post)
    }
  }
};
</script>

<style scoped>
@media (min-width: 800px) {
  .container {
    width: 50%;
  }
}
h2 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 25px;
}
h3 {
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  font-weight: 600;
}
button {
  background-color: rgb(54, 54, 161);
  line-height: 24px;
  padding: 7px 26px;
  height: 37px;
  border: 0;
  text-transform: uppercase;
  border-radius: 9px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s;
  color: #ddd;
  margin-top: 20px;
}

.frm {
  margin: 4px 0px 20px 0px;
}
</style>
