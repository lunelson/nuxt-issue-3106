<template lang="pug">
  div
    h1 Ausstellungen
    ul
      li(v-for="show in shows" :key="show.id")
        p {{ show.title }}
        nuxt-link(:to='"ausstellungen/" + show.slug') LINK

</template>

<script>

const shows = require('~/data/shows');
export default {
  data() {
    return { shows };
  }
};

</script>
