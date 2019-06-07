<template>
  <div class="container">
        <div v-for="post in allPosts" :key="post._id">
        <div id="post-title">
          <router-link style="text-decoration:none;" :to="{ name: 'viewpost', params: { id: post._id } }">
          <h3>{{ post.title }}</h3>
          </router-link>
        </div>
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "posts",
  computed: {
    ...mapGetters(["allPosts"])
  },
  methods: {
    ...mapActions(["getPosts"])
  },
  created() {
    this.getPosts();
  }
};
</script>

<style scoped>
.container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: none !important;
  margin-top: 20px;
}

h3 {
  font-size: 24px;
  font-weight: 400;
  text-transform: capitalize;
  text-decoration: none !important;
}
 #post-title a{
  text-decoration: none !important;
}

a {
  color: rgba(0,0,0,.84) !important;
  text-decoration: none;
}

a:hover {
  color:rgba(0,0,0,.84) !important;
  text-decoration: none;
}

@media(min-width: 1200px) {
  .container {
    width: 50%;
  }
}
</style>
