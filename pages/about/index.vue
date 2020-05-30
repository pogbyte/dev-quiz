<template>
  <div>
     <div v-for="post in cards" :key="post.id">{{ post.text_back }}</div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    cards: gql`
      query {
        cards: SearchCard(data: {}) {
          text_front
          text_back
          id
        }
      }
    `
  },
  middleware: ['isAuth'],
  data() {
    return {
      cards: []
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss">

</style>
