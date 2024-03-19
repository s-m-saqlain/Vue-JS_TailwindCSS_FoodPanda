<script>
import Mobile from '../assets/Images/mobile.png'
import Scan from '../assets/Images/scan.png'
import Appgallery from '../assets/Images/Appgallery.png'
import Appstore from '../assets/Images/Appstore.png'
import Googleplay from '../assets/Images/Googleplay.png'

export default {
  data() {
    return {
      Mobile: Mobile,
      Scan: Scan,
      Appgallery,
      Appstore,
      Googleplay,
    };
  },
};
</script>

<template>
<div class="container mx-auto mt-12">
<p class="text-4xl">Put us in your pocket</p>
</div>
<div class="container mx-auto mt-12 h-full  rounded-lg bg-pink-600">
<div class="sm:flex items-center justify-between">
<div class="ml-5">
<p class="text-2xl text-white sm:text-start text-center sm:pt-0 pt-12">Download the food and groceries you love</p>
<div class="flex items-center justify-between">
<img :src="Scan" alt="Description of the image" class="mt-12 bg-gray-500 border border-white rounded-lg p-1" style="width:13%">
<p class="text-white mx-6 mt-10">It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p>
</div>
<div class="flex items-center sm:justify-start justify-center sm:gap-5 gap-3 sm:mt-8 mt-12">
<img :src="Appgallery" alt="Description of the image" class="cursor-pointer" style="width:20%">
<img :src="Appstore" alt="Description of the image" class="cursor-pointer" style="width:20%">
<img :src="Googleplay" alt="Description of the image" class="cursor-pointer" style="width:20%">
</div>
</div>
<img :src="Mobile" alt="Description of the image" class="sm:mx-0 mx-auto sm:mt-0 mt-12 w-[50%]">
</div>
</div>
<div class="container mx-auto">
<br/>
<hr />
</div>

</template>

<style>

</style>