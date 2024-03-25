<template>
  <form @submit.prevent="login">
    <div class="bg-image bg-center h-screen flex items-center">
      <div class="mx-auto my-auto bg-white sm:w-[40%] rounded-lg">
        <p
          class="text-black text-[25px] text-center py-3 sm:px-0 px-2 font-bold"
        >
          Sign In To Your Account
        </p>
        <div class="sm:mx-12 mx-4 my-4">
          <label for="inputField" class="block text-gray-700 font-semibold mb-2"
            >Your email</label
          >
          <input
            v-model="email"
            type="email"
            placeholder="example@gmail.com"
            class="placeholder-gray-500 w-full border border-gray-300 rounded-md p-2"
          />
          <label
            for="inputField"
            class="block text-gray-700 font-semibold mb-2 mt-4"
            >Your Password</label
          >
          <input
            v-model="password"
            type="password"
            placeholder="Enter Password"
            id="password"
            name="password"
            class="appearance-none border border-gray-300 w-full rounded-md py-2 px-3 text-gray-700"
          />
          <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
          <div class="sm:flex justify-between items-center mt-8">
            <div
              class="flex sm:justify-between justify-start items-center gap-3"
            >
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                class="h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-900 rounded"
              />
              <p class="text-gray-900">Remember Me</p>
            </div>
            <div>
              <p class="text-blue-500 underline font-semibold sm:mt-0 mt-2">
                Forgot password?
              </p>
            </div>
          </div>
          <button
            class="bg-blue-700 hover:bg-blue-700 text-white font-semibold py-2 px-4 w-full mt-8 rounded-lg"
          >
            Log in to your account
          </button>
          <p
            class="text-blue-500 my-8 underline font-semibold text-base text-sm text-center"
          >
            Don't have an account?
          </p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "https://foodpanda55.pythonanywhere.com/userapi/User/auth/login/",
          {
            email: this.email,
            password: this.password,
          }
        );

        const token = response.data.token;
        const payload = response.data.payload;

        localStorage.setItem("token", token);
        localStorage.setItem("payload", JSON.stringify(payload));

        const combinedData = JSON.stringify({ token: token, payload: payload });
        localStorage.setItem("combinedData", combinedData);

        this.$router.push("/Profile");
      } catch (error) {
        console.error("Login failed:", error);
        if (error.response && error.response.data.message) {
          this.errorMessage = error.response.data.message;
        }
        if (error.response && error.response.data.message.non_field_errors[0]) {
          this.errorMessage = error.response.data.message.non_field_errors[0];
        } else {
          this.errorMessage = "Failed to login. Please try again later.";
        }
      }
    },
  },
};
</script>

<style>
.bg-image {
  background-image: url("../assets/Images/Food_Image.png");
  background-size: cover;
}
</style>
