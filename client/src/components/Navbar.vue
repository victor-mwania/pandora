<template>
  <div>
    <nav>
      <div id="title">
        <router-link to="/">
          <h1>Pandora</h1>
        </router-link>
      </div>
      <div id="profile">
        <div v-if="user.username == null">
          <router-link to="/login">
            <h1>sign in</h1>
          </router-link>
        </div>
        <div v-if="user.username">
          <router-link to="/profile">
            <h1>{{ user.username }}</h1>
          </router-link>
          | <h1 @click="signOut" id="signOut">Sign Out</h1>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["user"])
  },
   created() {
     this.getUser()
  } ,
  methods: {
    ...mapActions(["getUser"]),
    signOut() {

      localStorage.clear("jwt");
      localStorage.clear("user");
      this.getUser()
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Kaushan+Script");

/* Navbar appearance and size*/
nav {
  width: 100%;
  background-color: #2d75bd;
  height: 60px;
  text-decoration: none;
}

/* name of the webapp */
#title h1 {
  text-align: right;
  font-family: "Kaushan Script", cursive;
  float: left;
  width: 50%;
  color: white;
}

/* right part of the screen of the navbar or the profile part*/
#profile {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-transform: uppercase;
  text-emphasis: none;
  float: right;
  margin-top: 20px;
}

#signOut{
  cursor: pointer;
}

#profile h1 {
  font-size: 18px;
  padding: 0px 10px;
  text-align: center;
  color: #fff;
  display: inline;
}
</style>
