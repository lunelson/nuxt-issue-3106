<template lang="pug">
  div
    h1 Aktuelles
    p {{ post.title }}

</template>

<script>

export default {
  asyncData({params}) {
    return {
      post: require(`~/data/posts/${params.slug}`)
    };
  }
};

</script>
