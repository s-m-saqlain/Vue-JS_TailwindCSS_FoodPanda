<template>
  <form @submit.prevent="submitForm">
  <div class="bg-image bg-center sm:h-[800px] h-screen flex items-center">
    
      <div class="mx-auto my-auto bg-white sm:w-[40%] my-12 rounded-lg">
        <p
          class="text-black text-[35px] text-center sm:py-3 sm:mt-[1%] mt-[5%] sm:px-0 px-2 sm:font-bold font-semibold"
        >
          Create An Account
        </p>
        <div class="sm:mx-12 mx-4 my-4">
          <div class="sm:flex justify-between items-center">
            <button
              type="button"
              class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center sm:w-[46%] w-full inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              Sign in with Facebook
            </button>
            <button
              type="button"
              class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center sm:w-[46%] w-full inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
          <div class="flex justify-between items-center gap-3">
            <div class="border-t border-gray-300 w-full h-[4px] mt-1"></div>
            <p class="text-gray-500">or</p>
            <div class="border-t border-gray-300 w-full h-[4px] mt-1"></div>
          </div>
          <div class="sm:flex justify-between items-center my-3">
            <div>
              <label
                for="inputField"
                class="block text-gray-700 font-semibold mb-2"
                >First Name</label
              >
              <input
                v-model="fname"
                type="text"
                placeholder="First Name"
                class="placeholder-gray-500 w-full border border-gray-300 rounded-md p-2"
              />
              <span v-if="errors.fname" class="error">{{
                errors.fname
              }}</span>
            </div>
            <div>
              <label
                for="inputField"
                class="block text-gray-700 font-semibold mb-2 sm:mt-0 mt-3"
                >Last Name</label
              >
              <input
                v-model="lname"
                type="text"
                placeholder="Last Name"
                class="placeholder-gray-500 w-full border border-gray-300 rounded-md p-2"
              />
              <span v-if="errors.lname" class="error">{{
                errors.lname
              }}</span>
            </div>
          </div>
          <label for="inputField" class="block text-gray-700 font-semibold mb-2"
            >Your email</label
          >
          <input
            v-model="email"
            type="email"
            placeholder="example@gmail.com"
            class="placeholder-gray-500 w-full border border-gray-300 rounded-md p-2"
          />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
          <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
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
          <span v-if="errors.password" class="error">{{
            errors.password
          }}</span>
          <label
            for="inputField"
            class="block text-gray-700 font-semibold mb-2 mt-4"
            >Your Contact</label
          >
          <input
            v-model="country"
            type="number"
            placeholder="Enter Contact"
            id="contact"
            name="contact"
            class="appearance-none border border-gray-300 w-full rounded-md py-2 px-3 text-gray-700"
          />
          <span v-if="errors.country" class="error">{{ errors.country }}</span>
          <div class="flex justify-start items-center gap-3 mt-8">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              class="h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-900 rounded"
            />
            <p class="text-gray-900 text-[15px] text-sm text-base">
              By signing up, you are creating a Flowbite account, and you
            </p>
          </div>
          <p class="ml-7 text-sm text-base text-[15px]">
            agree to Flowbite’s
            <span
              class="text-blue-500 font-semibold hover:underline cursor-pointer"
              >Terms of Use</span
            >
            and
            <span
              class="text-blue-500 font-semibold hover:underline cursor-pointer"
              >Privacy Policy.</span
            >
          </p>
          <button
            class="bg-blue-700 hover:bg-blue-700 text-white font-semibold py-2 px-4 w-full mt-8 rounded-lg"
          >
            Create an account
          </button>
          <p
            class="text-gray-900 my-8 font-normal text-base text-sm text-start"
          >
            Already have an account?
            <span
              class="text-blue-500 font-semibold hover:underline cursor-pointer"
              >Sign in here</span
            >
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
      fname: "",
      lname: "",
      email: "",
      password: "",
      country: "",
      errors: {},
      errorMessage: '',
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
    async submitForm() {
      this.errors = {};
      this.errorMessage = '';

      if (!this.fname) {
        this.errors.fname = "FirstName is required.";
      }
      if (!this.lname) {
        this.errors.lname = "LastName is required.";
      }
      if (!this.email) {
        this.errors.email = "Email is required.";
      }
      if (!this.password) {
        this.errors.password = "Password is required.";
      }
      if (!this.country) {
        this.errors.country = "Country is required.";
      }
      if (this.errorMessage) {
        this.errorMessage.email = this.errorMessage.email;
      }

      if (Object.keys(this.errors).length === 0) {
        try {
          const response = await this.registerUser({
            fname: this.fname,
            lname: this.lname,
            email: this.email,
            password: this.password,
            country: this.country,
          });
          console.log("Registration successful:", response);
        } catch (error) {
          if (error.response && error.response.data.errors) {
            this.errors = error.response.data.errors;
          }
          else if (error.response && error.response.data.message.email[0]) {
            console.error('Registration failed:', error.response.data.message.email[0]);
            this.errorMessage = error.response.data.message.email[0];
          }
           else {
            console.error("Registration failed:", error);
          }
        }
      }
    },
    registerUser(userData) {

    return axios.post("https://foodpanda55.pythonanywhere.com/userapi/User/auth/signup/", userData);
    
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
