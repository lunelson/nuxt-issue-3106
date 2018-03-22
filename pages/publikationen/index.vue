<template lang="pug">
  div
    h1 Publikationen
    ul
      li(v-for="book in books" :key="book.id")
        p {{ book.title }}
        nuxt-link(:to='"publikationen/" + book.slug') LINK

</template>

<script>

const books = require('~/data/books');
export default {
  data() {
    return { books };
  }
};

</script>
