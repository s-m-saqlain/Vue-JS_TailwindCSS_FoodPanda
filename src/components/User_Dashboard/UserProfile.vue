<template>
  <div class="w-100 h-[140px] border border-gray-200 relative rounded-lg">
    <div v-if="parsedData">
      <img
        :src="
          'https://FoodPanda55.pythonanywhere.com' + parsedData.payload.profile
        "
        alt="Centered Image"
        class="absolute w-10 h-10 top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <img
        :src="Pencile"
        alt="Centered Image"
        class="absolute w-4 h-4 ml-8 top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      
      <p class="text-center pt-8 text-base text-sm">
        {{ parsedData.payload.email }}
      </p>
      <div
        class="flex justify-between items-center text-base text-sm mx-1 my-2"
      >
        <p>Fisrt Name: {{ parsedData.payload.first_name }}</p>
        <p>Last Name: {{ parsedData.payload.last_name }}</p>
      </div>
      <div class="flex justify-end mr-12 mt-[40px]">
  <button class="bg-blue-500 hover:bg-blue-700 text-white text-sm text-base py-2 px-4 rounded">
    Save Changes
  </button>
</div>
    </div>
    <div v-else>
      <p>No data found in local storage or unable to parse data.</p>
    </div>
  </div>
</template>

<script>
import Foodpanda from "../../assets/Logo/icon.png";
import Pencile from "../../assets/Logo/pencile.png";

export default {
  data() {
    return {
      Foodpanda: Foodpanda,
      Pencile: Pencile,
      parsedData: null,
    };
  },
  mounted() {
    const combinedData = localStorage.getItem("combinedData");
    const parsedData = JSON.parse(combinedData);

    if (parsedData) {
      this.parsedData = parsedData;
    } else {
      console.error("No data found in local storage or unable to parse data.");
    }
  },
};
</script>

<style></style>
