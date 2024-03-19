<script>
import Location from '../assets/Images/Location.png';

export default {
  data() {
    return {
      Location: Location,
    };
  },
};
</script>

<template>
<div class="mt-12 bg-gray-200">
  <p class="pt-12 sm:text-none text-5xl text-center">It's the food and groceries you love, delivered</p>
  <div class="mx-12 mt-12">
    <div class="relative mx-12 w-100">
      <input
        type="text"
        placeholder="Your Street And Street Number"
        class="w-full border border-gray-300 px-4 py-2 rounded-l-md w-50"
      />
      <span class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 cursor-pointer">
        <img :src="Location" alt="Description of the image" class="w-5 h-5">
        <span class="text-red-500 font-semibold">Locate Me</span>
      </span>
    </div>
    <div class="py-8 flex items-center justify-center mt-8">
  <button type="button" class="text-white bg-blue-400 hover:bg-gray-100 hover:text-black border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
<img :src="Location" alt="Description of the image" class="w-8 h-8">
<span class="">Find Food</span>
</button>
</div>

  </div>
</div>

</template>

<style>

</style>