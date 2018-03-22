<template lang="pug">

dl.accordion-list
  accordion-item(v-for='item, i in items', @toggle='activeTab = i', :active='activeTab == i', :key='i')
    slot(name='tab')
</template>
<script>


import AccordionItem from './accordion-item';
export default {

  components: { AccordionItem },
  data() {
    return {
      activeTab: 0,
      items: []
    };
  }
};
</script>
