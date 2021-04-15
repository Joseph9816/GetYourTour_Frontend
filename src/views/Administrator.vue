<template>
  <div class="administrator">
    <Carrusel />
    <!-- <Search /> -->
    <br>
    <div class="row text-center">
    <router-link to="/storeTour"> <button class="btn btn-success px-4 py-3">Agregar un nuevo tour</button> </router-link>
    </div>
  </div>
</template>


<script>
  import Carrusel from "@/components/Home/Carrusel.vue";
  //import Search from "@/components/Home/Search.vue";

// @ is an alias to /src
/*import HelloWorld from "@/components/HelloWorld.vue";*/

export default {
  name: "Home",
  components: {
    Carrusel,
    //Search,
  },
};
</script>