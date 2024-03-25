<script>
import Foodpanda from "../assets/Logo/icon.png";

export default {
  data() {
    return {
      Foodpanda: Foodpanda,
    };
  },
  methods: {
    goToLogin() {
      this.$router.push("/Login");
    },
    goToSignup() {
      this.$router.push("/Registeration");
    },
  },
};
</script>

<template>
  <div class="sm:px-12 px-5 py-1 mt-5 sticky top-0 z-50 bg-white">
    <div class="flex items-center justify-between">
      <img
        :src="Foodpanda"
        alt="Description of the image"
        class="max-w-10 h-10"
      />
      <div>
        <button
          @click="goToLogin"
          class="bg-white text-pink-500 font-bold py-1 px-3 sm:mx-6 mx-1 rounded-lg border border-pink-500"
        >
          Login
        </button>
        <button
          @click="goToSignup"
          class="bg-pink-500 text-white font-bold py-1 px-3 rounded-lg"
        >
          Sign up
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
