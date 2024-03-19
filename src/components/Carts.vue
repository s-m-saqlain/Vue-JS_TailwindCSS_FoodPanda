<script>

import Karachi from '../assets/Images/karachi.png'
import Islamabad from '../assets/Images/islamabad.png'
import Lahore from '../assets/Images/lahore.png'
import Faisalabad from '../assets/Images/faisalabad.png'
import Rawalpindi from '../assets/Images/rawalpindi.png'
import Abotabad from '../assets/Images/abbotabad.png'
import Bhawalpur from '../assets/Images/bawalpur.png'
import Gujranwala from '../assets/Images/gujranwala.png'
import Gujrat from '../assets/Images/gujarat.png'
import Hyderabad from '../assets/Images/hyderabad.png'
import Jhelum from '../assets/Images/jehlum.png'
import Kamoke from '../assets/Images/kamoke.png'
import Larkana from '../assets/Images/larkana.png'
import Mangla from '../assets/Images/mangla.png'
import Mardan from '../assets/Images/mardan.png'
import Multan from '../assets/Images/multan.png'
import Murree from '../assets/Images/muree.png'
import Okara from '../assets/Images/okara.png'
import Peshawar from '../assets/Images/peshawar.png'
import Quetta from '../assets/Images/quetta.png'
import Sadiqabad from '../assets/Images/sadiqabad.png'
import Sahiwal from '../assets/Images/sahiwal.png'
import Sargodha from '../assets/Images/sargodha.png'
import Sheikhupura from '../assets/Images/shekupura.png'
import Sialkot from '../assets/Images/sialkot.png'
import Sukkur from '../assets/Images/sukkur.png'

export default {
  data() {
    return {
      cities: [
        { id: 1, name: 'Islamabad', bgColor: 200 },
        { id: 2, name: 'Karachi', bgColor: 300 },
        { id: 3, name: 'Lahore', bgColor: 200 },
        { id: 4, name: 'Faisalabad', bgColor: 300 },
        { id: 5, name: 'Rawalpindi', bgColor: 200 },
        { id: 6, name: 'Abotabad', bgColor: 300 },
        { id: 7, name: 'Bhawalpur', bgColor: 200 },
        { id: 9, name: 'Gujranwala', bgColor: 200 },
        { id: 10, name: 'Gujrat', bgColor: 300 },
        { id: 11, name: 'Hyderabad', bgColor: 200 },
        { id: 12, name: 'Jhelum', bgColor: 300 },
        { id: 13, name: 'Kamoke', bgColor: 200 },
        { id: 14, name: 'Larkana', bgColor: 300 },
        { id: 15, name: 'Mangla', bgColor: 200 },
        { id: 16, name: 'Mardan', bgColor: 300 },
        { id: 17, name: 'Multan', bgColor: 200 },
        { id:18, name: 'Murree', bgColor: 300 },
        { id: 19, name: 'Okara', bgColor: 200 },
        { id: 21, name: 'Peshawar', bgColor: 200 },
        { id: 22, name: 'Quetta', bgColor: 300 },
        { id: 24, name: 'Sadiqabad', bgColor: 300 },
        { id: 25, name: 'Sahiwal', bgColor: 200 },
        { id: 26, name: 'Sargodha', bgColor: 300 },
        { id: 27, name: 'Sheikhupura', bgColor: 200 },
        { id: 28, name: 'Sialkot', bgColor: 300 },
        { id: 29, name: 'Sukkur', bgColor: 200 },
      ],
      columns: 4,
      cityRows: [],
      cityImages: {
        Islamabad,
        Karachi,
        Lahore,
        Faisalabad,
        Rawalpindi,
        Abotabad,
        Bhawalpur,
        Gujranwala,
        Gujrat,
        Hyderabad,
        Jhelum,
        Kamoke,
        Larkana,
        Mangla,
        Mardan,
        Multan,
        Murree,
        Okara,
        Peshawar,
        Quetta,
        Sadiqabad,
        Sahiwal,
        Sargodha,
        Sheikhupura,
        Sialkot,
        Sukkur,
        Islamabad,
      },
    };
  },
  computed: {

    computedCityRows() {
      const rows = [];
      const cities = this.cities.slice(); 

      while (cities.length > 0) {
        rows.push(cities.splice(0, this.columns));
      }
      return rows;
    },
  },
  watch: {
    computedCityRows: {
      immediate: true,
      handler(newVal) {
        this.cityRows = newVal;
      },
    },
  },
   methods: {
    getImage(cityName) {
      return this.cityImages[cityName] || ''; 
    },
  },
};
</script>
<template>
<div class="container mx-auto mt-[250px]"> 
 <p class="text-4xl">Find us in these cities and many more!</p>
<div class="mt-12">
      <div v-for="(row, rowIndex) in cityRows" :key="rowIndex" class="sm:grid grid-cols-4 gap-4 cursor-pointer">
        <div v-for="(city, colIndex) in row" :key="city.id" class="p-4">
          <img :src="getImage(city.name)" alt="City Image" class="w-full h-32 object-cover rounded-md mb-2">
          <span class="bg-white px-4 py-2 text-2xl font-semibold rounded-lg">{{ city.name }}</span>
        </div>
      </div>
    </div>
</div>
</template>
<style>
</style>