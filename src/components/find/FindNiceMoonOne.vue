<template>

    <section id="good">
        <!--swiper-05-->
        <div class="swiper-container swiper-container05">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../assets/img/yybimg/good01.png"></div>
                <div class="swiper-slide"><img src="../../assets/img/yybimg/good02.png"></div>
                <div class="swiper-slide"><img src="../../assets/img/yybimg/good03.png"></div>
                <div class="swiper-slide"><img src="../../assets/img/yybimg/good04.png"></div>
            </div>
        </div>
    </section>

</template>

<script type="text/ecmascript-6">
    export default {

        mounted(){
             /*swiper05*/
             var swiper05 = new Swiper('.swiper-container05',{
                 autoplay:4000,
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
