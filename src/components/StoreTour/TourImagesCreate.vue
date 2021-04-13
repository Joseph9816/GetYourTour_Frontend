<template>
    <div class="container py-3" id="custom-cards">
        <div class="row align-items-md-stretch">
            <div class="col">
                <div class="h-100 p-3 text-white bg-dark rounded-3">
                    <form enctype="multipart/form-data">
                        <h2>Imagenes</h2>
                        <div class="row">
                            <div class=col-10>
                                <input 
                                type="file"
                                class="form-control"
                                @change="add"
                                accept="image/png, .jpeg, .jpg, image/gif">
                            </div>
                        </div>
                        <div class="row">
                            <figure>
                                <img width="250" height="200" v-for="image in minis" :key="image" :src="image.src" alt="Imagen cargada del tour">
                            </figure>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import TourImages from '@/models/tourImages.js'

export default {

    props: {
        tour_id: Number
    },

    data() {
        return {
            image: {
                name: "",
                stock: 0,
                image: ""
            },
            minis: [],
            cont: 0
        }
    },

    methods: {
        add(e) {
            let file = e.target.files[0];
            this.image.image = file;
            /* Tour.setImage({
                image: this.image,
                tour_id: this.tour_id
            }); */
            console.log(this.tour_id);
            TourImages.store({
                image: this.image,
                tour_id: this.tour_id//hay que cambiarlo
            });
            this.image = {
                name: "",
                stock: 0,
                image: ""
            }
            this.load(file);
        },

        load(file) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.minis.push({
                    src: e.target.result,
                    id: this.cont
                });
            }
            this.cont++;
            reader.readAsDataURL(file);
        }
    },
}
</script>