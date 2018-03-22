<template lang="pug">
  div
    h1 Aktuelles
    ul
      li(v-for="post in posts" :key="post.id")
        p {{ post.title }}
        nuxt-link(:to='"publikationen/" + post.slug') LINK

</template>

<script>

const posts = require('~/data/posts');
export default {
  data() {
    return { posts };
  }
};

</script>
