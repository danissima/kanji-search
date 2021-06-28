<template>
  <div class="">
    <h2 class="h2">Registration</h2>
    <userForm :submitForm="addNewUser" :formComponents="formComponents"/>
  </div>
</template>

<script>
import userForm from "../userForm/userForm";
export default {
  name: "reg",
  components: {
    userForm
  },
  data() {
    return {
      formComponents: {
        inputs: [
          {type: "text", placeholder: "Login", name: "login", required: true},
          {type: "text", placeholder: "Your name", name: "name", required: true},
          {type: "email", placeholder: "E-mail", name: "email", required: true},
          {type: "password", placeholder: "Password", name: "password", required: true},
        ],
        submitBtnText: "Sign Up!",
        errorMessage: null
      }
    }
  },
  methods: {
    addNewUser() {
      this.formComponents.errorMessage = null
      let enteredLogin = document.getElementsByName("login")[0].value,
          enteredName = document.getElementsByName("name")[0].value,
          enteredEmail = document.getElementsByName("email")[0].value,
          enteredPassword = document.getElementsByName("password")[0].value
      if (this.$store.state.users.users.some(user => user.login == enteredLogin)) {
        this.formComponents.errorMessage = "This login is already taken. Choose another login please"
        return
      }
      let newUser = {
        login: enteredLogin,
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword
      }
      this.$store.commit("users/addNewUser", newUser)
      this.$router.push("/")
    }
  }
}
</script>