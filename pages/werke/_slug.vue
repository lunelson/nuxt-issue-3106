<template lang="pug">

.wrap--outer__l
  .outer
    .work.stop
      .grid--l
        .cell.w-1-4
          .stack--s
            p.sans--s {{ work.title }}
            p.sans--s {{ work.year }}
            p.sans--s {{ work.dimensions }}
        .cell.w-3-4
          lazy-img(:image='work.image')


</template>
<script>

import LazyImg from '~/components/core/lazy-img';

export default {
  components: { LazyImg },
  head() {
    return {
      title: this.work.title,
      meta: this.work.seoMetaTags.filter(tag => tag.tagName == 'meta').map(tag => ({
        hid: tag.attributes.name || tag.attributes.property,
        name: tag.attributes.name || tag.attributes.property,
        content: tag.attributes.content
      }))
    };
  },
  asyncData({params}) {
    return {
      work: require(`~/data/works/${params.slug}`)
    };
  }
};


</script>
<style lang="scss">

.work {

}



</style>
