<template>
    <div class="container">
        <br><br><br><br>
        <!-- <Carousel :tour_id="3" style="margin-top: 30px" /> -->
        <Information :tour_id="tour" style="margin-top: 30px" />
    </div>
</template>

<script>
//import Carousel from '@/components/ShowTour/Carousel'
import Information from '@/components/ShowTour/Information'

export default {
    data() {
        return {

        }
    },

    props: {
        tour: Number
    },

    components: {
        //Carousel,
        Information,
    }
}
</script>
