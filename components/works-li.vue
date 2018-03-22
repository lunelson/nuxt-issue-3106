<template lang="pug">


li.works-li.cell.w-10-12.w-5-12__m.w-4-14__l
  nuxt-link(:to='url').stack--s
    .hold-outer(:style='holdStyle')
      lazy-img(:image='work.image')
    p.sans--s
      span {{ work.year }}
      | &ensp;
      span {{ work.title }}



</template>
<script>

import LazyImg from '~/components/core/lazy-img';

export default {
  name: 'works-li',
  props: ['work'],
  components: { LazyImg },
  data() {
    return {};
  },
  computed: {
    url() { return `/werke/${this.work.slug}`; },
    ratio() { return this.work.image.width / this.work.image.height; },
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


@import './../assets/sass/abstract/_config.scss';

.works-li {
  .hold-outer {
    position: relative;
  }
  .lazy-img {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  @include m(null,m) {
    &:nth-child(2n) {
      margin-left: percentage(2/12);
    }
  }
  @include m(m,l) {
    &:nth-child(4n - 1) {
      margin-left: percentage(2/12);
    }
  }
  @include m(l) {
    &:nth-child(6n - 2) {
      margin-left: percentage(2/14);
    }
  }
}


</style>
