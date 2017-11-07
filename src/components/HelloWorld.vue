<template>

 <section id="slide">
     <div class="swiper-container swiper-container01">
         <div class="swiper-wrapper">
             <div class="swiper-slide"><img src="../assets/img/yybimg/detail01.jpg"></div>
             <div class="swiper-slide"><img src="../assets/img/yybimg/detail02.jpg"></div>
             <div class="swiper-slide"><img src="../assets/img/yybimg/detail03.jpg"></div>
             <div class="swiper-slide"><img src="../assets/img/yybimg/detail04.jpg"></div>
             <div class="swiper-slide"><img src="../assets/img/yybimg/detail05.jpg"></div>
         </div>
         <div class="swiper-pagination"></div>
     </div>
 </section>


</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   mounted(){
       var swiper = new Swiper('.swiper-container01',{
               autoplay:8000,
               loop:true,
               pagination : '.swiper-pagination'
       })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
