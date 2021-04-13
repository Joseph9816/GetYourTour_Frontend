<template>
  
  <div id="app">
    <Navigator />
    <router-view />
    <Modal />
  </div>
</template>


<script>

import Navigator from "@/components/Navigator"
import Token from "@/models/token.js"
import Modal from "@//components/ModalLogIn.vue"

export default {

  data() {
    return {
      name: 'Get Your Tour',
      stars: '⭐⭐⭐⭐⭐',
      token: ""
    }
  },
  async mounted() {
    let response = await Token.getToken();
    this.token = response;
    localStorage.setItem('token', this.token);
  },
  components: {
    Navigator,
    Modal,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family:'Roboto', sans-serif;
    background-image: url("assets/background.jpg");
    /*height: 2000px;*/
    background-color: rgba(216, 216, 216, 0.782);
    background-size: cover;
}
</style>

<!-- <script>
    const getYourTour = {
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
        title.innerHTML += firstLetter;
        if (string.length > 1) {
        setTimeout(function() {
            recursiveAnimateTitle(string.substring(1));
        }, 100);
        }
    }
    
    function animateTitle(string) {
        document.getElementById('prinDes').innerHTML = "";
        recursiveAnimateTitle(string);
    }
    
    animateTitle('La página web de viajes más completa en el mercado');
</script>-->
 