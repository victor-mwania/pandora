<template>
  <div class="container">
    <h2 class="name">{{ user.first_name + " " + user.second_name }}</h2>
    <h5><span class="details">email</span>: {{ user.email }}</h5>
    <h5><span class="details">username</span>: {{ user.username }}</h5>
    <h4><span class="details">Published posts</span>:</h4>
    <div id="posts" v-for="post in posts" :key="post._id">
      <router-link style="text-decoration:none;
           color: black;" :to="{ name: 'viewpost', params: { id: post._id }}">
        <h6>{{ post.title }}</h6>
      </router-link>
    </div>
    <router-link to="/create-post">
      <button>Create New Post</button>
    </router-link>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "profile",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["user", "posts"])
  },
  created() {
    this.getUser().then(this.published);
  },
  methods: {
    ...mapActions(["getUser", "published"])
  }
};
</script>

<style scoped>
.container {
  margin-top: 100px;
  text-align: justify;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 20px;
  width: 50%;
}

.name {
  font-size: 50px;
  font-weight: 500;
  padding: 4px;
  color: #0e518e;
}

.details {
  font-weight: 900;
}

button {
  background-color: rgb(54, 54, 161);
  line-height: 24px;
  padding: 7px 16px;
  height: 37px;
  border: 0;
  text-align: center;
  border-radius: 9px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s;
  color: #ddd;
}

p a:link {
  text-decoration: none !important;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #fff;
  text-decoration: none;
}
</style>
