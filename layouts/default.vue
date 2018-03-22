<template lang="pug">


#page.stack--xl.clip

  header#header.site.site-header.pt--l
    .stack
      h1.site-title.sans--kilo.strong
        nuxt-link(to='/') Max Kaminski
      nav.site-nav.chain.sans--m.strong
        nuxt-link(to='/leben/') Leben
        nuxt-link(to='/werke/') Werke
        nuxt-link(to='/aktuelles/') Aktuelles
        nuxt-link(to='/ausstellungen/') Ausstellungen
        nuxt-link(to='/publikationen/') Publikationen

      //- nav
        nuxt-link(to='/kontakt') Kontakt/Impressum

  main#main.site.site-main
    nuxt

  footer#footer.site.site-footer



</template>
<style lang="scss">

.site-nav {
  justify-content: center;
  a { display: block; }
}

#page {
  // NB potential need to fix this for IE 10/11
  // https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items
  // https://connect.microsoft.com/IE/feedback/details/802625/min-height-and-flexbox-flex-direction-column-dont-work-together-in-ie-10-11-preview
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: white;
}

#header {
  position: relative;
  z-index: 20;
  .site-title {
    text-align: center;
  }
}

#main {
  position: relative;
  flex: 1 0 auto;
}

#footer {
  position: relative;
  height: 200px;
  background-color: #eee;
}


</style>
<script>



const site = require('~/data/site');
export default {
  head() {
    return {
      meta: site.faviconMetaTags.filter(tag => tag.tagName == 'meta').map(tag => ({
        hid: tag.attributes.name || tag.attributes.property,
        name: tag.attributes.name || tag.attributes.property,
        content: tag.attributes.content
      }))
    };
  },

  mounted() {
    if (process.env.NODE_ENV == 'development') {
      const body = document.body;
      body.addEventListener('keyup', function(event) {
        if (event.shiftKey == true && event.altKey == true && event.keyCode == 68) {
          body.classList.toggle('debug');
        }
      });
    }
  }
};



</script>
