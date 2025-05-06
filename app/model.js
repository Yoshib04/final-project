export function loadPage(pageName) {
   $.get(`pages/${pageName}.html`, (data) => {
      $('#app').html(data);
   }).fail(function () {
      console.error('failed to load content on: ' + pageName);
   });
}