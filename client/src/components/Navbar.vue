<template>
    <div>
        <nav>
            <div id="title">
                <router-link to="/">
                    <h1>Pandora</h1>
                </router-link>
            </div>
            <div id="profile">
                <!-- shown when user is signed in -->
                
                <div v-if="isLoggedIn == undefined">
                   <router-link to="/login">
                        <h1>sign in</h1>
                    </router-link>
                </div>
                   <div v-else >
                     <router-link to="/profile">
                       <h1> {{ user.username }}</h1>
                   </router-link>
               
                </div>
                    <!--      <span>
                 <ul>
                    <li>Profile</li>
                    <li>Publish</li>
                    <li>log out</li>
                </ul>
                 </span> -->
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      authenticated: false
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLogged;
    },
    ...mapGetters(["user", "isLogged"])
  },
   created() {
     this.getUser()
  } ,
  methods: {
    ...mapActions(["getUser"])
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
}

#profile h1 {
  font-size: 18px;
  margin-top: 20px;
  padding: 0px 10px;
  text-align: center;
  color: #fff;
}

#profile ul {
  display: block;
  background-color: #2d75bd;
  list-style: none;
  position: relative;
  padding: 0;
  width: 230px;
  float: right;
  position: absolute;
}

#profile ul li {
  padding: 4px;
  display: block;
  position: relative;
  padding: 0px 30px;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
  text-transform: none;
}

#profile ul li:hover {
  background-color: rgb(101, 104, 139);
}
</style>
