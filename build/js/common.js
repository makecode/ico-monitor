$(document).ready(function() {
  var $language = $('.language'),
      $languageEl = $('.language__el');

  //Language
  $language.click(function(){
    $(this).toggleClass('is-open');
  });

  $languageEl.click(function(){
    $languageEl.removeClass('is-active');
    $(this).toggleClass('is-active');
  });

  $('table.table').DataTable({
    aoColumnDefs: [{
      bSortable: false,
      aTargets: [ 0, 1, 2, 5 ]
    }],
    paging: false,
    searching: false,
    info: false
  });
});