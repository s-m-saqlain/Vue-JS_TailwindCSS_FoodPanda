<script>
import Cooking from '../assets/Images/Cooking.png';

export default {
  data() {
    return {
      Cooking: Cooking,
    };
  },
};
</script>

<template>
<div class="sm:container sm:mx-auto mt-8">
    <p class="sm:text-4xl text-2xl sm:text-start text-center sm:font-normal font-bold">You prepare the food, we handle the rest</p>
  </div>
<div class="relative mt-8">
<div :style="{ backgroundImage: 'url(' + Cooking + ')', height: '600px' }"></div>
  <div class="absolute rounded-lg px-4 pt-2 pb-4 shadow-md top-[445px] left-[400px] w-[600px] transform -translate-x-1/2 h-1/2 w-50 bg-white">
     <p class="text-2xl text-black text-center">List your restaurant or shop on foodpanda</p>
     <p class="pt-6">Would you like millions of new customers to enjoy your amazing food and groceries? So would we!</p>
     <p class="pt-6">It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</p>
     <p class="pt-6">Interested? Let's start our partnership today!</p>

    <button type="button" class="text-white bg-pink-600 hover:bg-gray-100 hover:text-black mt-5 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
     Get Started
    </button>
    </div>
    </div>
  
</template>

<style>

</style>