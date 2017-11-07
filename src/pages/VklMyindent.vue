<template>
    <div>
       <vkl-myindent-header></vkl-myindent-header>
       <myindent-section></myindent-section>

    </div>
</template>

<script type="text/ecmascript-6">

    import VklMyindentHeader  from "../components/common/VklMyindentHeader.vue";
    import MyindentSection  from "../components/myindent/MyindentSection.vue";
    import '../assets/css/myindent.css'

    export default {
         components:{
              VklMyindentHeader,
              MyindentSection

         }

    }
</script>

<style scoped>

</style>
