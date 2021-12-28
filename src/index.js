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

//Initialisation slider
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-slider',{
    type   : 'loop',
    perPage: 1,

  }
  ).mount();
} );


/*
function getMarque(id) {
  axios.get("http://localhost/wordpress/wp-lone/wp-json/wp/v2/marque_chaussure/" + id)
    .then(function (reponse) {
      let marque = reponse.data
      console.log("nom " , marque.name)
    })
    .catch(function (erreur) {
      console.log(erreur)
    })
}

function getChaussure() {
  axios.get("http://localhost/wordpress/wp-lone/wp-json/wp/v2/chaussure/")
    .then(function (reponse) {
      let maChaussure = reponse.data
      maChaussure.forEach(function(maChaussure) {
        console.log(maChaussure)

        console.log("id :" , maChaussure.id)
        console.log("date : " , maChaussure.date)
        console.log("titre : " , maChaussure.title.rendered)

        let marques = maChaussure.marque_chaussure
        marques.forEach(function(marque){
          getMarque(marque)
          console.log("Marque : " , marque)
        })
      });
    })
    .catch(function (erreur) {
      console.log(erreur)
    })
}

getChaussure()
getMarque()

*/
