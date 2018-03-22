<template lang="pug">

//-
  on bind
    find companion among siblings

.demo
  .stack
    h1 directives
    ul
      //- li(v-collapse:parent)
        .tab(v-collapse:tab='a')
        .panel(v-collapse:panel='a')
    //- .accordion(v-collapse-group)
      .accordion-item
        .accordion-tab(v-collapse-tab=key)
        .accordion-panel(v-collapse-panel=key)
    h3: button(role='button', @click='toggle("someID")') TOGGLE
    div.
      Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Donec sed odio dui.
    .accordion(v-test)
    .accordion-item(v-test:tab='1') TAB
    .accordion-item(v-test:panel='1') PANEL
    .accordion-item(v-test:tab='2') TAB
    .accordion-item(v-test:panel='2') PANEL

</template>
<script>

import Vue from 'vue';

Vue.component('tester', {
  template: '<h2>hello again</h2>'
});

Vue.directive('test', {
  bind(el, binding, vnode, oldvnode) {
    const { name, value, oldValue, expression, arg, modifiers } = binding;
    switch (arg) {
    case 'tab':
      console.log('this is the tab');
      break;
    case 'panel':
      console.log('this is the panel');
      break;
    default:
      console.log('this is the parent');
      break;
    }
    // console.log(el);
    // console.log({name});
    // console.log({value});
    console.log({arg});
    // console.dir(vnode);
    // console.log(modifiers.baz);
    // console.dir({ name, value, arg, modifiers});
  },
  inserted(el, binding, vnode, oldvnode) {
    const { name, value, oldValue, expression, arg, modifiers } = binding;
    console.dir(vnode);
    // console.log(modifiers.baz);
    // console.dir({ name, value, arg, modifiers});
  },
  update() {

  }
});

export default {
  data() {
    return {
      foo: []
    };
  },
  methods: {
    toggle(id) {
      console.log(id);
    }
  }
};

/*
bind --
  called only once, when the directive is first bound to the element. This is where you can do one-time setup work.
inserted --
  called when the bound element has been inserted into its parent node (this only guarantees parent node presence, not necessarily in-document).
update --
  called after the containing components VNode has updated, but possibly before its children have updated. The directives value may or may not have changed, but you can skip unnecessary updates by comparing the bindings current and old values (see below on hook arguments).
componentUpdated --
  called after the containing components VNode and the VNodes of its children have updated.
unbind --
  called only once, when the directive is unbound from the element.

*/


</script>

<style lang="scss">

  button {
    cursor: pointer;
  }

</style>
