<template>
    <section id="slide">
        <!--swiper-01-->
        <div class="swiper-container swiper-container01">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../assets/img/yybimg/slid01.png"></div>
                <div class="swiper-slide"><img src="../../assets/img/yybimg/slid02.png"></div>
                <div class="swiper-slide"><img src="../../assets/img/yybimg/slid03.png"></div>
                <div class="swiper-slide"><img src="../../assets/img/yybimg/slid04.png"></div>
                <div class="swiper-slide"><img src="../../assets/img/yybimg/slid05.png"></div>
            </div>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
    export default {
       mounted(){
                   var swiper = new Swiper('.swiper-container01',{
                      autoplay:3000,
                      loop:true,
                      loopedSlides:3,
                      spaceBetween:10,
                      centeredSlides:true,
                      slidesPerView : 'auto'
                   });
               }
    }
</script>

<style scoped>

</style>
