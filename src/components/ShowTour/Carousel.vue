<template>
<div>
    
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">

    <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div class="carousel-inner">
        <div class="carousel-item active">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

            <div class="container">
                <div class="carousel-caption text-start">
                    <img class="d-block w-100" alt="..." width="600px" height="600px">
                    <h1>عنوان المثال.</h1>
                    <p> نهاية الأوضاع ان أضف, هو مما رجوعهم وقدّموا. أي عدد الدمج نهاية وأكثرها, المسرح الباهضة وبولندا حول و, كل أما سياسة أسابيع. مع حيث قُدُماً الكونجرس, بها و خيار ٢٠٠٤, كلا في مكّن وقام. مع يكن زهاء بالفشل, الجوي الصين الشمال إذ على.</p>
                    <p><a class="btn btn-lg btn-primary" href="#">سجل اليوم</a></p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

            <div class="container">
            <div class="carousel-caption">
                    <img :value="images" class="d-block w-100" alt="..." width="600px" height="600px">
                <h1>عنوان مثال آخر.</h1>
                <p>ثم تزامناً الفرنسي الإقتصادية دار. لكل عن الضغوط المتّبعة, أن حتى إختار المدن بالإنزال. عن الشمل بالفشل تلك, بل أراض أوزار بلديهما حول. دون لكون والتي ثم, كُلفة ويعزى استطاعوا أن لمّ. جُل بخطوط واحدة البشريةً.</p>
                <p><a class="btn btn-lg btn-primary" href="#">أعرف أكثر</a></p>
            </div>
            </div>
        </div>

        <div class="carousel-item">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

            <div class="container">
                <div class="carousel-caption text-end">
                    <img :src="images" class="d-block w-100" alt="..." width="600px" height="600px">
                    <h1>واحد أكثر لقياس جيد.</h1>
                    <p>قررت العصبة إيطاليا وتم أن, عن سكان وقامت الحكومة وفي. كان بـ اوروبا اليابانية, ثمّة بوابة يتعلّق عل بعض. عدم رئيس الآلاف أن حدى.</p>
                    <p><a class="btn btn-lg btn-primary" href="#">تصفح المعرض</a></p>
                </div>
            </div>
        </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">السابق</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">التالى</span>
    </button>
  </div>

  
    <div id="Carrusel">
        <br>
        <br>
        <br>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div v-for="img in images" :key="img.id" class="carousel-item active">
                                <img :src="'../../../../GetYourTour_API/public/storage/' + img.image" class="d-block w-100" alt="..." width="600px" height="600px">
                                
                            </div>
                            <div class="carousel-item">
                                <img src="../../assets/secondImage.jpg" class="d-block w-100" alt="..." width="600px" height="600px">
                                <div class="carousel-caption d-none d-md-block" style="color: white;">
                                    <h3>Diferentes promociones y variedad de destinos</h3>
                                    <p>Busca tus destinos favortios</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="../../assets/thirdImage.jpg" class="d-block w-100" alt="..." width="600px" height="600px">
                                <div class="carousel-caption d-none d-md-block" style="color: white;">
                                    <h3>Has tus sueños realidad con nosotros</h3>
                                    <p>Estamos para servirte</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import TourImages from '@/models/tourImages.js'

export default {
    data() {
        return {
            images: ""
        }
    },

    props: {
        tour_id: Number
    },

    async mounted() {
        this.images = await TourImages.get(this.tour_id);
        console.log(this.images);
        //file:///E://laragon//www//GetYourTour_API//public//storage//
    },


}
</script>