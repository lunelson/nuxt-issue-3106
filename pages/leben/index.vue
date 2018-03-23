<template>
  <div class="wrap--outer__l">
    <div class="outer">
      <ol class="itmes stack--l">
        <li class="times-li"
            v-for='(time, i) in times'
            :key='i'>
          <base-collapse :active="activeIndex === 1"/>
          <p class="sans">{{ time.quote }}</p>
        </li>
      </ol>
    </div>
  </div>
</template>
<style lang="scss">
  
  @import './../../assets/sass/abstract/_config.scss';
  
  .times-ol {
  
  }
  
  .times-li {
    .date {
      text-align: right
    }
    .title {
      background-color: yellow
    }
  }
  
  .times-li-body {
    @include mm-for(inner-y l) {
      margin-top: inner-y(l);
    }
    
    //
    // DEBUG COLORS
    //
    .img.cell {
      background-color: #aaa;
    }
    .lazy-img {
      background-color: #eee;
    }
    .para {
      background-color: #eee;
    }
    .quote {
      background-color: lime;
    }
    
    .txt-inner {
      display: flex;
      flex-direction: column;
    }
    
    // MOBILE
    @include mm(null, s) {
      
      &.typ-3, &.typ-4, {
        .blk {
          margin-left: percentage(1/m-var('grid-columns'));
        }
      }
      
      &.typ-1, &.typ-2, &.typ-3 {
        .txt {
          margin-left: percentage(1/m-var('grid-columns'));
        }
      }
      &.typ-4 {
        .img {
          margin-left: percentage(1/m-var('grid-columns'));
        }
      }
    }
    
    @include mm(s, m) {
      
      &.typ-3, &.typ-4, {
        .blk {
          margin-left: percentage(2/m-var('grid-columns'));
        }
      }
      
      &.typ-1, &.typ-2, &.typ-3 {
        .txt {
          margin-left: percentage(2/m-var('grid-columns'));
        }
      }
      &.typ-4 {
        .img {
          margin-left: percentage(2/m-var('grid-columns'));
        }
      }
    }
    
    // TABLET / DESKTOP
    @include mm(m) {
      .txt {
        margin-right: percentage(1/m-var('grid-columns'));
        margin-left: percentage(1/m-var('grid-columns'));
      }
      &.typ-1, &.typ-4, {
        .img {
          margin-left: percentage(1/m-var('grid-columns'));
        }
      }
      &.typ-2, &.typ-3, {
        .img {
          margin-right: percentage(1/m-var('grid-columns'));
        }
      }
    }
    
    &.typ-2 {
      .txt {
        order: -1;
      }
      .quote {
        order: -1;
      }
    }
    &.typ-3 {
      .img {
        order: 1
      }
    }
  }

</style>
<script>

import BaseCollapse from '~/components/base-collapse';
import HoldImg from '~/components/core/hold-img';

const quotesData = require('~/data/quotes_fake');
const timesData = require('~/data/times_fake');

const transformData = (data) => {
  return data.map(time => {
    // time.quote might be non-numeric, because a quote was already assigned to it
    // A better way would be to make a deep copy from the data though.
    if (typeof time.quote === 'number') {
      time.quote = quotesData.find(quote => quote.id == time.quote);
    }
    return time;
  }).sort((a, b) => a.start_year > b.start_year ? 1 : -1);
};

export default {
  components: { BaseCollapse, HoldImg },
  data () {
    return {
      times: transformData(timesData),
      activeIndex: 0
    };
  },
  filters: {
    uppercase (val) {
      if (!val) return '';
      return val.toString().toUpperCase();
    },
    ddigit (val) {
      if (!val) return '';
      return val.toString().substr(2, 4);
    }
  }
};

</script>
