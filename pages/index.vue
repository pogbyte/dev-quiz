<template>
  <div>
    home
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {

  },
  mounted(){
    this.$axios.$get('/getpost')
  }

}
</script>

<style lang="scss">

</style>