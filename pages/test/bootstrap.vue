<template lang="pug">

.accordion.stack--s
  accordion-item(v-for='(p, i) in content', @toggle='activeIndex = i', :active='activeIndex == i', :key='i')
    .tab(slot='tab')
      h3.sans--m tab content
    .panel(slot='panel')
      p {{ p }}
</template>
<script>

import AccordionItem from '~/components/core/accordion-item';

export default {
  name: 'test',
  data() {
    return {
      activeIndex: 0,
      content: [
        'Donec id elit non mi porta gravida at eget metus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Maecenas faucibus mollis interdum.'
      ]
    };
  },
  components: { AccordionItem },
};

</script>

<style lang="scss">

  button {
    cursor: pointer;
  }

</style>
