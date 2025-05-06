import { loadPage } from './model.js';

function changeRoute() {
   let hashTag = window.location.hash;
   let pageID = hashTag.replace('#', '');

   if (pageID === "") {
      pageID = "home";
   }

   if (pageID === "home") {
      $('body').addClass('home');
   } else {
      $('body').removeClass('home');
   }

   loadPage(pageID);
}

function initListeners() {
   $(window).on('hashchange', changeRoute);
   changeRoute();
}

$(document).ready(function() {
   initListeners();
});
