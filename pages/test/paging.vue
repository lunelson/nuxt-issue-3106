<template lang="pug">

//-
  how am I supposed to deal with series?
    (erscheinungsjahr already covers the year-ranges)
  what kind of interface for serie/technik

  SEBASTIAN
  - what is your idea with series? can we exclude years
  - please fill out SEO for every image
  - please supply dimensions without unit

  TABSET
    TAB
    TABPANEL

  TABSET
  ACCORDION/COLLAPSE


.wrap--outer__l
  .outer
    .stack--s
      h1.sans--l testing pagination

      // form filter
      form(@submit.prevent)
      ol(v-for='taxObj, taxKey in site.taxonomies', :key='taxKey') {{ taxKey }}
        li(v-for='term in taxObj') {{ term.name }}
      // pagination
      p
        nuxt-link(v-if='currPage > 1', :to="'?page=' + (currPage - 1)") &lt; Prev
        a.disabled(v-else='') &lt; Prev
        span {{ currPage }}/{{ totalPages }}
        nuxt-link(v-if='currPage < totalPages', :to="'?page=' + (currPage + 1)") Next &gt;
        a.disabled(v-else='') Next &gt;

      // works list
      ol.works-ol.grid
        works-li(v-for="work in pagedWorks", :key="work.id", :work="work")


</template>
<style lang="scss">

@import './../../assets/sass/abstract/_config.scss';


</style>
<script>

import WorksLi from '~/components/works-li';

export default {
  components: { WorksLi },
  watchQuery: ['page'],
  asyncData({ query }) {
    return {
      site: require('~/data/site'),
      works: require('~/data/works').sort((a,b) => a.year > b.year ? 1 : -1),
      currPage: +(query.page || 1),
      pageSize: 9,
      sortTerm: '',
      sortDir: ''
      // totalPages: data.total_pages,
    };
  },
  methods: {
    sort() {

    }
  },
  computed: {
    params(){ return JSON.stringify(this.$route.params, null, 2); },
    totalPages() {
      return Math.ceil(this.works.length / this.pageSize);
    },
    pagedWorks(){
      const start = (this.currPage - 1) * this.pageSize;
      const end = Math.min(start + this.pageSize, this.works.length);
      return this.works.slice(start, end);
    },
    prevPage(){
      return null;
    },
    nextPage(){
      return null;
    },
  }
};

</script>
