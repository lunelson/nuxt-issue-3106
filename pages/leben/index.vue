<template lang="pug">

include /assets/pug/utils

.wrap--outer__l
  .outer
    ol.times-ol.stack--l

      li.times-li(v-for='(time, i) in times', :key='i')

        //- base-collapse(@toggle='activeIndex = i', :active='activeIndex == i', :key='i')
        base-collapse(:active='activeIndex == i')

          // collapse-button
          h3.times-li-head.row.sans--xl.trim(slot='tab')
            .col.date.w-4-12.ml-neg-1-12.w-4-14__l.ml-neg-1-14__l
              span {{ time.start_year }}
              span(v-if='time.end_year') &ndash;{{ time.end_year | ddigit }}
            .col.title.w-9-12.w-11-14__l {{ time.title }}

          // collapse-region
          //- .times-li-body(slot='panel', :class='"typ-"+time.variant')
          .times-li-body(slot='panel', :class='"typ-"+(i%4+1)')
            .inner.stop
              .grid--l
                .blk.cell(v-if='~[3,4].indexOf(i%4+1)')
                  .grid
                    blockquote.quote.cell.w-10-12.mx-1-12.w-8-12__s.w-5-12__m.mx-2-12__s.w-6-14__l.mx-2-14__l
                      .stack--s2
                        p.sans {{ time.quote }}
                        //- p.sans--l.strong {{ time.quote.text }}
                        //- p.sans--xs {{ time.quote.source | uppercase }}

                .img.cell.w-8-12.w-6-12__s.w-4-12__m.w-5-14__l
                  hold-img(:image='time.images[0]').img-inner
                  //- +ph(1)(style={ 'background-color': 'pink' })
                .txt.cell.w-10-12.w-8-12__s.w-5-12__m.w-6-14__l
                  .txt-inner.grid--l
                    .para
                      p.sans--m {{ time.description }}

                    //- blockquote.quote.ml-1-6.mr-neg-1-6(v-if='time.quote && ~[1,2,3].indexOf(time.variant)')
                    blockquote.quote.ml-1-10.mr-neg-1-10.ml-2-8__s.mr-neg-2-8__s.ml-1-5__m.mr-neg-1-5__m.ml-1-6__l.mr-neg-1-6__l(v-if='~[1,2].indexOf(i%4+1)')
                      .stack--s2
                        p.sans {{ time.quote }}
                        //- p.sans--l.strong {{ time.quote.text }}
                        //- p.sans--xs {{ time.quote.source | uppercase }}





</template>
<style lang="scss">

@import './../../assets/sass/abstract/_config.scss';

.times-ol {

}

.times-li {
 .date { text-align: right }
 .title { background-color: yellow }
}

.times-li-body {
  @include mm-for(inner-y l) {
    margin-top: inner-y(l);
  }

  //
  // DEBUG COLORS
  //
  .img.cell { background-color: #aaa; }
  .lazy-img {
    background-color: #eee;
  }
  .para{
    background-color: #eee;
  }
  .quote { background-color: lime; }

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
    .txt { order: -1; }
    .quote { order: -1; }
  }
  &.typ-3 {
    .img { order: 1 }
  }
}

</style>
<script>

import BaseCollapse from '~/components/base-collapse';
import HoldImg from '~/components/core/hold-img';

const quotesData = require('~/data/quotes_fake');
const timesData = require('~/data/times_fake');

export default {
  components: { BaseCollapse, HoldImg },
  asyncData() {
    return {
      // quotesData, timesData,
      times: timesData.map(time => {
        if (time.quote != null) time.quote = quotesData.find(quote => quote.id == time.quote);
        return time;
      }).sort((a, b) => a.start_year > b.start_year ? 1 : -1 ),
      activeIndex: 0
    };
  },
  filters: {
    uppercase(val) {
      if (!val) return '';
      return val.toString().toUpperCase();
    },
    ddigit(val) {
      if (!val) return '';
      return val.toString().substr(2,4);
    }
  }
};

</script>
