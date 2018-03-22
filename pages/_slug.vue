<template lang="pug">
  div
    h1 {{ page.title }}

</template>

<script>

export default {
  asyncData({params}) {
    return {
      page: require(`~/data/pages/${params.slug}`)
    };
  }
};

</script>
