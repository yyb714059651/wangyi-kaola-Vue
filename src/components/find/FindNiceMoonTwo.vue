<template>
    <section class="goodlist">
        <!--good-02-->
        <div class="goodlist-box">
            <p>好物频道</p>
        </div>
        <div class="swiper-container swiper-container06">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../assets/img/yybimg/goodlist01.png">
                    <p>美妆控</p>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/yybimg/goodlist02.png">
                    <p>穿衣控</p>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/yybimg/goodlist03.png">
                    <p>美妆控</p>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/yybimg/goodlist04.png">
                    <p>生活控</p>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/yybimg/goodlist05.png">
                    <p>美妆控</p>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/yybimg/goodlist06.png">
                    <p>生活控</p>
                </div>

            </div>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
    export default {
    mounted(){
        /*swiper06*/
        var swiper06 = new Swiper('.swiper-container06',{
            loop:false,
            slidesPerView : 3,
            spaceBetween : 10
        });
    }
    }
</script>

<style scoped>

</style>
