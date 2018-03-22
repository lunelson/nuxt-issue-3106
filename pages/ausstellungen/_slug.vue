<template lang="pug">
  div
    h1 Ausstellung
    p {{ show.title }}

</template>

<script>

export default {
  asyncData({params}) {
    return {
      show: require(`~/data/shows/${params.slug}`)
    };
  }
};

</script>
