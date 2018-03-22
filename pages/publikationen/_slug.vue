<template lang="pug">
  div
    h1 Publikation
    p {{ book.title }}

</template>

<script>

export default {
  asyncData({params}) {
    return {
      book: require(`~/data/books/${params.slug}`)
    };
  }
};

</script>
