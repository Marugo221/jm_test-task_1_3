var items = document.querySelectorAll('.menu-item'); // массив кнопок меню
var contents = document.querySelectorAll('.services__description'); //массив дивов контента

for (var i = 0; i < contents.length; i++) {
  clickitem(contents[i],items[i]);
}

function clickitem(content, item) {
    item.addEventListener('click', function () {
      toggleButton(content.className);
      // toggleButton(content.dataset.data-filter);  решение через датасеты
      item.classList.add('active');
    });
}

function toggleButton(filterName) {
    for (var j = 0; j < items.length; j++) {
        items[j].classList.remove('active');
        contents[j].classList.add('hidden');
    }

    var item = document.querySelector("." + filterName.split(" ")[0] + "." + filterName.split(" ")[1]);
    //var item = document.querySelector("." + filterName); решение через датасеты
    console.log(item);
    console.log(filterName);
    if(item) {
        item.classList.remove('hidden');
    }
}  