const { resolve, join } = require('path');

const site = require('./data/site');
const routes = require('./data/routes');

const rootDir = process.cwd();
const srcDir = rootDir;

module.exports = {
  rootDir, srcDir,
  head: {
    title: site.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: site.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  generate: { routes },

  css: [
    '@/assets/sass/abstract.scss',
    '@/assets/sass/base.scss',
  ],

  build: {
    extractCSS: process.env.NODE_ENV == 'production',
    vendor: [
      'lazysizes/plugins/rias/ls.rias',
      'lazysizes',
      // 'gsap/TweenLite',
      // 'gsap/TimelineLite',
      // 'gsap/CSSPlugin',
      // 'gsap/ScrollToPlugin'
    ],
    extend (config, { isDev, isClient }) {

      // ESLINT
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }

      // VUE PUG LOCALS
      const vueLoader = config.module.rules.find(({loader}) => loader == 'vue-loader');
      Object.assign(vueLoader.options.template, require('./pug.config'), { basedir: srcDir });

      // const babelLoader = config.module.rules.find(({loader}) => loader == 'babel-loader');
      // babelLoader.exclude = {
      //   test: resolve(__dirname, 'node_modules'),
      //   exclude: [
      //     resolve(__dirname, 'node_modules/bootstrap-vue')
      //   ]
      // };
      // babelLoader.include = [
      //   __dirname,
      //   resolve(__dirname, 'node_modules/bootstrap-vue')
      // ];
      // console.log(babelLoader);

      // (VUE) SASS OPTIONS
      const isJsRule = (rule) => { return rule.test.toString() === '/\\.js$/'; };
      const isVueRule = (rule) => { return rule.test.toString() === '/\\.vue$/'; };
      const isSASSRule = (rule) => { return ['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1; };
      config.module.rules.forEach((rule) => {
        // if (isJsRule(rule)) {
        //   console.log(rule);
        //   rule.include = [
        //     require.resolve('bootstrap-vue')
        //   ];
        // }
        if (isVueRule(rule)) {
          rule.options.loaders.scss.find(({loader}) => loader == 'sass-loader').options.includePaths = [join(rootDir, 'node_modules')];
          rule.options.loaders.scss.find(({loader}) => loader == 'sass-loader').options.includePaths = [join(rootDir, 'node_modules')];
        }
        if (isSASSRule(rule)) {
          rule.use.find(({loader}) => loader == 'sass-loader').options.includePaths = [join(rootDir, 'node_modules')];
        }
      });

      // LINKS RE modifying sass config
      // https://github.com/nuxt/nuxt.js/issues/864#issuecomment-338460571
      // https://github.com/nuxt/nuxt.js/issues/772#issuecomment-331831119
      // https://github.com/nuxt/nuxt.js/issues/1092#issuecomment-316365016
      // https://glitch.com/edit/#!/sass-resources-loader-nuxt?path=nuxt.config.js:2:0
      // https://github.com/vuejs/vue-loader/blob/master/docs/en/configurations/pre-processors.md#loading-a-global-settings-file
    }
  }
};
