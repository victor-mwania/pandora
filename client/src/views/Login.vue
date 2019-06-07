<template>
  <div class="container">
    <div id="login">
    <div>
      <h4>
        Login to Pandora...
      </h4>
    </div>
  <b-form @submit.prevent="signIn" class="mt-1">
  <b-form-group
  label="Username:"
  >
  <b-form-input 
  v-model="login.userName"
  required
  placeholder="Enter username"
  />
  </b-form-group>
  <b-form-group
  label="Password"
  >
  <b-form-input 
  v-model="login.password"
  required
  type="password"
  placeholder="Enter password"
  />
  </b-form-group>
  <button type="submit"> login</button>
  </b-form>
  </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      login: {
        userName: null,
        password: null
      },
      user: false
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    signIn() {
      this.loginUser(this.login);
      this.$router.push("/");
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

@media (max-width: 512px) {
  button {
    width: 100%;
  }
}
#login {
  margin-top: 20%;
}
h4 {
  font-size: 30px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
button {
  background-color: rgb(54, 54, 161);
  line-height: 24px;
  padding: 7px 16px;
  height: 37px;
  width: 100%;
  border: 0;
  border-radius: 9px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s;
  color: #ddd;
}
</style>
