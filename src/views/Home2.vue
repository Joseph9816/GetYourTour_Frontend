<template>
    <div id="app">
        <div class="title">
            <h1>
                Bienvenidos a {{name}}
                <div id="prinDes"></div>
                <div></div>
            </h1>
        </div>
        <div class="container-fluid">
            <div class="row" id="rowForm">
                <div class="col-md-4" id="col1Prin">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Destino</span>
                        <input type="text" class="form-control" placeholder="Destino" aria-label="Destino" aria-describedby="basic-addon1">
                    </div>
                </div>
                <div class="col-md-4" id="col2Prin">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Checkin</span>
                        <input class="form-control" type="date" id="checkin" >
                    </div>
                </div>
                <div class="col-md-4" id="col3Prin">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Checkout</span>
                        <input class="form-control" type="date" id="checkout" >
                    </div>
                </div>
            </div>
            <div class="row" id="rowSucces">
                <div class="col">
                    <input type="submit" class="btn btn-success btn-lg" name="search" id="search">
                </div>
            </div>
            <div class="container-fluid">
                <div class="row" id="rowCard">
                    <div class="col-md-3">
                        <div class="container-card">
                            <div class="cardTour">

                                <img src="../assets/DUBAI.jpeg" class="image" alt="dubai">
                                <h4>Dubai <i><img src="../assets/heart.png" class="imageheart" alt="heart"></i></h4>
                                <p>
                                    Tour por la ciudad más rica del mundo <br>
                                    Duración aproximada: 1 - 2 horas <br>
                                    4.7 {{stars}} <br>
                                    Desde <b>$45</b> por persona
                                </p>
                               <!-- <a href="">Ver más</a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="modal fade" id="logInModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/vue@next"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="js/getFecha.js"></script>
    <script>
        /* const getYourTour = {
            data() {
                return{
                    name: 'Get Your Tour',
                    stars: '⭐⭐⭐⭐⭐'
                     
                }
            }
        }
        Vue.createApp(getYourTour).mount('#app')
    </script>
    <script>
        var scrollVal = 0;
        $(window).scroll(function(){
            var x = $(this).scrollTop();
            if(x > scrollVal){
                $("header").addClass("sticky");
            }else{
                $("header").removeClass("sticky");
            }
            scrollVal = x;
        });
    </script>
    <script>
        function recursiveAnimateTitle(string) {
            let firstLetter = string[0];
            let title = document.getElementById('prinDes');
            //title.innerHTML += firstLetter;
            if (string.length > 1) {
            setTimeout(function() {
                recursiveAnimateTitle(string.substring(1));
            }, 100);
            }
        }
        
        function animateTitle(string) {
            //document.getElementById('prinDes').innerHTML = "";
            recursiveAnimateTitle(string);
        }
        
        animateTitle('La página web de viajes más completa en el mercado'); */
    </script>-->