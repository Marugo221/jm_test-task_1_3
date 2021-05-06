var items = document.querySelectorAll('.menu-modal li'); // массив кнопок меню
console.log(items);

for (var i = 0; i < items.length; i++) {
  clickitem(items[i]);
}

function clickitem(item) {
    item.addEventListener('click', function () {
      toggleButton(item.className);
      
      item.classList.add('active');
      item.classList.add('modal__menu--selected');
    });
}

function toggleButton(filterName) {
    for (var j = 0; j < items.length; j++) {
        items[j].classList.remove('active');
        items[j].classList.remove('modal__menu--selected');
    }
}  