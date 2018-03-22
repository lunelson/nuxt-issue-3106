<template lang="pug">

//-
  TABSET
    TAB
    TABPANEL

  TABSET
  ACCORDION/COLLAPSE

  dl(role='presentation').accordion
    dt(role='heading', aria-level='...')
      button(aria-expanded=..., aria-controls=...)
    dd(role='region', aria-hidden, aria-labelledby='..')

  .accordion-list
    .accordion-item
      h3
        button
      div

mixin accordion
  dl.accordion(role='presentation')&attributes(attributes)
    block

mixin accordion-tab({ level = 3, panelID = null, isExpanded = false }={})
  dt(role='heading', aria-level=level)&attributes(attributes)
    button(type='button', aria-expanded=isExpanded, aria-controls=panelID)
      block

mixin accordion-panel({ tabID = null, isHidden = true }={})
  dd(role='region', aria-labelledby=tabID, aria-hidden=isHidden)&attributes(attributes)
    block


.wrap--outer__l
  .outer
    .stack--s
      h1.sans--l widgets

      // ACCORDION
      +accordion
        +accordion-tab({ targetID: 'panel1' })#tab1 AREA 1
        +accordion-panel({ tabID: 'tab1' })#panel1
          p THIS IS PANEL 1
        +accordion-tab({ targetID: 'panel2' })#tab2 AREA 2
        +accordion-panel({ tabID: 'tab2' })#panel2
          p THIS IS PANEL 2
        +accordion-tab({ targetID: 'panel3' })#tab3 AREA 3
        +accordion-panel({ tabID: 'tab3' })#panel3
          p THIS IS PANEL 3

      // TABLIST
      #tabs
        ul.tabsList(role='tablist')
          li.current(role='presentation')
            a#tab-ipa(href='#ipa', role='tab', aria-selected='true', tabindex='0') India Pale Ale (IPA)
          li(role='presentation')
            a#tab-gueuze(href='#gueuze', role='tab', aria-selected='false', tabindex='-1') Gueuze
          li(role='presentation')
            a#tab-imperial-stout(href='#imperial-stout', role='tab', aria-selected='false', tabindex='-1') Imperial Stout
        .tabPanel(role='tabpanel', aria-hidden='false', aria-labelledby='tab-ipa', style='display: block;')
          h2#ipa India Pale Ale (IPA)
        .tabPanel(role='tabpanel', aria-hidden='true', aria-labelledby='tab-gueuze', style='display: none;')
          h2#gueuze Gueuze
        .tabPanel(role='tabpanel', aria-hidden='true', aria-labelledby='tab-imperial-stout', style='display: none;')
          h2#imperial-stout Imperial Stout
</template>
<style lang="scss">

// @import './../../assets/sass/abstract/_config.scss';

</style>
<script>
export default {

};
</script>
