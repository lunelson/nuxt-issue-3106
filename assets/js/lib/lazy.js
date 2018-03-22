// require("lazysizes/plugins/respimg/ls.respimg"); // https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/respimg
require("lazysizes/plugins/rias/ls.rias"); // https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/rias
// require("lazysizes/plugins/object-fit/ls.object-fit"); // https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/object-fit
// require("lazysizes/plugins/parent-fit/ls.parent-fit"); // https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/parent-fit
// require('lazysizes/plugins/unveil-hooks/ls.unveil-hooks'); // https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/unveilhooks
// require('lazysizes/plugins/unload/ls.unload'); // https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/unload
// require('lazysizes/plugins/noscript/ls.noscript'); // https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/noscript
// require("lazysizes/plugins/video-embed/ls.video-embed"); // https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/video-embed
// require("lazysizes/plugins/fix-ios-sizes/ls.fix-ios-sizes"); // https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/fix-ios-sizes
require("lazysizes/plugins/optimumx/ls.optimumx"); // https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/optimumx
// require('lazysizes/plugins/include/ls.include'); // https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/include
// require("lazysizes/plugins/custommedia/ls.custommedia"); // https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/custommedia
require("lazysizes");

/*
  OBJECT-FIT: add a CSS font-family rule on the image
  .fit-image {
    object-fit: contain;
    font-family: "object-fit: contain";
  }
 */

// window.lazySizesConfig.rias.widths = [320, 480, 640, 960];
// // window.lazySizesConfig.rias.absUrl = true;

// function imgixSet(image, options, isSquare) {
//   options = Object.assign({ auto: "format,compress" }, options);
//   return [160, 226, 320, 452, 640, 906, 1280, 1810, 2560]
//     .map(w => {
//       const dimensions = isSquare ? { w, h: w } : { w };
//       return `${image.url}${fn.enquery(
//         Object.assign(options, dimensions)
//       )} ${w}w`;
//     })
//     .join(", ");
// }
