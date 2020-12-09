let showBtn = $('.show-button')
let resetBtn = $('.reset-button')
let elements = $('.catalog-item')
let rads = $('.catalog-checkbox-button')

let checkedAny = false;


function hideShow(kinds=[]) {
  elements.each(function() {
    if ($(this).parent().hasClass('hide')) {
      $(this).parent().removeClass('hide');
    }
  });

  if (kinds.length == rads.length) {
    return;
  }

  for (let i = 0; i < kinds.length; i++) {
    elements.each(function() {
      if ($(this).hasClass(kinds[i].dataset.name)) {
        $(this).parent().addClass('hide');
      }
    });
  }
}


showBtn.on('click', function() {
  itemsToHide = $('.catalog-checkbox-button:checkbox:not(:checked)');
  hideShow(itemsToHide);
});

resetBtn.on('click', function() {
  hideShow();
  rads.prop('checked', false);
});