<template lang="pug">
</template>
<script>
/*

v-accordion.multi
    v-accordion:tab='myAccordion'
    v-accordion:panel='myAccordion'

  v-toggle:src='uid'
  v-toggle:tgt='uid'

*/
export default {
  props: {
    open: { type: Boolean, default: false },
    index: { type: Number }
  },
  model: {
    prop: 'index',
    event: 'toggle'
  },
  data() {
    return {
      // open: false
    };
  },
  methods: {
    doit() {
      this.open = !this.open;
      this.$emit('toggle');
    }
  },
  mounted() {
    console.log(this.$slots.tab);
    console.log(this.$slots.panel);
  }
};
</script>
