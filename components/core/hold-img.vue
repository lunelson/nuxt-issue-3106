<template lang="pug">

.hold-img(:style='holdStyle')
  lazy-img(:image='image')

</template>
<script>

import LazyImg from '~/components/core/lazy-img';

export default {
  name: 'hold-image',
  props: ['image'],
  components: { LazyImg },
  data() {
    return {};
  },
  computed: {
    ratio() { return this.image.width / this.image.height; },
    holdStyle() {
      return {
        width: this.ratio < 1 ? `${100*this.ratio}%`: '100%',
        paddingBottom: '100%',
      };
    }
  }
};
</script>
<style lang="scss">

.hold-img {
  position: relative;
}
.lazy-img {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}

</style>
