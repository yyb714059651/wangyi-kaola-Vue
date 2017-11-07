<template>
    <div>
       <vkl-find-header></vkl-find-header>
       <find-section></find-section>
       <vkl-footer></vkl-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import VklFooter  from "../components/common/VklFooter.vue";
    import VklFindHeader  from "../components/common/VklFindHeader.vue";
    import FindSection  from "../components/find/FindSection.vue";

    import '../assets/css/find.css'

    export default {
         components:{
              VklFindHeader,
              FindSection,
              VklFooter
         }

    }
</script>

<style scoped>

</style>
