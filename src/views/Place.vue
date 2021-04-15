<template>
    <div class="place">
        <br>
        <br>
        <br>
        <PlaceView />
    </div>
</template>
<script>
import PlaceView  from "@/components/Place/PlaceView.vue";

export default {
  name: "Place",
  components: {
      PlaceView,
  },
};
</script>
