<template>

<Header />
<Searchbox />
<Banner />
<Carts />
<Second_Banner />
<Footer />
<Registeration />

</template>

<script>

import Header from '../components/Header.vue';
import Searchbox from '../components/Searchbox.vue';
import Banner from '../components/Banner.vue';
import Carts from '../components/Carts.vue';
import Second_Banner from '../components/Second_Banner.vue';
import Footer from '../components/Footer.vue';
import Registeration from '../Pages/Registeration.vue';

export default {
  components: {
    Header,
    Searchbox,
    Banner,
    Carts,
    Second_Banner,
    Footer,
    Registeration,
  },
};

</script>

<style>
</style>