<template>
    <div class="container">
      <div>
        <h4>
          Sign up to Pandora
        </h4>
      </div>
        <b-form @submit.prevent="onSubmit" class="mt-3">
            <b-form-group id="firstName" label="First Name">
                <b-form-input v-model="details.firstName" required/>
            </b-form-group>
            <b-form-group id="lastName" label="Second Name">
                <b-form-input v-model="details.secondName" required/>
            </b-form-group> 
            <b-form-group id="email" label="Email Address:">
                <b-form-input v-model="details.email" required/>
            </b-form-group>
            <b-form-group id="username" label="username">
                <b-form-input v-model="details.userName" required/>
            </b-form-group>
            <b-form-group id="password" label="New Password">
                <b-form-input v-model="details.password" type="password" required/>
           </b-form-group>
        <button type="submit">Sign Up</button> OR <router-link to="login"> Login</router-link>
        </b-form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "signup",
  data() {
    return {
      details: {
        email: null,
        firstName: null,
        secondName: null,
        userName: null,
        password: null
      }
    };
  },
  methods: {
    ...mapActions(["signUser"]),
    onSubmit() {
      this.signUser(this.details).then(this.$router.push("/login"));
    }
  }
};
</script>

<style scoped>
h4 {
  font-size: 30px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 5px;
}
@media (min-width: 800px) {
  .container {
    width: 50%;
  }
}
button {
  background-color: rgb(54, 54, 161);
  line-height: 24px;
  padding: 7px 20px;
  height: 37px;
  text-transform: uppercase;
  border: 0;
  border-radius: 9px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s;
  color: #ddd;
}
</style>
