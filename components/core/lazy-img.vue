<template lang="pug">

  .lazy-img.hold(:style='holdStyle')
    img.lazyload(sizes='auto', src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", :data-src='imgixSrc')

</template>
<script>


export default {
  name: 'lazy-img',
  props: ['image'],
  data() {
    return {};
  },
  computed: {
    imgixSrc() {
      return `${this.image.url}?w={width}`;
    },
    holdStyle() {
      return {
        height: 0,
        paddingBottom: `${this.image.height / this.image.width * 100}%`
      };
    }
  }
};


</script>
