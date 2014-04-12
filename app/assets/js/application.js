$(document).ready(function() {
  $('*[data-toggle="tooltip"]').tooltip()
  data_confirm();
  toogle_contact_message();
});

/*** Confirm dialog **/
var data_confirm = function () {
   $('a[data-confirm], button[data-confirm]').click( function () {
      var msg = $(this).data('confirm');
      return confirm(msg);
   });
};
