<template>
  <div class="home">
    <Carrusel />
    <Search />
  </div>
</template>


<script>
  import Carrusel from "@/components/Home/Carrusel.vue";
  import Search from "@/components/Home/Search.vue";

// @ is an alias to /src
/*import HelloWorld from "@/components/HelloWorld.vue";*/

export default {
  name: "Home",
  components: {
    Carrusel,
    Search,
  },
};
</script>
