$('#title-dropdown').selectize({
  create: true,
  sortField: 'text'
});

$('#state-dropdown').selectize({
  create: true,
  sortField: 'text'
});

$('.unicode-part').keyup(function () {
  if (this.value.length == this.maxLength) {
    $(this).next('.unicode-part').focus();
  }
});

$('.input-text-msg').click(function () {
  $('.address-fields').slideToggle();
});
