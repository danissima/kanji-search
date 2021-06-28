<template>
  <div class="">
    <h2 class="h2">Authorization</h2>
    <userForm :submitForm="logUserIn" :formComponents="formComponents"/>
  </div>
</template>

<script>
import userForm from "../userForm/userForm";
export default {
  name: "auth",
  components: {
    userForm
  },
  data() {
    return {
      formComponents: {
        inputs: [
          {type: "text", placeholder: "Login", name: "login"},
          {type: "password", placeholder: "Password", name: "password"},
        ],
        submitBtnText: "Log in",
        errorMessage: null
      }
    }
  },
  methods: {
    logUserIn() {
      this.formComponents.errorMessage = null
      let enteredLogin = document.getElementsByName("login")[0].value,
          enteredPassword = document.getElementsByName("password")[0].value
      if (this.$store.state.users.users.some(user => user.login == enteredLogin && user.password == enteredPassword )) {
        this.$store.commit("users/logUserIn", {login: enteredLogin})
      } else {
        this.formComponents.errorMessage = "Wrong login or password. Try again"
      }
    }
  }
}
</script>
