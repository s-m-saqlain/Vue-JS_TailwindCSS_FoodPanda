<template>
  <div class="w-100 h-[140px] border border-gray-200 relative rounded-lg">
    <div v-if="parsedData">
      <img
        :src="
          'https://FoodPanda55.pythonanywhere.com' + parsedData.payload.profile
        "
        alt="Centered Image"
        class="absolute w-10 h-10 top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        @click="openFilePicker"
      />
      <input
        type="file"
        id="profileImageInput"
        style="display: none"Edit
        accept="image/*"
        @change="handleFileInputChange"
      />

      <img
        v-if="!editMode && showPencil" 
        @click="showPencil = !showPencil"
        :src="Pencile"
        alt="Centered Image"
        class="absolute cursor-pointer bg-white w-4 h-4 ml-8 top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      <div
        v-if="!editMode"
        class="flex justify-between items-center text-base text-sm pt-8 mx-1 my-2"
      >
        <p>FisrtName:{{ parsedData.payload.first_name }}</p>
        <p>LastName:{{ parsedData.payload.last_name }}</p>
      </div>
      <div
        v-else
        class="flex justify-between items-center text-base text-sm pt-8 mx-1 my-2"
      >
      <div class="flex justify-between">
      <div v-if="!editMode">
      <div class="flex jutify-between">
      <p>FirstName:</p>
       <input
          v-model="parsedData.payload.first_name"
          class="text-sm mb-5 border-b border-gray-300"
        />
      </div>
      <div class="flex justify-between">
      <p>LastName:</p>
       <input
          v-model="parsedData.payload.last_name"
          class="text-sm mb-5 border-b border-gray-300"
        />
      </div>
      </div>
      </div>
      </div>

      <div class="flex justify-end mr-12 mt-[60px]">
        <button
          v-if="!editMode"
          @click="toggleEditMode"
          class="bg-blue-500 hover:bg-blue-700 text-white text-sm text-base py-2 px-4 rounded"
        >
          Edit
        </button>
        <button
      v-else
      @click="saveChanges"
      class="bg-blue-500 hover:bg-blue-700 text-white text-sm text-base py-2 px-4 rounded"
    >
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
      showPencil: true,
      Foodpanda: Foodpanda,
      Pencile: Pencile,
      parsedData: null,
      editMode: false,
      showSVG: false
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
  methods: {
    saveChanges() {
      console.log("Changes saved:", this.parsedData);
    },
    openFilePicker() {
      document.getElementById("profileImageInput").click();
    },
    handleFileInputChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.parsedData.payload.profile = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    toggleEditMode() {
      this.editMode = !this.editMode;
      this.showSVG = !this.showSVG;
      this.pencile = !this.pencile;
    },
  },
};
</script>

<style></style>
