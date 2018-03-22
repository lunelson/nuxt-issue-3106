<template lang="pug">

//-
  https://codepen.io/icouto/pen/MyEdxz?editors=0010

.base-collapse(:class='active?"active":"inactive"')
  button.base-collapse-tab(
    type='button',
    role='heading',
    @click='toggle',
    :id='tabID',
    :aria-controls='panelID',
    :aria-expanded='String(open)')
    slot(name='tab')
  transition(
    :css='false',
    @before-enter='beforeEnter'
    @enter='enter'
    @after-enter='afterEnter'
    @enter-cancelled='enterCancelled'
    @before-leave='beforeLeave'
    @leave='leave'
    @after-leave='afterLeave'
    @leave-cancelled='leaveCancelled')
    div.base-collapse-panel(
      role='region',
      v-show='open',
      :id='panelID',
      :aria-labelledby='tabID',
      :aria-hidden='String(!open)')
      slot(name='panel')

</template>
<style lang="scss" scoped>

.base-collapse-tab {
  display: block;
  width: 100%;
  user-select: none;
  cursor: pointer;
  &:focus { outline: none; }
}
.base-collapse-panel {
  overflow: hidden;
}

</style>
<script>

import Tween from 'gsap/TweenLite';
import Timeline from 'gsap/TimelineLite';
import 'gsap/CSSPlugin';

const btoa = this.btoa || require('btoa');

export default {
  name: 'base-collapse',
  props: {
    active: { type: Boolean, default: false },
    // index: { type: Number }
  },
  data() {
    return {
      open: false,
      tabID: 'asdfasdf',
      panelID: 'adfadfasf'
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
      this.$emit('toggle');
    },
    beforeEnter(el) {},
    enter(el, done) {
      Tween.set(el, { height: 'auto' });
      Tween.from(el, 0.2, { height: 0, onComplete: done });
    },
    afterEnter(el) {},
    enterCancelled(el) {},
    beforeLeave(el) {},
    leave(el, done) {
      Tween.to(el, 0.2, { height: 0, onComplete: done });
    },
    afterLeave(el) {},
    leaveCancelled(el) {},
  },
  created() {
    this.open = this.active;
    this.tabID = btoa(this._uid + 'tab');
    this.panelID = btoa(this._uid + 'panel');
  },
  watch: {
    active(newVal, oldVal) {
      this.open = newVal;
    }
  }
};

</script>
