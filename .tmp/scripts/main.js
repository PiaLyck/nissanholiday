'use strict';

$('#title-dropdown').selectize({
    create: true,
    sortField: 'text'
});

$('.unicode-part').keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next('.unicode-part').focus();
    }
});
//# sourceMappingURL=main.js.map
