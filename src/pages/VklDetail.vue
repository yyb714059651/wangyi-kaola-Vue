<template>
    <div>
        <vkl-detail-header></vkl-detail-header>
        <detail-section></detail-section>

    </div>
</template>

<script type="text/ecmascript-6">

        import VklDetailHeader  from "../components/common/VklDetailHeader.vue";
        import DetailSection  from "../components/detail/DetailSection.vue";
        import '../assets/css/detail.css'
    export default {
        components:{
                      DetailSection,
                      VklDetailHeader

                 }
    }
</script>

<style scoped>

</style>
