//Import slider
import Splide from '@splidejs/splide';
import "@splidejs/splide/src/css/core/index.scss";
import "@splidejs/splide/src/css/themes/default/index.scss";
//import particules
import "./script/particles.min";
import "./script/app";
//import axios
const axios = require("axios")
//Import style
import "./scss/main.scss";
//import particules
import "./script/particles.min"
import "./script/app"
import "./scss/main.scss";

//FAQ

import "./script/faq";
 

/*document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } );*/



//Initialisation slider
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-slider',{
    type   : 'loop',
    perPage: 1,

  }
  ).mount();
} );