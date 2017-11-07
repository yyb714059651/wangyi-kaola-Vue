<template>
    <div>
        <section id="slide">
            <div class="swiper-container swiper-container01">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../../assets/img/yybimg/detail01.jpg"></div>
                    <div class="swiper-slide"><img src="../../assets/img/yybimg/detail02.jpg"></div>
                    <div class="swiper-slide"><img src="../../assets/img/yybimg/detail03.jpg"></div>
                    <div class="swiper-slide"><img src="../../assets/img/yybimg/detail04.jpg"></div>
                    <div class="swiper-slide"><img src="../../assets/img/yybimg/detail05.jpg"></div>
                </div>
                <div class="swiper-pagination"></div>
               <!-- <div class="swiper-scrollbar"></div>-->
            </div>
        </section>
        <!--text-->
        <section id="text-box">
            <div class="text-01">先领卷后下单，购买立省100元</div>
            <div class="text-02">
                <span>￥589</span>
                <i>特价</i>
                <i>包税</i>
            </div>
            <div class="text-03">

                <i><span class="iconfont icon-huangguan" style="padding-right:0.1rem"></span>黑卡价￥569</i>
                <i>开通黑卡会员<a href="###">&gt;</a></i>
            </div>
            <div class="text-04">
                <i class="text-04-i1">自营</i>
                <i class="text-04-i2">Danlel Wellngton 施华洛世奇镶钻女士手表090DW</i>
            </div>
            <div class="text-05">
                <p>DW近几年出镜率可是非常高，随意搭配着轻轻松松凹造型，一上手瞬间就潮流范！虽然设计是北欧简约风格，但每个细节都呈现着Dw的品位与质感。Dw虽然不名贵，但是它有着时尚高级感，可是简约风格的经典代表~</p>
            </div>
            <div class="text-06">
                <i><span class="iconfont icon-touxiang" style="padding-right:0.1rem;color: yellowgreen"></span>瑞典品牌</i>
                <i><span class="iconfont icon-moban1qiuzhiyixiang01" style="padding-right:0.1rem"></span>跨界品牌</i>
            </div>
            <div class="text-07">
                <i><span class="iconfont icon-huangguan" style="padding-right:0.1rem;color: #000"></span>黑卡用户下单享96折，预计省27元</i>
                <i><a href="###">立即开通&gt;</a></i>
            </div>
            <div class="text-08">
                <i class="iconfont icon-faxian" style="padding-right:0.1rem;color:red;"></i>
                <p>DW近几年出镜率可是非常高，随意搭配着轻轻松松凹造型，一上手瞬间就潮流范！虽然设计是北欧简约风格，但每个细节都呈现着Dw的品位与质感。Dw虽然不名贵，但是它有着时尚高级感，可是简约风格的经典代表!!</p>
            </div>
            <div class="text-09">
                <i class="text-09-i1">领劵</i>
                <span>100元抵扣劵</span>
                <i class="text-09-i2"><a href="###">&gt;</a></i>
            </div>
            <div class="text-09">
                <i class="text-09-i1">促销</i>
                <span>
                    <p>[包税]本商品已包税，无需再额外缴纳</p>
                    <p>[考拉豆抵扣]单间可用10豆抵10元</p>
                </span>
                <i class="text-09-i2"><a href="###">&gt;</a></i>
            </div>
            <div class="text-09">
                <i class="text-09-i1">配送</i>
                <strong>
                    <p>香港至西安新城区</p>
                    <p style="color:gray">支付成功后，预计10-15工作日送达</p>
                </strong>
                <i class="text-09-i2"><a href="###">&gt;</a></i>
            </div>
            <div class="text-09">
                <i class="text-09-i1">运费</i>
                <strong>满88元免费</strong>
                <i class="text-09-i2"><a href="###">&gt;</a></i>
            </div>
            <div class="text-10">
                <i class="text-10-i1">说明</i>
                <strong>
                    <p style="color:gray">会员96折|商品包税|j假一赔十|不支持7天无理由退货|自营直邮仓发货</p>
                </strong>
                <i class="text-10-i2"><a href="###">&gt;</a></i>
            </div>
            <div class="text-11">
                <div class="text-11-box">
                    <i class="text-11-i1">优惠套餐(1)</i>
                    <i class="text-11-i2"><a href="###">&gt;</a></i>
                </div>
                <div class="text-11-img">
                    <p>[套餐|￥799]<i style="color: red">立省￥69</i></p>
                    <img src="../../assets/img/yybimg/text-img.jpg">
                </div>
            </div>
        </section>
        <footer class="footdetail">
            <div class="footerbox01">
              <i class="iconfont icon-xin2"></i>
              <p>收藏</p>
            </div>
            <div class="footerbox02">
              <i class="iconfont icon-gouwuche1"></i>
              <p>购物车</p>
            </div>
            <div class="footerbox03">
               <p>加入购物车</p>
            </div>
            <div class="footerbox04">
              <p>立即购买</p>
            </div>
        </footer>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
       mounted(){
           var swiper = new Swiper('.swiper-container01',{
                  autoplay:8000,
                  loop:true,
                  pagination : '.swiper-pagination'
                 /* scrollbar:'.swiper-scrollbar'*/
              });
       }
    }
</script>

<style scoped>

</style>
